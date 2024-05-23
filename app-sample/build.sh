#!/bin/bash

TAG="v1"

docker buildx build --platform linux/arm64/v8,linux/amd64 -t boyander/app-sample:$TAG .
docker push boyander/app-sample:$TAG
kubectl apply -f k8s/pod.yaml