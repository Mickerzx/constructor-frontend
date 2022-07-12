import { IFile } from './file.interface';

export interface ISettingsResponse {
  favicon: IFile | null;
  user_agreement: IFile | null;
  public_offer: IFile | null;
  privacy_policy: IFile | null;
}
