import { Slide } from '../common/slider/Slide';
import { About } from './about/About';
import Hero from './hero/Hero';
import OftenOrder from './oftenOrder/OftenOrder';

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
  sliderData
}) => {
  return (
    <main>
      <About />
      <Slide sliderData={sliderData}/>
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
    </main>
  );
};

export default Main;
