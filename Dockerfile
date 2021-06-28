FROM node:13.12.0-alpine as build
WORKDIR \src\main\satsviewer
ENV PATH /satsviewer/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /satsviewer/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]