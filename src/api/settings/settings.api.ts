// Servers
import { scsBackendServer } from '../servers/scs-backend.server';

// Interfaces
import { ISettingsResponse } from './interfaces/settings-response.interface';

export const fetchSettings = async (host: string): Promise<ISettingsResponse> => {
  const { data } = await scsBackendServer.get<ISettingsResponse>(`/api/project-settings/public`, {
    headers: { Host: host },
  });

  return data;
};
