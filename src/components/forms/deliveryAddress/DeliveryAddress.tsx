import React, { FC } from 'react';
import { Card, Col, Form, Input, message, Row, Typography } from 'antd';
import { validateEmptyField } from '../../../utils/fromValidators';
import 'antd/dist/antd.css';
import styles from './DeliveryAddress.module.css';

const DeliveryAddress: FC = () => {
  type FormType = {
    locality: string;
    postal_code: string;
    address: string;
    additional_address: string;
  };

  const { Title } = Typography;
  const [form] = Form.useForm();

  const onFinish = (values: FormType) => {
    console.log('Success:', values);
  };
  const onFinishFailed = () => {
    message.error('Не удалось сохранить');
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 24 },
  };

  return (
    <div className={styles.container}>
      <Row>
        <Col>
          <Title level={1}>Адрес доставки</Title>
        </Col>
      </Row>

      <Form
        form={form}
        name="delivery"
        {...layout}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout={'vertical'}
      >
        <Card className={styles.card}>
          <Form.Item
            label="Населенный пункт"
            name="locality"
            validateTrigger="onChange"
            rules={[{ required: true, validator: validateEmptyField('Пожалуйста введите адрес населенного пункта') }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Почтовый индекс"
            name="postal_code"
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item
            label="Адрес"
            name="address"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Адрес (дополнительно)"
            name="additional_address"
          >
            <Input />
          </Form.Item>
        </Card>
        <div className={styles.footer}>
          <button
            className={styles.button}
            type="submit"
          >
            Сохранить изменения
          </button>
        </div>
      </Form>
    </div>
  );
};

export default DeliveryAddress;
