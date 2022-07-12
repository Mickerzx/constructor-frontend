import { useState } from 'react';
import DeliveryAddressForm from '../../components/forms/deliveryAddress/DeliveryAddress';
import ProfileForm from '../../components/forms/profile/Profile';
import styles from './AccountPageContainer.module.scss';

const AccountPageContainer = () => {
  type AccountStateType = 'profile' | 'delivery_address';

  const [accountState, setAccountState] = useState<AccountStateType>('profile');

  return (
    <div className={styles.pageContainer}>
      <ul className={styles.navigationList}>
        <li
          className={styles.navigationItem}
          onClick={() => {}}
          role="presentation"
        >
          История заказов
        </li>
        <li
          className={styles.navigationItem}
          onClick={() => {
            setAccountState('delivery_address');
          }}
          role="presentation"
        >
          Адрес доставки
        </li>
        <li
          className={styles.navigationItem}
          onClick={() => {
            setAccountState('profile');
          }}
          role="presentation"
        >
          Профиль
        </li>
        <li
          className={styles.navigationItem}
          onClick={() => {}}
          role="presentation"
        >
          Выход
        </li>
      </ul>
      <div>
        {accountState === 'profile' && <ProfileForm />}
        {accountState === 'delivery_address' && <DeliveryAddressForm />}
      </div>
    </div>
  );
};

export default AccountPageContainer;
