import './Basket.css';
import { Link } from 'react-router-dom';
import EmptyBasket from './emptyBasket/EmptyBasket';
import BasketCard from './BasketCard';
import ClearCartSvg from '../common/svg/ClearCartSvg';
import GoBackSvg from '../common/svg/GoBackSvg';
import BasketSvg from '../common/svg/BasketSvg';

const Basket = ({
  emptyBasketData,
  totalCount,
  totalPrice,
  onAddData,
  onClearCardData,
  onDeleteData,
}) => {
  return (
    <div className="wrapper">
      {emptyBasketData.length ? (
        <main>
          <div className="content">
            <div className="container container--cart">
              <div className="cart">
                <div className="cart__top">
                  <h2 className="content__title">
                    <BasketSvg />
                    Корзина
                  </h2>
                  <div onClick={onClearCardData} className="cart__clear">
                    <ClearCartSvg />
                    <span>Очистить корзину</span>
                  </div>
                </div>
                <div className="content__items">
                  {emptyBasketData.map((el) => (
                    <BasketCard
                      onDeleteData={onDeleteData}
                      key={el.id}
                      onAddData={onAddData}
                      totalCount={totalCount}
                      totalPrice={totalPrice}
                      el={el}
                      item={emptyBasketData.find((elem) => elem.id === el.id)}
                      {...el}
                    />
                  ))}
                </div>
                <div className="cart__bottom">
                  <div className="cart__bottom-details">
                    <span>
                      Всего пицц: <b>{totalCount} шт.</b>
                    </span>
                    <span>
                      Сумма заказа: <b>{totalPrice} сом</b>
                    </span>
                  </div>
                  <div className="cart__bottom-buttons">
                    <Link to="/menu" className="button button--outline button--add go-back-btn">
                      <GoBackSvg />
                      <span>Вернуться назад</span>
                    </Link>
                    <div className="button pay-btn">
                      <span>Оплатить сейчас</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      ) : (
        <EmptyBasket />
      )}
    </div>
  );
};

export default Basket;
