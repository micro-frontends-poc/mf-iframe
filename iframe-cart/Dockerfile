FROM node
ADD . /var/app
WORKDIR /var/app
ENV PATH="/var/app/node_modules/.bin/:${PATH}"

COPY package.json /var/app/package.json
RUN npm install
RUN npm install -g @angular/cli@latest
CMD ng serve --host 0.0.0.0
EXPOSE 4200