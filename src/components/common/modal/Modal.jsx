import React from 'react';
import './Modal.css';
import { data } from '../../data/data';

export const Modal = ({ activeModal, setActiveModal,modalId }) => {
  return (
    <div
      className={activeModal ? 'modal-wrapper active' : 'modal-wrapper'}
      onClick={() => setActiveModal(true)}>
      <div className="modal d-flex" onClick={e => e.stopPropagation()}>
        <div className="d-flex">
          <img src={data[0].oftenOrderCards[modalId].img} alt="" />
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
                  <img src="./image/modal-t.svg" alt="" />
                </div>
                <p>Ветчина из цыпленка</p>
              </div>
              <div>
                <div>
                  <img src="./image/modal-t1.svg" alt="" />
                </div>
                <p>Ветчина из цыпленка</p>
              </div>
              <div>
                <div>
                  <img src="./image/modal-t2.svg" alt="" />
                </div>
                <p>Ветчина из цыпленка</p>
              </div>
              <div>
                <div>
                  <img src="./image/modal-t3.svg" alt="" />
                </div>
                <p>Ветчина из цыпленка</p>
              </div>
            </div>
          </div>
        </div>
        <button className="button modal-btn">Добавить</button>
      </div>
    </div>
  );
};

// export default Modal
