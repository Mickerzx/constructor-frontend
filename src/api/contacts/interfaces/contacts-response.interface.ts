export interface IContactAddresses {
  title: string;
  address: string;
}

export interface IAdditionalContacts {
  title: string;
  phone: string;
  email: string;
}

export interface ISocialContacts {
  facebook: string | null;
  instagram: string | null;
  ok: string | null;
  telegram: string | null;
  vk: string | null;
}

export interface IContactsResponse {
  _id: string;
  mainEmail: string;
  additional_email: string[];
  deletedAt: null | string;
  addresses: IContactAddresses[];
  mainPhone: string;
  additional_contacts: IAdditionalContacts[];
  createdAt: string;
  updatedAt: string;
  identifier: number;
  social_networks: ISocialContacts;
}
