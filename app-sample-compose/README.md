## Docker compose with mongodb database

We write a docker-compose file with the services we need also from dockerhub images

To ensure images are booted correctly we use one of the following helpers

- https://github.com/vishnubob/wait-for-it/blob/master/wait-for-it.sh
- https://github.com/jwilder/dockerize

Remember to configure entrypoint in `docker-compose.yaml`:

- `entrypoint: ./wait-for-it.sh database:27017 -- npm start`
