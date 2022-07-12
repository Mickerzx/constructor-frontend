export interface IFile {
  _id: string;
  originalName: string;
  mimetype: string;
  key: string;
  url: string;
  size: number;
  formats: {
    thumbnail: {
      key: string;
      url: string;
    };
  };
  linked: boolean;
  createdAt: string;
  updatedAt: string;
}
