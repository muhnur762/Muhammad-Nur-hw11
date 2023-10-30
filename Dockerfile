FROM node:18.14.2-alpine3.17

WORKDIR /dwork/todo/

COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]