export interface TemplateResponse {
  _id: string;
  type: string;
  hosts: string[];
  preview: string | null;
  categories: string[];
  structure: any | null;
  deletedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  identifier: number;
  __v: number;
}
