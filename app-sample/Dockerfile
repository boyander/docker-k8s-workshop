FROM node:12.3.1-alpine
ADD ./ /app
WORKDIR /app
RUN yarn install
EXPOSE 3000
CMD ["npm","start"]