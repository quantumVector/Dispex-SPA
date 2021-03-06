import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFlats, getHouses, getStreets, getClients } from '../api/api';
import { selectFlat, selectHouse, selectStreet } from '../redux/actions/addresses';
import classes from '../styles/Address.module.css';
import necessarilyIcon from '../assets/necessarily.png';

import 'antd/dist/antd.css';
import { Select } from 'antd';

const { Option } = Select;

const Address = () => {
  const dispatch = useDispatch();
  const streets = useSelector(({ addresses }) => addresses.streets);
  const houses = useSelector(({ addresses }) => addresses.houses);
  const flats = useSelector(({ addresses }) => addresses.flats);
  const selectedFlatId = useSelector(({ addresses }) => addresses.selectedFlatId);

  React.useEffect(() => {
    dispatch(getStreets());
  }, []);

  React.useEffect(() => {
    if (selectedFlatId) dispatch(getClients(selectedFlatId));
  }, [selectedFlatId]);

  return (
    <div className={classes.address}>
      <div className={classes.title}>
        <img className={classes.necessarilyIcon} src={necessarilyIcon} alt="necessarily" />
        <div>Адрес</div>
      </div>
      <div>
        <Select defaultValue="Улица" style={{ width: 300 }} onChange={(value) => {
          dispatch(getHouses(value));
          dispatch(selectStreet(value));
        }}>
          {streets.map((item) => item.cityId === 1
            ? <Option value={item.id} key={item.id}>{item.name}</Option>
            : null)}
        </Select>

        <Select defaultValue="Дом" style={{ width: 150 }} onChange={(value) => {
          dispatch(getFlats(value));
          dispatch(selectHouse(value));
        }}>
          {houses.map((item) => <Option value={item.id} key={item.id}>{item.name}</Option>)}
        </Select>

        <Select defaultValue="Кв./офис" style={{ width: 150 }} onChange={(value) => {
          dispatch(selectFlat(value));
        }}>
          {flats.map((item) => item.typeName === 'Квартира'
            ? <Option value={item.id} key={item.id}>{item.name}</Option>
            : null)}
        </Select>
      </div>
    </div>
  )
}

export default Address;
