import React from 'react';
import { Modal } from '../../common/modal/Modal';

const Card = ({ setActiveModal, item, modalId, setModalId,activeModal,index }) => {
  const onModalClick = () => {
    setActiveModal(false);
    setModalId(index);
  };
  return (
    <>
      <div onClick={onModalClick} key={item.id} class="often-order__card d-flex">
        <div class="d-flex">
          {/* <img src={item.img} alt="" /> */}
          <h5>{item.name}</h5>
          <p>{item.text}</p>
        </div>
        <span>от {item.price} сом</span>
      </div>
      <Modal
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
