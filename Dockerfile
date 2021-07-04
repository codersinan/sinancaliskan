FROM nginx:1.19-alpine
COPY nginx.conf /etc/nginx/nginx.conf:ro
COPY /dist/website /usr/share/nginx/html