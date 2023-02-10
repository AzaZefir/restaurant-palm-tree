import './App.css';
import AboutUsPage from './components/aboutUsPage/AboutUsPage';
import Basket from './components/basket/Basket';
import Contact from './components/contactPage/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import OurMenuPage from './components/ourMenuPage/OurMenuPage';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [db, setDb] = useState([]);
  const [emptyBasketData, setEmptyBasketData] = useState([]);
  const [activeModal, setActiveModal] = useState(true);
  const [modalId, setModalId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const totalPrice = emptyBasketData.reduce(
    (prevVal, curVal) => prevVal + curVal.total * curVal.price,
    0,
  );
  const totalCount = emptyBasketData.reduce(
    (prevVal, curVal) => prevVal + curVal.total * curVal.count,
    0,
  );

  const onModalClick = (index) => {
    setModalId(index);
    setActiveModal(false);
  };
  const onAddData = (item) => {
    const existData = emptyBasketData.find((el) => el.id === item.id);
    if (existData) {
      const newData = emptyBasketData.map((el) =>
        el.id === item.id ? { ...existData, total: existData.total + 1 } : el,
      );
      setEmptyBasketData(newData);
      localStorage.setItem('basket', JSON.stringify(newData));
    } else {
      const newData = [...emptyBasketData, { ...item, total: 1 }];
      setEmptyBasketData(newData);
      localStorage.setItem('basket', JSON.stringify(newData));
    }
  };

  const onMinusItem = (item) => {
    const existData = emptyBasketData.find((el) => el.id === item.id);
    if (existData.total === 1) {
      const newData = emptyBasketData.filter((el) => el.id !== item.id);
      setEmptyBasketData(newData);
      localStorage.setItem('basket', JSON.stringify(newData));
    } else {
      const newData = emptyBasketData.map((el) =>
        el.id === item.id ? { ...existData, total: existData.total - 1 } : el,
      );
      setEmptyBasketData(newData);
      localStorage.setItem('basket', JSON.stringify(newData));
    }
  };

  const onRemoveItem = (id) => {
    const newData = emptyBasketData.filter((el) => el.id !== id);
    setEmptyBasketData(newData);
    localStorage.setItem('basket', JSON.stringify(newData));
  };

  const onClearCardData = () => {
    setEmptyBasketData([]);
  };

  useEffect(() => {
    setEmptyBasketData(
      localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : [],
    );
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setDb(data.data[0].oftenOrderCards);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header totalPrice={totalPrice} totalCount={totalCount} />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              onModalClick={onModalClick}
              modalId={modalId}
              setModalId={setModalId}
              setActiveModal={setActiveModal}
              activeModal={activeModal}
              onAddData={onAddData}
              db={db}
              setDb={setDb}
            />
          }
        />
        <Route
          path="/menu"
          element={
            <OurMenuPage
              db={db}
              setDb={setDb}
              onAddData={onAddData}
              onModalClick={onModalClick}
              modalId={modalId}
              setModalId={setModalId}
              setActiveModal={setActiveModal}
              activeModal={activeModal}
            />
          }
        />
        <Route path="/contacts" element={<Contact />} />
        <Route
          path="/basket"
          element={
            <Basket
              onRemoveItem={onRemoveItem}
              onDeleteData={onMinusItem}
              onClearCardData={onClearCardData}
              onAddData={onAddData}
              totalPrice={totalPrice}
              totalCount={totalCount}
              emptyBasketData={emptyBasketData}
            />
          }
        />
        <Route path="/aboutUs" element={<AboutUsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
