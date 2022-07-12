import React, { FC } from 'react';
import Link from 'next/link';
import { Card, Col, Form, Input, message, Radio, Row, Select, Space, Typography } from 'antd';
import { validateEmptyField } from '../../../utils/fromValidators';
import 'antd/dist/antd.css';
import styles from './CreateOrder.module.scss';

const CreateOrder: FC = () => {
  type FormType = {
    additional_address: string;
    address: string;
    city: string;
    delivery_method: string;
    patronymic: string;
    phone: string;
    postal_code: string;
    surname: string;
    username: string;
    pay_method: string;
    type_delivery: string;
  };

  const { Title } = Typography;
  const { Option } = Select;
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
          <Title level={1}>Оформление заказа</Title>
        </Col>
      </Row>

      <Form
        form={form}
        name="create_order"
        {...layout}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout={'vertical'}
      >
        <Card className={styles.card}>
          <Title level={3}>Контактные данные</Title>
          <Form.Item
            label="Фамилия"
            name="surname"
            validateTrigger="onChange"
            rules={[{ required: true, validator: validateEmptyField('Пожалуйста введите фамилию') }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Имя"
            name="username"
            validateTrigger="onChange"
            rules={[{ required: true, validator: validateEmptyField('Пожалуйста введите имя') }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Отчество"
            name="patronymic"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Номер телефона"
            name="phone"
          >
            <Input />
          </Form.Item>
        </Card>
        <Card className={styles.card}>
          <Title level={3}>Доставка</Title>
          <Form.Item
            label="Способ доставки"
            name="delivery_method"
            validateTrigger="onChange"
            rules={[{ required: true, validator: validateEmptyField('Пожалуйста выберите способ доставки') }]}
          >
            <Select defaultValue="Выберите">
              <Option value="delivery">Доставка</Option>
              <Option value="pickup">Самовывоз</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="type_delivery"
            initialValue="free"
          >
            <Radio.Group>
              <Space direction="vertical">
                <Radio value="free">
                  Самовывоз <span className={styles.price}>Бесплатно</span>
                </Radio>
                <Radio value="courier">Курьером +300₽</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Город"
            name="city"
            validateTrigger="onChange"
            rules={[{ required: true, validator: validateEmptyField('Пожалуйста выберите город') }]}
          >
            <Select defaultValue="Выберите">
              <Option value="Yekaterinburg">Екатеринбург</Option>
              <Option value="Moscow">Москва</Option>
            </Select>
          </Form.Item>

          <Row>
            <Col span={15}>
              <Form.Item
                label="Адрес"
                name="address"
                validateTrigger="onChange"
                rules={[{ required: true, validator: validateEmptyField('Пожалуйста введите адрес') }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col
              offset={1}
              span={8}
            >
              <Form.Item
                name="postal_code"
                label="Индекс"
                validateTrigger="onChange"
                rules={[{ required: true, validator: validateEmptyField('Пожалуйста введите индекс') }]}
              >
                <Input type="number" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            label="Дополнительный адрес"
            name="additional_address"
          >
            <Input />
          </Form.Item>
        </Card>
        <Card className={styles.card}>
          <Title level={3}>Оплата</Title>
          <Form.Item
            name="pay_method"
            initialValue="cash"
          >
            <Radio.Group>
              <Space direction="vertical">
                <Radio value="cash">Наличными или картой при получении</Radio>
                <Radio value="online">Онлайн (Картой, Сбербанк онлайн, СБП Pay)</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
        </Card>
        <div className={styles.footer}>
          <div className={styles.policy}>
            <span>
              Нажимая «Подтвердить заказ» вы принимаете <Link href="/">Политику конфиденциальности</Link> и{' '}
              <Link href="/">публичную оферту</Link>
            </span>
          </div>
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

export default CreateOrder;
