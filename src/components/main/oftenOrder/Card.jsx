import React from 'react';
import { Modal } from '../../common/modal/Modal';
import './OftenOrder.css';

const Card = ({
  setActiveModal,
  item,
  modalId,
  setModalId,
  activeModal,
  index,
  onAddData,
  id,
  name,
  modalImage,
  price,
  count
}) => {
  const onModalClick = () => {
    setActiveModal(false);
    setModalId(index);
  };
  return (
    <>
      <div onClick={onModalClick} key={item.id} className="often-order__card d-flex">
        <div className="d-flex">
          <img className="modalImage" src={item.cardImg} alt="" />
          <h5>{item.name}</h5>
          <p>{item.text}</p>
        </div>
        <span>от {item.price} сом</span>
      </div>
      <Modal
      count={count}
        dataId={id}
        name={name}
        modalImage={modalImage}
        price={price}
        onAddData={onAddData}
        modalId={modalId}
        setModalId={setModalId}
        id={item.id}
        activeModal={activeModal}
        setActiveModal={setActiveModal}
      />
    </>
  );
};

export default Card;
