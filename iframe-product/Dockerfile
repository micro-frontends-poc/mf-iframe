FROM node
ADD . /var/app
WORKDIR /var/app
ENV PATH="/var/app/node_modules/.bin/:${PATH}"
RUN npm install
CMD npm run serve
EXPOSE 3001