import React, { FC, useState } from 'react';
import { IMallProductCard } from './IMallProductCard';
// import './MallProductCard.css';

const MallProductCard: FC<IMallProductCard> = ({
  title = 'Диван Лени Textile Rustic',
  articul = 'P94M-LJ4K',
  image,
  labels = true,
  labelsValues = [
    { name: 'new', value: 'Новинка' },
    { name: 'discount', value: '50%' },
    { name: 'hit', value: 'Хит' },
  ],
  actualPrice = '17050',
  oldPriceValue = '21990',
  available = true,
  availableCount = '2',
  cartButton = 'small',
  accentColor = '#0364ed',
  accentSecondaryColor = '#3bb273',
  textMainColor = '#000000',
  textSecondaryColor = '#8a8a8a',
  margin = '12px auto',
  onClickFavoritesButton,
  onClickCompareButton,
  onClickCartButton,
}) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className="mall-card__block"
      style={{ margin: margin }}
      onMouseOver={() => setActive(true)}
      onFocus={() => setActive(true)}
      onMouseOut={() => setActive(false)}
      onBlur={() => setActive(false)}
    >
      <div className="mall-card__labels">
        {labels &&
          labelsValues.map((label, index) => (
            <p
              key={index}
              className={
                label.name === 'new' ? 'labels__new' : label.name === 'discount' ? 'labels__discount' : 'labels__hit'
              }
            >
              {label.value}
            </p>
          ))}

        {active && (
          <div className="mall-labels__block">
            <button
              onClick={onClickCompareButton}
              title="Сравнить"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill={textSecondaryColor}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.5 10H2.5V19H0.5V10ZM16.5 6H18.5V19H16.5V6ZM8.5 0H10.5V19H8.5V0Z" />
              </svg>
            </button>

            <button
              onClick={onClickFavoritesButton}
              title="Избранное"
            >
              <svg
                width="21"
                height="19"
                viewBox="0 0 21 19"
                fill={textSecondaryColor}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 0C18.038 0 20.5 2.5 20.5 6C20.5 13 13 17 10.5 18.5C8 17 0.5 13 0.5 6C0.5 2.5 3 0 6 0C7.86 0 9.5 1 10.5 2C11.5 1 13.14 0 15 0ZM11.434 15.604C12.315 15.048 13.11 14.495 13.854 13.903C16.835 11.533 18.5 8.943 18.5 6C18.5 3.64 16.963 2 15 2C13.924 2 12.76 2.57 11.914 3.414L10.5 4.828L9.086 3.414C8.24 2.57 7.076 2 6 2C4.06 2 2.5 3.656 2.5 6C2.5 8.944 4.166 11.533 7.145 13.903C7.89 14.495 8.685 15.048 9.566 15.603C9.865 15.792 10.161 15.973 10.5 16.175C10.839 15.973 11.135 15.792 11.434 15.604Z" />
              </svg>
            </button>
          </div>
        )}
      </div>
      <div className="mall-card__image">
        <img
          src={image}
          alt="product"
        />
      </div>
      <h3
        className="mall-card__title"
        style={{ color: textMainColor }}
      >
        {title}
      </h3>
      <div
        className="mall-card__art"
        style={{ color: textSecondaryColor }}
      >
        Артикул {articul}
      </div>
      {available && (
        <div
          className="mall-card__available"
          style={{ color: accentSecondaryColor }}
        >
          В наличии <span style={{ color: textSecondaryColor }}>{availableCount} шт</span>
        </div>
      )}
      <div
        className="mall-card__prices"
        style={{ color: textMainColor }}
      >
        <span>{actualPrice} &#8381;</span>
        {oldPriceValue && (
          <span
            className="mall-prices__old"
            style={{ color: textSecondaryColor }}
          >
            {oldPriceValue} &#8381;
          </span>
        )}
      </div>
      <div className="mall-card__button">
        {cartButton === 'none' ? (
          ''
        ) : cartButton === 'big' ? (
          <button
            className="mall-button__long"
            style={{ color: accentColor, borderColor: accentColor }}
            onClick={onClickCartButton}
          >
            В корзину
          </button>
        ) : (
          <button
            className="mall-button__icon"
            onClick={onClickCartButton}
            title="В корзину"
          >
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill={accentColor}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 4C0 1.79086 1.79086 0 4 0H42C44.2091 0 46 1.79086 46 4V42C46 44.2091 44.2091 46 42 46H4C1.79086 46 0 44.2091 0 42V4Z" />
              <path
                d="M18 19V17C18 15.6739 18.5268 14.4021 19.4645 13.4645C20.4021 12.5268 21.6739 12 23 12C24.3261 12 25.5979 12.5268 26.5355 13.4645C27.4732 14.4021 28 15.6739 28 17V19H31C31.2652 19 31.5196 19.1054 31.7071 19.2929C31.8946 19.4804 32 19.7348 32 20V32C32 32.2652 31.8946 32.5196 31.7071 32.7071C31.5196 32.8946 31.2652 33 31 33H15C14.7348 33 14.4804 32.8946 14.2929 32.7071C14.1054 32.5196 14 32.2652 14 32V20C14 19.7348 14.1054 19.4804 14.2929 19.2929C14.4804 19.1054 14.7348 19 15 19H18ZM18 21H16V31H30V21H28V23H26V21H20V23H18V21ZM20 19H26V17C26 16.2044 25.6839 15.4413 25.1213 14.8787C24.5587 14.3161 23.7956 14 23 14C22.2044 14 21.4413 14.3161 20.8787 14.8787C20.3161 15.4413 20 16.2044 20 17V19Z"
                fill="white"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default MallProductCard;
