FROM node

MAINTAINER Filipe Lemos <contato@filipelemos.com>

RUN mkdir /project
WORKDIR /project
COPY package.json /project

RUN npm install -g bower gulp-cli
RUN npm install

EXPOSE 3000
EXPOSE 3001
