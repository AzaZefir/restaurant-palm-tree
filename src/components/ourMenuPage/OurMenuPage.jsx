import React from 'react'
import './OurMenuPage.css'
import searchIcon from '../common/image/search-normal 1.svg'
import SortLabelSvg from './../common/svg/SortLabelSvg';

const OurMenuPage = () => {
  return (
    <div className="wrapper">
      <main>
        <section className="about about-menu-bg d-flex">
          <span className="about-greeting">Our menu</span>
        </section>
        <section className="search-block">
          <div className="container d-flex">
            <div className="categories">
              <ul>
                <li className="active">Все</li>
                <li>Мясные</li>
                <li>Вегетарианская</li>
                <li>Гриль</li>
                <li>Острые</li>
                <li>Закрытые</li>
              </ul>
            </div>
            <div className="sort">
              <div className="sort__label">
                <SortLabelSvg/>
                <b>Сортировка по:</b>
                <span>популярности</span>
              </div>
              <div className="sort__popup">
                <ul>
                  <li className="active">популярности</li>
                  <li>цене</li>
                  <li>алфавиту</li>
                </ul>
              </div>
            </div>
            <div className="search d-flex">
              <input type="text" placeholder="Начать поиск" /><img
                src={searchIcon}
                alt="" />
            </div>
          </div>
        </section>
        <section className="often-order">
          <div className="container d-flex">
            <div className="often-order__cards d-flex">
              <div className="often-order__card d-flex">
                <div className="d-flex">
                  <h5>Пицца из половинок</h5>
                  <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
                </div>
                <span>от 580 сом</span>
              </div>
              <div className="often-order__card d-flex">
                <div className="d-flex">
                  <h5>Пицца из половинок</h5>
                  <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
                </div>
                <span>от 580 сом</span>
              </div>
              <div className="often-order__card d-flex">
                <div className="d-flex">
                  <h5>Пицца из половинок</h5>
                  <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
                </div>
                <span>от 580 сом</span>
              </div>
              <div className="often-order__card d-flex">
                <div className="d-flex">
                  <h5>Пицца из половинок</h5>
                  <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
                </div>
                <span>от 580 сом</span>
              </div>
              <div className="often-order__card d-flex">
                <div className="d-flex">
                  <h5>Пицца из половинок</h5>
                  <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
                </div>
                <span>от 580 сом</span>
              </div>
              <div className="often-order__card d-flex">
                <div className="d-flex">
                  <h5>Пицца из половинок</h5>
                  <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
                </div>
                <span>от 580 сом</span>
              </div>
              <div className="often-order__card d-flex">
                <div className="d-flex">
                  <h5>Пицца из половинок</h5>
                  <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
                </div>
                <span>от 580 сом</span>
              </div>
              <div className="often-order__card d-flex">
                <div className="d-flex">
                  <h5>Пицца из половинок</h5>
                  <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
                </div>
                <span>от 580 сом</span>
              </div>
              <div className="often-order__card d-flex">
                <div className="d-flex">
                  <h5>Пицца из половинок</h5>
                  <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
                </div>
                <span>от 580 сом</span>
              </div>
              <div className="often-order__card d-flex">
                <div className="d-flex">
                  <h5>Пицца из половинок</h5>
                  <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
                </div>
                <span>от 580 сом</span>
              </div>
              <div className="often-order__card d-flex">
                <div className="d-flex">
                  <h5>Пицца из половинок</h5>
                  <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
                </div>
                <span>от 580 сом</span>
              </div>
              <div className="often-order__card d-flex">
                <div className="d-flex">
                  <h5>Пицца из половинок</h5>
                  <p>Соберите свою пиццу 35 см с двумя разными вкусами</p>
                </div>
                <span>от 580 сом</span>
              </div>
            </div>
            <div className="pagination">
              <a className=" button button--outline" href="./ourMenu.html">1</a>
              <a className=" button button--outline" href="./ourMenu.html">2</a>
              <a className=" button button--outline" href="./ourMenu.html">3</a>
              <a className=" button button--outline" href="./ourMenu.html">4</a>
              <a className=" button button--outline" href="./ourMenu.html">5</a>
              <a className=" button button--outline" href="./ourMenu.html">6</a>
              <a className=" button button--outline" href="./ourMenu.html">7</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default OurMenuPage