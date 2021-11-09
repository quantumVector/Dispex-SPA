import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import { addClient } from '../api/api';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 10,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 1,
    span: 16,
  },
};

const ClientForm = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [fields, setFields] = React.useState([
    {
      name: ['id'],
      value: 0,
    },
    {
      name: ['bindId'],
      value: 0,
    },
  ]);
  const selectedStreet = useSelector(({ addresses }) => addresses.selectedStreet);
  const selectedHouse = useSelector(({ addresses }) => addresses.selectedHouse);
  const selectedFlat = useSelector(({ addresses }) => addresses.selectedFlat);
  const selectedFlatId = useSelector(({ addresses }) => addresses.selectedFlatId);

  React.useEffect(() => {
    if (selectedFlatId) setFields([
      {
        name: ['id'],
        value: Math.round((selectedFlatId + Math.round(Math.random() * 1000))/10),
      },
      {
        name: ['bindId'],
        value: selectedFlatId,
      },
    ]);
  }, [selectedFlatId]);

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = (values) => {
    dispatch(addClient(values));
  };

  return (
    <Form {...layout} form={form} onFinish={onFinish} fields={fields}>

      <div>ул. {selectedStreet}, {selectedHouse}, {selectedFlat}</div>

      <Form.Item name="id" style={{ display: 'none' }}>
        <Input />
      </Form.Item>

      <Form.Item name="bindId" style={{ display: 'none' }}>
        <Input />
      </Form.Item>

      <Form.Item name="phone" label="Телефон" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="email" label="e-mail">
        <Input />
      </Form.Item>

      <Form.Item name="name" label="ФИО">
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button htmlType="button" onClick={onReset}>Отмена</Button>
        <Button type="primary" htmlType="submit">Добавить</Button>
      </Form.Item>
    </Form>
  )
}

export default ClientForm;
