import CreateOrderForm from '../../components/forms/createOrder/CreateOrder';
import styles from './OrderContainer.module.scss';

const OrderContainer = () => {
  return (
    <div className={styles.orderContainer}>
      <CreateOrderForm />
      <div className={styles.countBlock}>
        <form className={styles.countForm}>
          <table className={styles.countPositions}>
            <tr>
              <td>Товаров на сумму:</td>
              <td className={styles.value}>119 995 ₽</td>
            </tr>
            <tr>
              <td>Доставка</td>
              <td className={`${styles.value} ${styles.free}`}>Бесплатно</td>
            </tr>
          </table>
          <hr className={styles.divider} />
          <table className={styles.countTotal}>
            <tr>
              <td>Итого:</td>
              <td className={styles.value}>119 995 ₽</td>
            </tr>
          </table>
          <button
            className={styles.placeOrderButton}
            type="submit"
          >
            Оформление заказа
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderContainer;
