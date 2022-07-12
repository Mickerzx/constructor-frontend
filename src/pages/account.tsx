import type { NextPage } from 'next';
import MainLayout from '../layouts/MainLayout/MainLayout';
import AccountPageContainer from '../containers/AccountPage/AccountPageContainer';
import { IPage } from '../types-space/interfaces/ITemplate';

type PropsType = {
  structure: IPage[];
};

// TODO: В профиле ссылки на публичную оферту!
const ProfilePage: NextPage<PropsType> = ({}: PropsType) => {
  return (
    <MainLayout>
      <AccountPageContainer />
    </MainLayout>
  );
};

export default ProfilePage;
