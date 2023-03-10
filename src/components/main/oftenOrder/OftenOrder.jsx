import { Link } from 'react-router-dom';
import { Modal } from '../../common/modal/Modal';
import MyLoader from '../../common/skeleton/Skeleton';
import Card from './Card';

const OftenOrder = ({
  db,
  onAddData,
  activeModal,
  setActiveModal,
  modalId,
  setModalId,
  onModalClick,
  isLoading,
}) => {
  return (
    <section className="often-order">
      <div className="container d-flex" id="oftenOrder">
        <h3>Часто заказывают</h3>
        <div className="often-order__cards d-flex">
          {isLoading
            ? [...new Array(12)].map((item) => <MyLoader key={item} />)
            : db.map((item) => (
                <Card
                  onModalClick={onModalClick}
                  onAddData={onAddData}
                  key={item.id}
                  modalId={modalId}
                  setModalId={setModalId}
                  activeModal={activeModal}
                  setActiveModal={setActiveModal}
                  item={item}
                  index={item.id}
                  {...item}
                />
              ))}
        </div>
        <Modal
          onAddData={onAddData}
          modalId={modalId}
          activeModal={activeModal}
          setActiveModal={setActiveModal}
        />
        <Link to="/menu">
          <span className="button button--outline">Показать все меню</span>{' '}
        </Link>
      </div>
    </section>
  );
};

export default OftenOrder;
