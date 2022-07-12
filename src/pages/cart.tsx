import type { NextPage } from 'next';
import OrderContainer from '../containers/CartPage/OrderContainer';
import MainLayout from '../layouts/MainLayout/MainLayout';

const Cart: NextPage = () => {
  // Тут стейт, отображающий разные контейнеры в зависимости от статуса продвижения заказа
  // Что за фигня с гидратацией на этой странице?
  return (
    <MainLayout>
      <OrderContainer />
    </MainLayout>
  );
};

export default Cart;
