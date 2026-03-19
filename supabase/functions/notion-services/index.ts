import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface NotionService {
  id: string;
  title: string;
  description: string;
  features: string[];
  startingPrice: string;
  icon: string;
  status: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const picaSecretKey = Deno.env.get("PICA_SECRET_KEY");
    const picaNotionConnectionKey = Deno.env.get("PICA_NOTION_CONNECTION_KEY");

    if (!picaSecretKey || !picaNotionConnectionKey) {
      throw new Error("Missing required Pica credentials");
    }

    // Fetch data from "Quantum Client Edits" Notion database via Pica API
    const picaResponse = await fetch(
      `https://api.pica.to/v1/connections/${picaNotionConnectionKey}/databases/query`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${picaSecretKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          database_title: "Quantum Client Edits",
          filter: {
            property: "Status",
            select: {
              equals: "Done",
            },
          },
        }),
      }
    );

    if (!picaResponse.ok) {
      const errorText = await picaResponse.text();
      throw new Error(`Pica API error: ${picaResponse.status} - ${errorText}`);
    }

    const notionData = await picaResponse.json();

    // Transform Notion data to our format
    const services: NotionService[] = notionData.results.map((item: any) => ({
      id: item.id,
      title: item.properties.Title?.title?.[0]?.plain_text || "",
      description: item.properties.Description?.rich_text?.[0]?.plain_text || "",
      features: item.properties.Features?.rich_text?.[0]?.plain_text
        ?.split("\n")
        .filter((f: string) => f.trim()) || [],
      startingPrice: item.properties.Price?.rich_text?.[0]?.plain_text || "",
      icon: item.properties.Icon?.select?.name || "Zap",
      status: item.properties.Status?.select?.name || "",
    }));

    // Filter only published services
    const publishedServices = services.filter(s => s.status === "Done");

    return new Response(
      JSON.stringify({ services: publishedServices }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching Notion data:", error);

    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error",
        services: [], // Return empty array as fallback
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
