import './App.css';
// import AboutUsPage from './components/aboutUsPage/AboutUsPage';
// import Basket from './components/basket/Basket';
import EmptyBasket from './components/basket/emptyBasket/EmptyBasket';
import { Modal } from './components/common/modal/Modal';
// import Contact from './components/contactPage/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
// import Main from './components/main/Main';
// import OurMenuPage from './components/ourMenuPage/OurMenuPage';

function App() {
  return (
    <div class="wrapper">
      <Header/>
      {/* <Main/> */}
      {/* <AboutUsPage/> */}
      {/* <OurMenuPage/> */}
      {/* <Basket/> */}
      {/* <Contact/> */}
      {/* <EmptyBasket/> */}
      <Modal/>
      {/* modal() */}
      <Footer/>
    </div>
  );
}

export default App;
