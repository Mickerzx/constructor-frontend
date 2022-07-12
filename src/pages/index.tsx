import type { GetServerSideProps, NextPage } from 'next';
import { fetchTemplate } from '../api/template/template.api';
import { structureParser } from '../utils/structureParser';
import MainLayout from '../layouts/MainLayout/MainLayout';
import MainHeaderContent from '../containers/MainHeaderContent';
import { IBlock } from '../types-space/interfaces/IComponent';
import { IPage } from '../types-space/interfaces/ITemplate';
import { ISettingsResponse } from '../api/settings/interfaces/settings-response.interface';
import { IContactsResponse } from '../api/contacts/interfaces/contacts-response.interface';
import { fetchContacts } from '../api/contacts/contacts.api';
import { fetchSettings } from '../api/settings/settings.api';

type PropsType = {
  structure: IPage[];
  settings: ISettingsResponse;
  contacts: IContactsResponse;
};

const Home: NextPage<PropsType> = ({ structure, settings, contacts }: PropsType) => {
  const canvas: IBlock[] = structure[0].canvas;
  return (
    <MainLayout
      contacts={contacts}
      settings={settings}
      isShowBreadcrumbs={false}
    >
      <MainHeaderContent canvas={canvas} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const host = req.headers.host!;
  const { structure: stringStructure } = await fetchTemplate(host);
  const settings = await fetchSettings(host);
  const contacts = await fetchContacts(host);

  /* Если проект не запускается - 2 верхние строки закомментируй, одну ниже - раскомментируй */
  // const stringStructure = `[{"page":"main","canvas":[
  //   {"blockId":"l524y1ao","type":"MallDivider","parameters":{"width":"100%","borderWidth":"2px","color":"darkgray","borderStyle":"solid","margin":"16px 0","children":"Текст слева","textPosition":"left"},"order":1}]}]`;
  //
  // const settings = {
  //   favicon: {
  //     url: 'https://theconferenceforum.org/wp-content/uploads//2022/02/ICON-Positive-logo-PNG-nostrap-210x57.png'
  //   },
  //   user_agreement: null,
  //   public_offer: {
  //     url: 'https://google.com'
  //   },
  //   privacy_policy: {
  //     url: 'https://mail.ru'
  //   },
  // }
  //
  // const contacts = {
  //   mainPhone: '8 888 888-88-88',
  //   social_networks: {
  //     facebook: 'https://ru-ru.facebook.com',
  //     instagram: 'https://www.instagram.com',
  //     ok: 'https://ok.ru',
  //     telegram: 'https://web.telegram.org',
  //     vk: 'https://vk.com'
  //   },
  // }

  const structure = await structureParser(stringStructure);

  if (!structure) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      structure,
      settings,
      contacts,
    },
  };
};

export default Home;
