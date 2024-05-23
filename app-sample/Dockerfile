FROM node
ADD ./ /app
WORKDIR /app
RUN npm i
EXPOSE 3000
CMD ["/bin/bash","-c","npm run start"]