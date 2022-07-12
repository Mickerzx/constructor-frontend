import React, { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';
import classnames from 'classnames';
import Wrapper from '../Wrapper/Wrapper';
import { MallBreadcrumbs, MallMenu, MallFooter } from '@yeticrab/mall-constructor-components';
import { ISettingsResponse } from '../../api/settings/interfaces/settings-response.interface';
import { IContactsResponse } from '../../api/contacts/interfaces/contacts-response.interface';
import { IMallBreadcrumbs } from '@yeticrab/mall-constructor-components/dist/cjs/types/components/Breadcrumbs/IMallBreadcrumbs';
import { pagesDictionary } from '../../dictionaries/pagesDictionary';
import styles from './MainLayout.module.scss';

type PropsType = {
  children: ReactNode;
  isShowBreadcrumbs?: boolean;
  settings?: ISettingsResponse;
  contacts?: IContactsResponse;
};

const MainLayout: FC<PropsType> = ({ children, isShowBreadcrumbs = true, settings, contacts }) => {
  const router = useRouter();
  const breadcrumbsParameters: IMallBreadcrumbs = {
    breadcrumbsData: [
      { url: '/', name: 'Главная' },
      { url: 'current page', name: pagesDictionary[router.asPath] || router.asPath },
    ],
    position: 'left',
    separator: '/',
    color: 'gray',
    margin: '20px 0 20px -40px',
  };

  const headerMenu = [
    {
      url: '',
      title: 'Акции',
    },
    {
      url: '',
      title: 'Новинки',
    },
    {
      url: '',
      title: 'Одежда',
    },
    {
      url: '',
      title: 'Мебель',
    },
    {
      url: '',
      title: 'Бытовая техника',
    },
    // {
    //   url: '',
    //   title: 'Спортивные товары',
    // },
    {
      url: '',
      title: 'Косметика',
    },
    {
      url: '',
      title: 'Сантехника',
    },
    {
      url: '',
      title: 'Строительство',
    },
    {
      url: '',
      title: 'Дом и сад',
    },
    // {
    //   url: '',
    //   title: '...',
    // },
  ];

  const footerMenu = [
    {
      url: '/products',
      title: 'Каталог',
    },
    {
      url: '',
      title: 'О компании',
    },
    {
      url: '',
      title: 'Контакты',
    },
    {
      url: '',
      title: 'Доставка',
    },
    {
      url: '',
      title: 'Оплата',
    },
    {
      url: '/auth',
      title: 'Личный кабинет',
    },
  ];

  return (
    <div className={classnames(styles.layout, styles.scrollTrap)}>
      <header>
        <MallMenu
          navigation={headerMenu}
          login
          logo="https://mall-cms.storage.yandexcloud.net/common/images/24f7def8-67bb-4863-a115-86b404b494ef.svg"
          search
          phone={contacts?.mainPhone}
          basket
          onLogin={() => router.push('/auth')}
          onBasket={() => router.push('/cart')}
        />
      </header>
      <main>
        <Wrapper>
          {isShowBreadcrumbs && <MallBreadcrumbs {...breadcrumbsParameters} />}
          {children}
        </Wrapper>
      </main>
      <footer className={styles.footer}>
        <MallFooter
          menuList={footerMenu}
          phone={contacts?.mainPhone}
          logo="https://mall-cms.storage.yandexcloud.net/common/images/24f7def8-67bb-4863-a115-86b404b494ef.svg"
          companyName="2022 © ООО «Рога и копыта»"
          constructor_url="/mall-cms"
          public_offer={settings?.public_offer?.url}
          privacy_policy={settings?.privacy_policy?.url}
          instagram={contacts?.social_networks.instagram ? contacts.social_networks.instagram : ''}
          telegram={contacts?.social_networks.telegram ? contacts.social_networks.telegram : ''}
          ok={contacts?.social_networks.ok ? contacts.social_networks.ok : ''}
          vk={contacts?.social_networks.vk ? contacts.social_networks.vk : ''}
          facebook={contacts?.social_networks.facebook ? contacts.social_networks.facebook : ''}
        />
      </footer>
    </div>
  );
};

export default MainLayout;
