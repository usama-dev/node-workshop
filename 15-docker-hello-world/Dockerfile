# Base image of node based on alpine linux
FROM node:10-alpine

# Expose 5000 port of the container which is port on which node process listens
EXPOSE 5000

# Setting the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json files. * at the end of file means that copy the file if it exists. ./ means copy it to the current working dir which is /usr/src/app 
COPY package.json package-lock.json* ./

# Run the npm install command to install all the packages
RUN npm install && npm cache clean --force

# Copy all the files from the root directory to the working directory of container
COPY . .

# Run the node process
CMD [ "node", "./index" ]
