import type { NextPage } from 'next';
import MainLayout from '../layouts/MainLayout/MainLayout';
import RegistrationForm from '../components/forms/registration/Registration';
import { IPage } from '../types-space/interfaces/ITemplate';

type PropsType = {
  structure: IPage[];
};

// TODO: В регистрации ссылки на публичную оферту!
const RegistrationPage: NextPage<PropsType> = ({}: PropsType) => {
  return (
    <MainLayout isShowBreadcrumbs={false}>
      <RegistrationForm />
    </MainLayout>
  );
};

export default RegistrationPage;
