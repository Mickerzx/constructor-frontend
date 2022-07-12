FROM node:14-alpine as builder

ARG REGISTRY_AUTH_TOKEN

# Устанавливаем зависимости
WORKDIR /usr/src/app
COPY package.json package-lock.json /usr/src/app/

# Добавляем внутренний npm-репозиторий и реквизиты доступа к нему
RUN npm config set @yeticrab:registry https://gitlab.com/api/v4/packages/npm/ && \
  npm config set //gitlab.com/api/v4/packages/npm/:_authToken ${REGISTRY_AUTH_TOKEN}


RUN npm install

# Сборка приложения
COPY . /usr/src/app/
RUN npm run build

# Запуск приложения
EXPOSE 3015
CMD ["yarn", "start", "-p", "3015"]
