import React, { useState } from 'react';

const Categories = ({ menuData, setMenuData }) => {
  const [activeItem, setActiveItem] = useState('');
  const [categoryFilter] = useState(menuData);
  const availableCategories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const onFilterData = (item) => {
    if (item === '') {
      setMenuData(categoryFilter);
      return;
    }
    const result = categoryFilter.filter((el) => el.category === item
    );
    setMenuData(result);
  };

  const onSelectCat = (index) => {
    setActiveItem(index);
    onFilterData(index);
    console.log(index);
  };

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === '' ? 'active' : ''} onClick={() => onSelectCat('')}>
          Все
        </li>
        {availableCategories.map((item, index) => (
          <li
            className={activeItem === index ? 'active' : ''}
            onClick={() => onSelectCat(index)}
            key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
