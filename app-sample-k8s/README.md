## Minikube useful commands

```
minikube start --memory 4000 --cpus 2
minikube dashboard
minikube addons enable registry
```

## Kubectl commands

Create deployment:
`kubectl create deployment app-sample --image=boyander/app-sample`
Expose as a service:
`kubectl expose deployment app-sample --type=LoadBalancer --port=3000`
Get proxied minikube url
`minikube service app-sample --url`

## Deploy app sample in k8s

`kubectl apply -f deployment.yaml`

## Delete all

`kubectl delete -f deployment.yaml`
