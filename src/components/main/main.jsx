import { Slide } from '../common/slider/Slide';
import { About } from './about/About';
import Hero from './hero/Hero';
import OftenOrder from './oftenOrder/OftenOrder';
import './Main.scss';

const Main = ({
  db,
  setDb,
  onAddData,
  onModalClick,
  modalId,
  setModalId,
  setActiveModal,
  activeModal,
  isLoading,
  setIsLoading,
  sliderData,
}) => {
  return (
    <main>
      <About />
      <Slide sliderData={sliderData} />
      <Hero />
      <OftenOrder
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        onModalClick={onModalClick}
        modalId={modalId}
        setModalId={setModalId}
        setActiveModal={setActiveModal}
        activeModal={activeModal}
        db={db}
        setDb={setDb}
        onAddData={onAddData}
      />
      {/* <div className="test">
        <h1>hello from react</h1>
        <div className="test__block">
          <p>
            Lorem ipsum, dolor sit amet <strong>consectetur adipisicing</strong> elit. Laboriosam,
            itaque!
          </p>
          <div className='test__block_cards'>
            <div className="test__block_card">
              <p>Lorem, ipsum.</p>
              <button>click</button>
            </div>
            <div className="test__block_card">
              <p>Lorem, ipsum.</p>
              <button>click</button>
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
};

export default Main;
