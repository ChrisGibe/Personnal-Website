import {
  Col, Form, Input, Button, message,
} from 'antd';
import React from 'react';
import Config from '../../../../config';


const validateMessages = {
  required: 'Champ requis',
  types: {
    email: 'Email invalide',
  },
};
export default () => {
  const [form] = Form.useForm();
  const onFinish = (data) => {
    const formData = new FormData();
    // eslint-disable-next-line no-restricted-syntax
    for (const key in data) {
      if (data[key]) {
        formData.append(key, data[key]);
      }
    }

    fetch(Config.contactFormUrl, { method: 'POST', body: formData })
      .then(() => {
        message.success('Merci pour votre souscription 🙂 !');
        form.resetFields();
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.error('Error:', error));
  };

  return (
    <Col sm={24} md={24} lg={12} className="widthFull">
      <p>
        Inscrivez-vous à ma newsletter
      </p>
      <Form form={form} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item name={['email']} rules={[{ type: 'email' }]}>
          <Input size="large" placeholder="Email" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" shape="round" size="large" htmlType="submit" style={{ background: '#304CFD' }}>
            Souscrire
          </Button>
        </Form.Item>
      </Form>
    </Col>
  );
};
