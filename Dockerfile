FROM node

WORKDIR /workDir

COPY . .

RUN npm install

CMD [ "npm", "run", "dev" ]