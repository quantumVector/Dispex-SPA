import React from 'react';

const ResidentItem = ({ id, name, phone, email, onDeleteClient }) => {
  const onClickDelete = () => {
    onDeleteClient(id);
  }

  return (
    <div>
      <img src="#" alt="resident" />
      <div>{name}</div>
      <div>{phone}</div>
      <div>{email}</div>
      <button onClick={onClickDelete}>Удалить</button>
      <button>Редактировать</button>
    </div>
  )
}

export default ResidentItem;