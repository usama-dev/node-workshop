FROM node:10-alpine

EXPOSE 3000

WORKDIR /usr/src/app

# First copy the package.json files. * means that copy the file if it exists otherwise not. ./ means copy it to the current working dir which is /usr/src/app 
COPY package.json package-lock.json* ./ 

# Then run the npm install so that all packages are installed in a layer and are not installed on every file change
RUN npm install && npm cache clean --force

COPY . .

CMD [ "node", "./index" ]
