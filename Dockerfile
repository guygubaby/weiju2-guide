FROM nginx:1.17.1-alpine
COPY /dist /usr/src/app
COPY nginx.conf /etc/nginx
EXPOSE 80