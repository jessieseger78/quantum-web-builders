import { NotionServicesResponse } from '../types/notion';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export async function fetchNotionServices(): Promise<NotionServicesResponse> {
  try {
    const apiUrl = `${SUPABASE_URL}/functions/v1/notion-services`;

    const headers = {
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json',
    };

    const response = await fetch(apiUrl, { headers });

    if (!response.ok) {
      throw new Error(`Failed to fetch services: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Notion services:', error);
    return {
      services: [],
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
