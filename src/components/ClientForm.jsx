import React from 'react';

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

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form {...layout} form={form} onFinish={onFinish}>
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
        name="mail"
        label="e-mail"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="fullName"
        label="ФИО"
      >
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ClientForm;
