import './App.css';
import AboutUsPage from './components/aboutUsPage/AboutUsPage';
import Basket from './components/basket/Basket';
import EmptyBasket from './components/basket/emptyBasket/EmptyBasket';
import { Modal } from './components/common/modal/Modal';
import Contact from './components/contactPage/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import OurMenuPage from './components/ourMenuPage/OurMenuPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div class="wrapper">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/menu' element={<OurMenuPage/>}/>
        <Route path='/contacts' element={<Contact/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/aboutUs' element={<AboutUsPage/>}/>
      </Routes>
      
      
      {/* <Basket/> */}
      
      {/* <EmptyBasket/> */}
      {/* <Modal/> */}
      {/* modal() */}
      <Footer/>
    </div>
  );
}

export default App;
