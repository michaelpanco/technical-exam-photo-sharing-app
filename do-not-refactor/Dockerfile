# base image
FROM node:12.10.0-alpine

# set working directory
WORKDIR /usr/src

# add `/app/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

# install and cache app dependencies
# COPY web/package.json /usr/src/package.json

COPY backend /usr/src

RUN npm install

EXPOSE 8888
CMD ["npm", "start"]