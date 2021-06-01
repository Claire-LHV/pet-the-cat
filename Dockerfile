FROM nginx:stable-alpine
COPY --from=build / usr/share/nginx/html
COPY --from=build /nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/nginx.conf && nginx -g 'daemon off;'