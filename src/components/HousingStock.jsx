import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Client from './Client';

const HousingStock = () => {
  const dispatch = useDispatch();
  const clients = useSelector(({ housingStock }) => housingStock.clients);

  return (
    <div>
      {clients &&
        clients.map(item => <Client id={item.id}
          name={item.name}
          phone={item.phone}
          email={item.email}
          key={item.id} />)}
    </div>
  )
}

export default HousingStock;
