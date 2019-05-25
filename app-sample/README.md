## Build docker image

Ensure that you are in the `app-sample` directory

```bash
docker build -t boyander/app-sample .
```

## Run docker image

```bash
docker run boyander/app-sample
```

## Publish to DockerHub registry

```bash
docker push boyander/app-sample
```

## Useful commands

```bash
# Get container ID
$ docker ps

# Print app output
$ docker logs <container id>

# Bash shell into container
$ docker exec -it <container id> /bin/bash
```

## More Info

- https://nodejs.org/de/docs/guides/nodejs-docker-webapp/
