import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStreets } from '../redux/actions/addresses';

import 'antd/dist/antd.css';
import { Select } from 'antd';

const { Option } = Select;

const Address = () => {
  const dispatch = useDispatch();
  const streets = useSelector(({ addresses }) => addresses.streets);

  console.log(streets)

  React.useEffect(() => {
    dispatch(getStreets());
  }, []);

  return (
    <div>
      <div>Адрес</div>
      <div>
        <Select defaultValue="Улица" style={{ width: 300 }} onChange={(value) => { console.log(value) }}>
          {streets.map((item) => item.cityId === 1
            ? <Option value={item.id} key={item.id}>{item.name}</Option>
            : null)}
        </Select>
      </div>
    </div>
  )
}

export default Address;
