# Docker Compose
Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration. 

#### Sample docker-compose.yml
```
version: '3'                # Setting the docker-compose version

services:
 
  mongo:                    # Setting service name for MongoDB Database

    container_name: mongo   # Setting the container name

    image: mongo            # MongoDB image which will be pulled from dockerhub
    
    ports:                  # Exposing port to host
      - '27017:27017'       # host:container
  
  app:                      # Setting service name for NodeJS

    container_name: app     # Setting the container name

    build: .                # Building the image from Dockerfile

    ports:                  # Exposing port to host
      - '80:3000'

    environment:            # Setting environment variables
      - NODE_ENV=dev
      - PORT=3000

    depends_on:             # Dependency on mongo container, will only run this once mongo is up
      - mongo
  
```

## Docker Compose Commands

### Starting Docker Compose
```
docker-compose up
```

### Starting Docker Compose in background
```
docker-compose up -d
```

### Stopping Docker Compose
```
docker-compose down
```

### Check Running Docker Compose Containers
```
docker-compose ps
```

### Docker Compose Rebuilding Images
```
docker-compose build
```

### Docker Compose logs
```
docker-compose logs
```


[Official Documentation](https://docs.docker.com/compose/overview/)