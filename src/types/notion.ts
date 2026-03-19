export interface NotionService {
  id: string;
  title: string;
  description: string;
  features: string[];
  startingPrice: string;
  icon: string;
  status: string;
}

export interface NotionServicesResponse {
  services: NotionService[];
  error?: string;
}
