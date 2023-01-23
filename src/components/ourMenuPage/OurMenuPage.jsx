import React from 'react'
import './OurMenuPage.css'
import searchIcon from '../common/image/search-normal 1.svg'

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
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                    fill="#2C2C2C" />
                </svg>
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