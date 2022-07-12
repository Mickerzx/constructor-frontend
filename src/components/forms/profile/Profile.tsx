import React, { FC, useState } from 'react';
import Link from 'next/link';
import { Card, Checkbox, Col, Form, Input, message, Row, Typography } from 'antd';
import {
  validateEmail,
  validateEmptyField,
  validateEmptyFieldWithTrigger,
  validatePass,
  validatePass2,
} from '../../../utils/fromValidators';
import 'antd/dist/antd.css';
import styles from './Profile.module.scss';

const Profile: FC = () => {
  type FormType = {
    change_password: boolean;
    confirm_password: string;
    email: string;
    old_password: string;
    password: string;
    patronymic: string;
    phone: string;
    surname: string;
    username: string;
  };

  const { Title } = Typography;

  const [changePassword, setChangePassword] = useState(false);
  const [form] = Form.useForm();
  const confirmPassword = Form.useWatch('password', form);

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
          <Title level={1}>Профиль</Title>
        </Col>
      </Row>

      <Form
        form={form}
        name="profile"
        {...layout}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout={'vertical'}
      >
        <Card className={styles.card}>
          <Title level={3}>Основные данные</Title>
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

          <Form.Item
            label="Email"
            name="email"
            validateTrigger="onChange"
            rules={[{ required: true, validator: validateEmail }]}
          >
            <Input type="email" />
          </Form.Item>
        </Card>
        <Card className={styles.card}>
          <Title level={3}>Безопасность</Title>
          <Form.Item
            name="change_password"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox
              checked={changePassword}
              onChange={() => setChangePassword(!changePassword)}
            >
              Сменить пароль
            </Checkbox>
          </Form.Item>
          <Form.Item
            label="Старый пароль"
            name="old_password"
            rules={[
              {
                required: true,
                validator: validateEmptyFieldWithTrigger('Пожалуйста введите старый пароль', changePassword),
              },
            ]}
          >
            <Input.Password disabled={!changePassword} />
          </Form.Item>
          <Form.Item
            label="Пароль"
            name="password"
            rules={[{ required: true, validator: validatePass(changePassword) }]}
          >
            <Input.Password disabled={!changePassword} />
          </Form.Item>
          <Form.Item
            label="Повторите пароль"
            name="confirm_password"
            rules={[{ required: true, validator: validatePass2(changePassword, confirmPassword) }]}
          >
            <Input.Password disabled={!changePassword} />
          </Form.Item>
        </Card>
        <div className={styles.footer}>
          <button
            className={styles.button}
            type="submit"
          >
            Сохранить изменения
          </button>
          <span>
            Нажимая кнопку вы принимаете <Link href="/">Политику конфиденциальности</Link> и{' '}
            <Link href="/">публичную оферту</Link>
          </span>
        </div>
      </Form>
    </div>
  );
};

export default Profile;
