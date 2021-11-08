import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFlats, getHouses, getStreets } from '../redux/actions/addresses';

import 'antd/dist/antd.css';
import { Select } from 'antd';

const { Option } = Select;

const Address = () => {
  const dispatch = useDispatch();
  const streets = useSelector(({ addresses }) => addresses.streets);
  const houses = useSelector(({ addresses }) => addresses.houses);
  const flats = useSelector(({ addresses }) => addresses.flats);

  React.useEffect(() => {
    dispatch(getStreets());
  }, []);

  return (
    <div>
      <div>Адрес</div>
      <div>
        <Select defaultValue="Улица" style={{ width: 300 }} onChange={(value) => dispatch(getHouses(value))}>
          {streets.map((item) => item.cityId === 1
            ? <Option value={item.id} key={item.id}>{item.name}</Option>
            : null)}
        </Select>
        <Select defaultValue="Дом" style={{ width: 150 }} onChange={(value) => dispatch(getFlats(value))}>
          {houses.map((item) => <Option value={item.id} key={item.id}>{item.name}</Option>)}
        </Select>
        <Select defaultValue="Кв./офис" style={{ width: 180 }} onChange={(value) => console.log(value)}>
          {flats.map((item) => item.typeName === 'Квартира'
            ? <Option value={item.id} key={item.id}>{item.name}</Option>
            : null)}
        </Select>
      </div>
    </div>
  )
}

export default Address;
