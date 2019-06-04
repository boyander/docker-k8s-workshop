# 101 Docker & k8s

## Docker

- Containerization Fundamentals
  - LXC: It implements process sandboxing. https://linuxcontainers.org/
  - Process group isolation
  - AUFS: https://en.wikipedia.org/wiki/Aufs
  - https://medium.com/@jessgreb01/digging-into-docker-layers-c22f948ed612
  - OverlayFS as a successor to AUFS. https://docs.docker.com/storage/storagedriver/overlayfs-driver/
  - Docker originally used LinuX Containers (LXC), but later switched to runC (formerly known as libcontainer), which runs in the same operating system as its host. This allows it to share a lot of the host operating system resources. Also, it uses a layered filesystem (AuFS) and manages networking.
  - Docker is diferent to a VM: https://stackoverflow.com/questions/16047306/how-is-docker-different-from-a-virtual-machine
  - Docker vs automation systems like `chef` or `puppet` or `https://www.vagrantup.com/`
- What is a container and an image

  - Portable deployment across machines. Docker defines a format for bundling an application and all its dependencies into a single object called a container.

- Container Images.
  - CMD vs Entrypoint: https://medium.freecodecamp.org/docker-entrypoint-cmd-dockerfile-best-practices-abc591c30e21
- Create your image. `Dockerfile` basics
  - Docker commands `build`, `run`, `push`, `pull`
- Docker volumes
- Docker compose and `docker-compose.yaml` syntax
  - Compose with other data
  - https://docs.docker.com/compose/startup-order/
- Secrets
- Docker registry to hold images

### Docker Exercise: Create a Docker Image and link it with services

**Description:** Create your docker image for a simple site writen in `node.js`.
**Required:** We need a `redis` service and a `mongodb` database to complete the service.

#### Tasks

1. **BASIC:** Create a docker image from the provided `node.js` code and upload it to public `DockerHub` registry.
2. **ADVANCED**: Write a `docker-compose.yaml` file that attatches a `mongodb` database to the host.
3. **PRO**: Modify the `docker-compose.yaml` to add `redis` support and ensure we have valid data on `redis` before start.
   - **Side Note**: you will need to create a custom `redis` image that starts `FROM redis` and populates it with data.
   - Redis autocomplete idea: https://redislabs.com/ebook/part-2-core-concepts/chapter-6-application-components-in-redis/6-1-autocomplete/6-1-2-address-book-autocomplete/

## K8s

- K8s architecture and fundamentals
- Minikube - https://kubernetes.io/docs/setup/minikube/#installation
  - https://stackoverflow.com/questions/45002364/how-to-upgrade-minikube
  - Dashboard
  - Minikube own registry
    - minikube start
    - minikube dashboard
    - minikube addons enable registry
  - Other registry providers: Amazon ECR, https://aws.amazon.com/ecr/
- Pods, Deployments and Services
- The `kubectl` cli
- Deploy your `Dockerfile` in `k8s`
- ConfigMap
- K8s, apply change when configmap changes, reactive changes

- Cloud Managed k8s solutions. Example with digitalocean
- Auto deploy with bitbucket pipelines
- Extra: Metrics with `Prometheus` and `Graphana`

## Who to follow

- https://www.cncf.io/
- https://www.hashicorp.com/
- https://cloud.google.com/knative/
- https://kubernetes.io/
- https://www.terraform.io/

## Other interesting things

- EFK Stack to monitor kubernetes logs. `minikube addons enable efk`
- https://github.com/jetstack/cert-manager
- https://alexanderzeitler.com/articles/enabling-the-kubernetes-dashboard-for-digitalocean-kubernetes/
