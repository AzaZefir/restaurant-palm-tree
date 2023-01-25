import './App.css';
import AboutUsPage from './components/aboutUsPage/AboutUsPage';
import Basket from './components/basket/Basket';
import Contact from './components/contactPage/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import OurMenuPage from './components/ourMenuPage/OurMenuPage';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { data } from './components/data/data';

function App() {
  const [db,setDb] = useState(data[0].oftenOrderCards)
  const [emptyBasketData, setEmptyBasketData] = useState([])

  const totalPrice = emptyBasketData.reduce((prevVal, curVal) => prevVal + curVal.total * curVal.price, 0 )
  const totalCount = emptyBasketData.reduce((prevVal, curVal) => prevVal + curVal.total * curVal.count, 0 )

  const onAddData = (item) => {
    const existData = emptyBasketData.find(el=> el.id === item.id)
    if(existData){
      const newData = emptyBasketData.map(el=> el.id === item.id ? {...existData, total: existData.total + 1}: el)
      setEmptyBasketData(newData)
    }else{
      const newData = [...emptyBasketData, {...item, total: 1}]
      setEmptyBasketData(newData)
    }
  }

  return (
    <div className="wrapper">
      <Header totalPrice={totalPrice} totalCount={totalCount}/>
      <Routes>
        <Route path="/" element={<Main onAddData={onAddData} db={db} setDb={setDb}/>} />
        <Route path="/menu" element={<OurMenuPage />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/basket" element={<Basket emptyBasketData={emptyBasketData}/>} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
