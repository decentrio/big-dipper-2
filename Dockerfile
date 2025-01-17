FROM node:14.5.0-alpine

ENV PORT 3000

# Install git for ui and internal packages
RUN apk add --no-cache git

# Set app directory
WORKDIR /app

# Installing dependencies
COPY package*.json ./
RUN mkdir node_modules
RUN npm ci
RUN npx browserslist@latest --update-db

# Copying source files
COPY . .

RUN npm run build:next

EXPOSE ${PORT}

ENTRYPOINT ["./bin/docker_run.sh"]
