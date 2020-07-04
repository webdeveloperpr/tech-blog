FROM node:12

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/frontend

COPY . .
# Installing dependencies
RUN npm install

# Building app
RUN npm run build
EXPOSE 3000

# Running the app
CMD "npm" "run" "dev"