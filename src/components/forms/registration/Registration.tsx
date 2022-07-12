import React, { FC } from 'react';
import Link from 'next/link';
import { Card, Form, Input, message, Typography } from 'antd';
import { validateEmail, validatePass, validatePass2 } from '../../../utils/fromValidators';
import styles from './Registration.module.scss';
import 'antd/dist/antd.css';

const Registration: FC = () => {
  type FormType = {
    email: string;
    password: string;
    confirm_password: string;
  };

  const { Title } = Typography;
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
      <div className={styles.header}>
        <Title
          className={styles.title}
          level={1}
        >
          Регистрация
        </Title>
        <p>
          Уже есть аккаунт? <Link href="/auth">Войти</Link>
        </p>
      </div>
      <Form
        form={form}
        name="auth"
        {...layout}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout={'vertical'}
      >
        <Card className={styles.card}>
          <Form.Item
            label="Электронная почта"
            name="email"
            validateTrigger="onChange"
            rules={[{ required: true, validator: validateEmail }]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item
            label="Пароль"
            name="password"
            rules={[{ required: true, validator: validatePass(true) }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Повторите пароль"
            name="confirm_password"
            rules={[{ required: true, validator: validatePass2(true, confirmPassword) }]}
          >
            <Input.Password />
          </Form.Item>
        </Card>
        <div className={styles.footer}>
          <button
            className={styles.button}
            type="submit"
          >
            Зарегистрироваться
          </button>
          <div className={styles.policy}>
            <span>
              Нажимая «Зарегистрироваться» вы принимаете <Link href="/">Политику конфиденциальности</Link> и{' '}
              <Link href="/">публичную оферту</Link>
            </span>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Registration;
