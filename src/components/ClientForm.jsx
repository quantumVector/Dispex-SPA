import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from '../styles/ClientForm.module.css';

import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import { addClient, deleteClient } from '../api/api';
import { disableEditMod } from '../redux/actions/housingStock';

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
    {
      name: ['phone'],
      value: null,
    },
    {
      name: ['email'],
      value: null,
    },
    {
      name: ['name'],
      value: null,
    },
  ]);
  const selectedStreet = useSelector(({ addresses }) => addresses.selectedStreet);
  const selectedHouse = useSelector(({ addresses }) => addresses.selectedHouse);
  const selectedFlat = useSelector(({ addresses }) => addresses.selectedFlat);
  const selectedFlatId = useSelector(({ addresses }) => addresses.selectedFlatId);
  const editMod = useSelector(({ housingStock }) => housingStock.editMod);
  const editableClient = useSelector(({ housingStock }) => housingStock.editableClient);

  React.useEffect(() => {
    if (selectedFlatId) setFields([
      {
        name: ['id'],
        value: 0,
      },
      {
        name: ['bindId'],
        value: selectedFlatId,
      },
    ]);
  }, [selectedFlatId]);

  React.useEffect(() => {
    if (editMod) {
      setFields([
        {
          name: ['phone'],
          value: editableClient.phone,
        },
        {
          name: ['email'],
          value: editableClient.email,
        },
        {
          name: ['name'],
          value: editableClient.name,
        },
      ]);

      dispatch(deleteClient(editableClient.bindId));
    }
  }, [editMod]);

  const onReset = () => {
    form.resetFields();
    setFields([
      {
        name: ['id'],
        value: 0,
      },
      {
        name: ['bindId'],
        value: selectedFlatId,
      },
      {
        name: ['phone'],
        value: null,
      },
      {
        name: ['email'],
        value: null,
      },
      {
        name: ['name'],
        value: null,
      },
    ])
    dispatch(disableEditMod());
  };

  const onFinish = (values) => {
    dispatch(addClient(values));
    onReset();
  };

  return (
    <div className={classes.form}>
      <Form form={form} onFinish={onFinish} fields={fields}>
        {selectedStreet &&
          <div className={classes.address}>ул. {selectedStreet}, {selectedHouse}, {selectedFlat}</div>}

        <Form.Item name="id" style={{ display: 'none' }}>
          <Input />
        </Form.Item>

        <Form.Item name="bindId" style={{ display: 'none' }}>
          <Input />
        </Form.Item>

        <div className={classes.topFieldsWrap}>
          <Form.Item name="phone" label="Телефон" rules={[{ required: true }]} style={{ marginRight: '5px' }}>
            <Input />
          </Form.Item>

          <Form.Item name="email" label="e-mail" >
            <Input />
          </Form.Item>
        </div>

        <Form.Item name="name" label="ФИО" style={{ marginLeft: '10px' }}>
          <Input />
        </Form.Item>

        <Form.Item>
          <Button htmlType="button" onClick={onReset} style={{ marginRight: '5px' }}>Отмена</Button>
          <Button type="primary" htmlType="submit">
            {editMod ? 'Редактировать' : 'Добавить'}
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ClientForm;
