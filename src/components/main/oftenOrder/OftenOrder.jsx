import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const OftenOrder = ({ db, setDb, onAddData }) => {
  const [activeModal, setActiveModal] = useState(true);
  const [modalId, setModalId] = useState(0);

  return (
    <section className="often-order">
      <div className="container d-flex" id="oftenOrder">
        <h3>Часто заказывают</h3>
        <div className="often-order__cards d-flex">
          {db.map((item) => (
            <Card
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
        <Link to="/menu">
          <span className="button button--outline">Показать все меню</span>{' '}
        </Link>
      </div>
    </section>
  );
};

export default OftenOrder;
