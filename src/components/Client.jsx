import React from 'react';

const ResidentItem = ({ id, name, phone, email }) => {
  return (
    <div>
      <img src="#" alt="resident" />
      <div>{name}</div>
      <div>{phone}</div>
      <div>{email}</div>
      <button>Удалить</button>
      <button>Редактировать</button>
    </div>
  )
}

export default ResidentItem;
