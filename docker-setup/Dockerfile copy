FROM nginx:stable-alpine
# COPY . /usr/share/nginx/html
COPY /build/. /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]