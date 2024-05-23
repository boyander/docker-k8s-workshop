#!/bin/bash

TAG="v1"

docker build -t boyander/app-sample:$TAG .
docker push boyander/app-sample:$TAG
kubectl apply -f k8s/pod.yaml