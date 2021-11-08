import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';

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
  const [form] = Form.useForm();
  const [fields, setFields] = React.useState([
    {
      name: ['bindId'],
      value: 'Ant Design',
    },
  ]);
  const selectedStreet = useSelector(({ addresses }) => addresses.selectedStreet);
  const selectedHouse = useSelector(({ addresses }) => addresses.selectedHouse);
  const selectedFlat = useSelector(({ addresses }) => addresses.selectedFlat);

  React.useEffect(() => {
    if (selectedFlat) setFields([
      {
        name: ['bindId'],
        value: selectedFlat,
      },
    ]);
  }, [selectedFlat]);

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form {...layout} form={form} onFinish={onFinish} fields={fields}>
      <div>ул. {selectedStreet}, {selectedHouse}, {selectedFlat}</div>
      <Form.Item
        name="bindId"
        style={{ display: 'none' }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Телефон"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="e-mail"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="name"
        label="ФИО"
      >
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button htmlType="button" onClick={onReset}>
          Отмена
        </Button>
        <Button type="primary" htmlType="submit">
          Добавить
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ClientForm;
