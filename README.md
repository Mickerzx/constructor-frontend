# Описание
Проект развернут на [NextJS](https://nextjs.org/) версии 12.1.6 через [`create-next-app`](https://nextjs.org/docs/api-reference/create-next-app) на [Typescript](https://www.typescriptlang.org/).

Версия [NodeJS](https://nodejs.org/en/) - 14.17.3

Версия [npm](https://www.npmjs.com/) - 6.14.13

## Установка
```bash
$ npm i
```

## Запуск приложения
Для запуска проекта нужны ENV-переменные. Их примеры можно посмотреть в файле .env.example, а значения взять из репозитория в Gitlab. Далее создаем файл .env и помещаем их туда.

```bash
$ npm run dev
```
Откройте [http://localhost:3000](http://localhost:3000) чтобы увидеть результат.

## Проверка кода
Перед созданием продакшн-сборки (или просто мердж-реквеста) проделайте следующие шаги:

### Проверка стиля кода, ошибок линтеров, ошибок TypeScript:
```bash
$ npm run tsc:check # проверка типов компилятором TypeScript
$ npm run stylelint:check # проверка стилей
$ npm run eslint:check # проверка линтером
$ npm run prettier:check # проверка приттиром на форматирование кода
$ npm run all:check # запуск всех проверок
```

### Автоматическое форматирование кода (если линтеры и преттиер ругались)
```bash
$ npm run stylelint:fix # запуск автоформатирования css
$ npm run prettier:fix # запуск автоформатирования кода
$ npm run all:fix # запуск prettier:fix и stylelint:fix
```

### Оптимизация
Проверить через инструмент [lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=ru).

Проверить валидатором [w3c](https://validator.w3.org/nu/).

Устраните ошибки консоли, в том числе в режиме dev (нужно включить полный уровень детализации консоли).

### Запуск продакшен сборки
```bash
npm run build
```
Также команду build следует делать перед каждым мердж реквестом, чтобы убедиться, что ничего не сломалось.
```bash
npm start
```
Откройте [http://localhost:3000](http://localhost:3000) чтобы увидеть результат.

### Husky
Срабатывает автоматически на коммит и не дает его сделать, если сообщение коммита не соответствует конфигу или какой-либо из тестов не пройден.
Примеры валидных сообщений коммита:
```sh
chore: run tests on travis ci
fix(server): #13 send cors headers
feat(blog): #42 add comment section
```
