import React from 'react';
import './OurMenuPage.css';
import searchIcon from '../common/image/search-normal 1.svg';
import Categories from './categories/Categories';
import Sort from './sort/Sort';
import { useState } from 'react';

const OurMenuPage = ({ db, setDb }) => {
  const [selectedType, setSelectedType] = useState({ type: 'rating' });

  const sortTypes = [
    { name: 'популярности', type: 'rating' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'name' },
  ];

  const onSortData = (type) => {
    setSelectedType(type);
    const sortedData = db.sort((a, b) => a[type.type].localeCompare(b[type.type]));
    setDb(sortedData);
  };

  return (
    <div className="wrapper">
      <main>
        <section className="about about-menu-bg d-flex">
          <span className="about-greeting">Our menu</span>
        </section>
        <section className="search-block">
          <div className="container d-flex">
            <Categories db={db} setDb={setDb} />
            <Sort
              sortTypes={sortTypes}
              onSortData={onSortData}
              activeSortType={selectedType.type}
            />
            <div className="search d-flex">
              <input type="text" placeholder="Начать поиск" />
              <img src={searchIcon} alt="" />
            </div>
          </div>
        </section>
        <section className="often-order">
          <div className="container d-flex">
            <div className="often-order__cards d-flex">
              {db &&
                db.map((el) => (
                  <div key={el.id} className="often-order__card d-flex">
                    <div className="d-flex">
                      <h5>{el.name}</h5>
                      <p>{el.text}</p>
                    </div>
                    <span>от {el.price} сом</span>
                  </div>
                ))}
            </div>
            <div className="pagination">
              <a className=" button button--outline" href="./ourMenu.html">
                1
              </a>
              <a className=" button button--outline" href="./ourMenu.html">
                2
              </a>
              <a className=" button button--outline" href="./ourMenu.html">
                3
              </a>
              <a className=" button button--outline" href="./ourMenu.html">
                4
              </a>
              <a className=" button button--outline" href="./ourMenu.html">
                5
              </a>
              <a className=" button button--outline" href="./ourMenu.html">
                6
              </a>
              <a className=" button button--outline" href="./ourMenu.html">
                7
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OurMenuPage;
