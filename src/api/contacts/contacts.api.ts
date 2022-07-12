// Servers
import { scsBackendServer } from '../servers/scs-backend.server';

// Interfaces
import { IContactsResponse } from './interfaces/contacts-response.interface';

export const fetchContacts = async (host: string): Promise<IContactsResponse> => {
  const { data } = await scsBackendServer.get<IContactsResponse>(`/api/contacts/public`, { headers: { Host: host } });

  return data;
};
