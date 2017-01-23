FROM node

MAINTAINER Filipe Lemos <contato@filipelemos.com>

RUN mkdir /muque
WORKDIR /muque

COPY package.json /muque

RUN npm install -g bower gulp-cli
RUN npm install

EXPOSE 3000
EXPOSE 3001
