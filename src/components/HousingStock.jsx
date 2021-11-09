import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Client from './Client';
import { deleteClient } from '../api/api';
import { removeClientDisplay } from '../redux/actions/housingStock';
import classes from '../styles/HousingStock.module.css';

const HousingStock = () => {
  const dispatch = useDispatch();
  const selectedStreet = useSelector(({ addresses }) => addresses.selectedStreet);
  const selectedHouse = useSelector(({ addresses }) => addresses.selectedHouse);
  const selectedFlat = useSelector(({ addresses }) => addresses.selectedFlat);
  const clients = useSelector(({ housingStock }) => housingStock.clients);

  const onDeleteClient = (id) => {
    if (window.confirm('Вы действительно хотите удалить?')) {
      dispatch(deleteClient(id));
      dispatch(removeClientDisplay(id));
    }
  };

  return (
    <>
      <div className={classes.address}>ул. {selectedStreet}, {selectedHouse}, {selectedFlat}</div>
      <div className={classes.stock}>
        {clients &&
          clients.map(item => <Client id={item.bindId}
            name={item.name}
            phone={item.phone}
            email={item.email}
            key={item.bindId}
            onDeleteClient={onDeleteClient} />)}
      </div>
    </>
  )
}

export default HousingStock;
