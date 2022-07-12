// Servers
import { scsBackendServer } from '../servers/scs-backend.server';

// Interfaces
import { TemplateResponse } from './interfaces/template-response.interface';

export const fetchTemplate = async (host: string): Promise<TemplateResponse> => {
  const { data } = await scsBackendServer.get<TemplateResponse>(`/api/template/public`, { headers: { Host: host } });

  return data;
};
