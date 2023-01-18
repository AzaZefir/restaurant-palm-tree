import React from 'react'
import './EmptyBasket.css'
import emptyBasketIcon from '../../common/image/emptyBusketSvg.svg'

const EmptyBasket = () => {
  return (
    <div className="wrapper">
    <main>
      <div className="empty-wrapper">
        <h1>Корзина пустая 😕</h1>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на
          главную страницу.
        </p>
        <img src={emptyBasketIcon} alt="" />
        <a href="./index.html">
          <button className="button button--black">Вернуться назад</button>
        </a>
      </div>
    </main>
  </div>
  )
}

export default EmptyBasket