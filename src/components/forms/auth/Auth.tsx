import React, { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Card, Form, Input, message, Typography } from 'antd';
import { validateEmail, validateEmptyField } from '../../../utils/fromValidators';
import styles from './Auth.module.scss';
import 'antd/dist/antd.css';

const Auth: FC = () => {
  const router = useRouter();

  type FormType = {
    email: string;
    password: string;
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
      <div className={styles.header}>
        <Title
          className={styles.title}
          level={1}
        >
          Вход
        </Title>
        <p>
          Еще нет аккаунта? <Link href="/registration">Создать</Link>{' '}
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
            rules={[{ required: true, validator: validateEmptyField('Пожалуйста введите пароль') }]}
          >
            <Input.Password />
          </Form.Item>
        </Card>
        <div className={styles.footer}>
          <button
            className={styles.button}
            type="submit"
            onClick={() => router.push('/account')} // Временная заглушка, разумеется
          >
            Войти
          </button>
          <Link href="/">Забыли пароль?</Link>
        </div>
      </Form>
    </div>
  );
};

export default Auth;
