import React from 'react';
import './Modal.css';
import { data } from '../../data/data';
import modalOne from '../../common/image/modal-t.svg'
import modalTwo from '../../common/image/modal-t1.svg'
import modalThree from '../../common/image/modal-t2.svg'
import modalFour from '../../common/image/modal-t3.svg'

export const Modal = ({ activeModal, setActiveModal,modalId,setModalId,onAddData,dataId,name,modalImage,price,count }) => {
  const onAdd= ()=>{
    const addedData ={
      dataId,
      name,
      modalImage,
      price,
      count
    }
    onAddData(addedData)
    setModalId(modalId)
    console.log(addedData);
  }
  return (
    <div
      className={activeModal ? 'modal-wrapper active' : 'modal-wrapper'}
      onClick={() => setActiveModal(true)}>
      <div className="modal d-flex" onClick={e => e.stopPropagation()}>
        <div className="d-flex">
          <div className='modal__image'>
            <img src={data[0].oftenOrderCards[modalId].modalImage} alt="" />
          </div>
          
          <div>
            <div className="modal-info d-flex">
              <h3 className="pizza-block__title">{data[0].oftenOrderCards[modalId].name}</h3>
              <div className="pizza-block__selector">
                <ul>
                  <li className="active">тонкое</li>
                  <li>традиционное</li>
                </ul>
                <ul>
                  <li className="active">26 см.</li>
                  <li>30 см.</li>
                  <li>40 см.</li>
                </ul>
              </div>
            </div>
            <p className="add-type-text">Добавьте по вкусу</p>
            <div className="modal-choose-type d-flex">
              <div>
                <div>
                  <img src={modalOne} alt="" />
                </div>
                <p>Ветчина из цыпленка</p>
              </div>
              <div>
                <div>
                  <img src={modalTwo} alt="" />
                </div>
                <p>Ветчина из цыпленка</p>
              </div>
              <div>
                <div>
                  <img src={modalThree} alt="" />
                </div>
                <p>Ветчина из цыпленка</p>
              </div>
              <div>
                <div>
                  <img src={modalFour} alt="" />
                </div>
                <p>Ветчина из цыпленка</p>
              </div>
            </div>
          </div>
        </div>
        <button className="button modal-btn" onClick={onAdd}>Добавить</button>
      </div>
    </div>
  );
};

// export default Modal
