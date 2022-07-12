import React, { FC } from 'react';
import Link from 'next/link';
import { Card, Form, Input, message, Typography } from 'antd';
import { validateEmail } from '../../../utils/fromValidators';
import styles from './RecoveryPassword.module.css';
import 'antd/dist/antd.css';

const RecoveryPassword: FC = () => {
  type FormType = {
    email: string;
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
          Восстановление пароля
        </Title>
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
        </Card>
        <div className={styles.footer}>
          <button
            className={styles.button}
            type="submit"
          >
            Восстановить
          </button>
          <Link href="/">Я вспомнил пароль</Link>
        </div>
      </Form>
    </div>
  );
};

export default RecoveryPassword;
