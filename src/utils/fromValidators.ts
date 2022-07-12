// eslint-disable-next-line import/no-extraneous-dependencies
import { RuleObject } from 'rc-field-form/es/interface';

export const validatePass = (trigger: boolean) => async (_rule: RuleObject, value: string) => {
  if (!trigger) {
    return Promise.resolve();
  }
  if (!value) {
    return Promise.reject(new Error('Пожалуйста, введите пароль'));
  }
  if (value.trim().length < 6) {
    return Promise.reject(new Error('Длина пароля должна быть больше 6 символов'));
  }
  return Promise.resolve();
};

export const validatePass2 = (trigger: boolean, confirm_value: string) => async (_rule: RuleObject, value: string) => {
  if (!trigger) {
    return Promise.resolve();
  }
  if (!value) {
    return Promise.reject(new Error('Пожалуйста, повторите пароль'));
  }
  if (value !== confirm_value) {
    return Promise.reject(new Error('Пароли не совпадают'));
  }
  return Promise.resolve();
};

export const validateEmail = async (_rule: RuleObject, value: string) => {
  if (!value) {
    return Promise.reject(new Error('Пожалуйста, введите электронную почту'));
  }
  if (
    !value.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    return Promise.reject(new Error('Пожалуйста, введите корректный адрес электронной почты'));
  }
  return Promise.resolve();
};

export const validateEmptyField = (message: string) => async (_rule: RuleObject, value: string) => {
  if (!value) {
    return Promise.reject(new Error(message));
  }
  if (value === 'Выберите') {
    return Promise.reject(new Error(message));
  }
  return Promise.resolve();
};

export const validateEmptyFieldWithTrigger =
  (message: string, trigger: boolean) => async (_rule: RuleObject, value: string) => {
    if (!trigger) {
      return Promise.resolve();
    }
    if (!value) {
      return Promise.reject(new Error(message));
    }
    if (value === 'Выберите') {
      return Promise.reject(new Error(message));
    }
    return Promise.resolve();
  };

export const validatePhone = () => async (_rule: RuleObject, value: string) => {
  if (value && !value.match(/^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{5,12}$/)) {
    return Promise.reject(new Error('Пожалуйста, введите корректный телефон'));
  }
  return false;
};
