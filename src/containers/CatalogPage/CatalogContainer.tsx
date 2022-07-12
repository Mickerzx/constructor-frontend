import Link from 'next/link';
import { useState } from 'react';
import { MallPagination } from '@yeticrab/mall-constructor-components';
import { InputNumber, Select, Slider } from 'antd';
import MallProductCard from '../../components/temporaryWidgets/ProductCard/MallProductCard';
import 'antd/dist/antd.css';
import styles from './CatalogContainer.module.scss';

const CatalogContainer = () => {
  const { Option } = Select;
  const [rangeValue, setRangeValue] = useState<[number, number]>([20, 20000]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const rangeChange = (value: [number, number]) => {
    setRangeValue(value);
  };
  return (
    <>
      <h1>Мебель</h1>
      <div className={styles.productsContainer}>
        <div className={styles.filtersBlock}>
          <h2>Фильтры</h2>

          <h3>Сортировка</h3>
          <Select
            className={styles.select}
            defaultValue="sale"
            onChange={handleChange}
          >
            <Option value="popular">Популярные</Option>
            <Option value="new">Новинки</Option>
            <Option value="sale">Сначала недорогие</Option>
          </Select>

          <h3>Цена</h3>
          <Slider
            range={{ draggableTrack: true }}
            max={20000}
            value={rangeValue}
            onChange={rangeChange}
          />
          <div className={styles.inputRangeContainer}>
            <InputNumber
              prefix="От"
              className={styles.inputRange}
              min={1}
              value={rangeValue[0]}
            />
            <InputNumber
              prefix="До"
              className={styles.inputRange}
              min={1}
              value={rangeValue[1]}
            />
          </div>
          <h2>Каталог</h2>
          <ul className={styles.catalogCategories}>
            <li>
              <Link href="">Мебель</Link>
            </li>
            <li>
              <Link href="">Одежда</Link>
            </li>
            <li>
              <Link href="">Электроника</Link>
            </li>
            <li>
              <Link href="">Лекарства</Link>
            </li>
            <li>
              <Link href="">Косметика</Link>
            </li>
            <li>
              <Link href="">Бытовые товары</Link>
            </li>
            <li>
              <Link href="">Строительные материалы</Link>
            </li>
            <li>
              <Link href="">Дом ремонт</Link>
            </li>
            <li>
              <Link href="">Садовая техника</Link>
            </li>
            <li>
              <Link href="">Еда</Link>
            </li>
            <li>
              <Link href="">Игрушки</Link>
            </li>
          </ul>
          <button
            type="button"
            className={styles.showMoreButton}
          >
            + Еще 20
          </button>
          <form></form>
        </div>
        <div className={styles.productsBlock}>
          <MallProductCard
            title="Диван Лени Textile Rustic"
            articul="P94M-LJ4K"
            image="/temporary/divan.png"
            labels={true}
            labelsValues={[
              { name: 'new', value: 'Новинка' },
              { name: 'discount', value: '50%' },
              { name: 'hit', value: 'Хит' },
            ]}
            actualPrice="17050"
            oldPriceValue="21990"
            available={true}
            availableCount="2"
            cartButton="small"
            accentColor="#0364ed"
            accentSecondaryColor="#3bb273"
            textMainColor="#000000"
            textSecondaryColor="#8a8a8a"
            margin="12px auto"
            onClickFavoritesButton={() => {}}
            onClickCompareButton={() => {}}
            onClickCartButton={() => {}}
          />

          <MallProductCard
            title="Диван Лени Textile Rustic"
            articul="P94M-LJ4K"
            image="/temporary/divan.png"
            labels={true}
            labelsValues={[
              { name: 'new', value: 'Новинка' },
              { name: 'discount', value: '50%' },
              { name: 'hit', value: 'Хит' },
            ]}
            actualPrice="17050"
            oldPriceValue="21990"
            available={true}
            availableCount="2"
            cartButton="small"
            accentColor="#0364ed"
            accentSecondaryColor="#3bb273"
            textMainColor="#000000"
            textSecondaryColor="#8a8a8a"
            margin="12px auto"
            onClickFavoritesButton={() => {}}
            onClickCompareButton={() => {}}
            onClickCartButton={() => {}}
          />

          <MallProductCard
            title="Диван Лени Textile Rustic"
            articul="P94M-LJ4K"
            image="/temporary/divan.png"
            labels={true}
            labelsValues={[
              { name: 'new', value: 'Новинка' },
              { name: 'discount', value: '50%' },
              { name: 'hit', value: 'Хит' },
            ]}
            actualPrice="17050"
            oldPriceValue="21990"
            available={true}
            availableCount="2"
            cartButton="small"
            accentColor="#0364ed"
            accentSecondaryColor="#3bb273"
            textMainColor="#000000"
            textSecondaryColor="#8a8a8a"
            margin="12px auto"
            onClickFavoritesButton={() => {}}
            onClickCompareButton={() => {}}
            onClickCartButton={() => {}}
          />

          <MallProductCard
            title="Диван Лени Textile Rustic"
            articul="P94M-LJ4K"
            image="/temporary/divan.png"
            labels={true}
            labelsValues={[
              { name: 'new', value: 'Новинка' },
              { name: 'discount', value: '50%' },
              { name: 'hit', value: 'Хит' },
            ]}
            actualPrice="17050"
            oldPriceValue="21990"
            available={true}
            availableCount="2"
            cartButton="small"
            accentColor="#0364ed"
            accentSecondaryColor="#3bb273"
            textMainColor="#000000"
            textSecondaryColor="#8a8a8a"
            margin="12px auto"
            onClickFavoritesButton={() => {}}
            onClickCompareButton={() => {}}
            onClickCartButton={() => {}}
          />

          <MallProductCard
            title="Диван Лени Textile Rustic"
            articul="P94M-LJ4K"
            image="/temporary/divan.png"
            labels={true}
            labelsValues={[
              { name: 'new', value: 'Новинка' },
              { name: 'discount', value: '50%' },
              { name: 'hit', value: 'Хит' },
            ]}
            actualPrice="17050"
            oldPriceValue="21990"
            available={true}
            availableCount="2"
            cartButton="small"
            accentColor="#0364ed"
            accentSecondaryColor="#3bb273"
            textMainColor="#000000"
            textSecondaryColor="#8a8a8a"
            margin="12px auto"
            onClickFavoritesButton={() => {}}
            onClickCompareButton={() => {}}
            onClickCartButton={() => {}}
          />

          <MallProductCard
            title="Диван Лени Textile Rustic"
            articul="P94M-LJ4K"
            image="/temporary/divan.png"
            labels={true}
            labelsValues={[
              { name: 'new', value: 'Новинка' },
              { name: 'discount', value: '50%' },
              { name: 'hit', value: 'Хит' },
            ]}
            actualPrice="17050"
            oldPriceValue="21990"
            available={true}
            availableCount="2"
            cartButton="small"
            accentColor="#0364ed"
            accentSecondaryColor="#3bb273"
            textMainColor="#000000"
            textSecondaryColor="#8a8a8a"
            margin="12px auto"
            onClickFavoritesButton={() => {}}
            onClickCompareButton={() => {}}
            onClickCartButton={() => {}}
          />

          <MallProductCard
            title="Диван Лени Textile Rustic"
            articul="P94M-LJ4K"
            image="/temporary/divan.png"
            labels={true}
            labelsValues={[
              { name: 'new', value: 'Новинка' },
              { name: 'discount', value: '50%' },
              { name: 'hit', value: 'Хит' },
            ]}
            actualPrice="17050"
            oldPriceValue="21990"
            available={true}
            availableCount="2"
            cartButton="small"
            accentColor="#0364ed"
            accentSecondaryColor="#3bb273"
            textMainColor="#000000"
            textSecondaryColor="#8a8a8a"
            margin="12px auto"
            onClickFavoritesButton={() => {}}
            onClickCompareButton={() => {}}
            onClickCartButton={() => {}}
          />

          <MallProductCard
            title="Диван Лени Textile Rustic"
            articul="P94M-LJ4K"
            image="/temporary/divan.png"
            labels={true}
            labelsValues={[
              { name: 'new', value: 'Новинка' },
              { name: 'discount', value: '50%' },
              { name: 'hit', value: 'Хит' },
            ]}
            actualPrice="17050"
            oldPriceValue="21990"
            available={true}
            availableCount="2"
            cartButton="small"
            accentColor="#0364ed"
            accentSecondaryColor="#3bb273"
            textMainColor="#000000"
            textSecondaryColor="#8a8a8a"
            margin="12px auto"
            onClickFavoritesButton={() => {}}
            onClickCompareButton={() => {}}
            onClickCartButton={() => {}}
          />

          <MallProductCard
            title="Диван Лени Textile Rustic"
            articul="P94M-LJ4K"
            image="/temporary/divan.png"
            labels={true}
            labelsValues={[
              { name: 'new', value: 'Новинка' },
              { name: 'discount', value: '50%' },
              { name: 'hit', value: 'Хит' },
            ]}
            actualPrice="17050"
            oldPriceValue="21990"
            available={true}
            availableCount="2"
            cartButton="small"
            accentColor="#0364ed"
            accentSecondaryColor="#3bb273"
            textMainColor="#000000"
            textSecondaryColor="#8a8a8a"
            margin="12px auto"
            onClickFavoritesButton={() => {}}
            onClickCompareButton={() => {}}
            onClickCartButton={() => {}}
          />
          <div className={styles.pagination}>
            <MallPagination
              pageSize={10}
              totalElements={1000}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogContainer;
