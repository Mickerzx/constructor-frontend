import type { NextPage } from 'next';
import MainLayout from '../layouts/MainLayout/MainLayout';
import AuthForm from '../components/forms/auth/Auth';
import { IPage } from '../types-space/interfaces/ITemplate';

type PropsType = {
  structure: IPage[];
};

const AuthPage: NextPage<PropsType> = ({}: PropsType) => {
  return (
    <MainLayout isShowBreadcrumbs={false}>
      <AuthForm />
    </MainLayout>
  );
};

export default AuthPage;
