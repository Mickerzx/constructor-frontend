type PagesDictionaryType = {
  [key: string]: string;
};

// TODO: В идеале сделать так, чтобы брал только первое значение, чтобы всякие параметры и вложенные страница не могли поломать логику
export const pagesDictionary: PagesDictionaryType = {
  '/': 'Главная',
  '/cart': 'Корзина',
  '/account': 'Личный кабинет',
  '/contacts': 'Контакты',
  '/order': 'Заказ',
  '/products': 'Каталог',
};
