import React from 'react';
import { CartMinusSvg } from '../common/svg/CartMinusSvg';
import { CartPlusSvg } from '../common/svg/CartPlusSvg';
import { CartRemoveSvg } from './../common/svg/CartRemoveSvg';

const BasketCard = ({ price, item, name, modalImage, onAddData }) => {
  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="pizza-block__image" src={modalImage} alt="Pizza" />
      </div>
      <div className="cart__item-info">
        <h3>{name}</h3>
        <p>тонкое тесто, 26 см.</p>
      </div>
      <div className="cart__item-count">
        <div className="button button--outline button--circle cart__item-count-minus">
          <CartMinusSvg />
        </div>
        <b>{item.total}</b>
        <div
          onClick={() => onAddData(item)}
          className="button button--outline button--circle cart__item-count-plus">
          <CartPlusSvg />
        </div>
      </div>
      <div className="cart__item-price">
        <b>{item.total * price} сом</b>
      </div>
      <div className="cart__item-remove">
        <div className="button button--outline button--circle">
          <CartRemoveSvg />
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
