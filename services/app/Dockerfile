FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# Bundle app source
COPY . .

RUN npm install typescript -g
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# compile typescript
RUN tsc --build
# copy Reddit configurations
# RUN cp ./src/requestHandlers/config.json ./dist/requestHandlers/
# # copy sql scripts
# RUN mkdir ./dist/DatabaseAdapters/PgDatabaseAdapter/Schema && \
# cp ./src/DatabaseAdapters/PgDatabaseAdapter/Schema/* ./dist/DatabaseAdapters/PgDatabaseAdapter/Schema/

COPY ./src/requestHandlers/config.json ./dist/requestHandlers/
# copy sql scripts
RUN mkdir ./dist/DatabaseAdapters/PgDatabaseAdapter/Schema
COPY ./src/DatabaseAdapters/PgDatabaseAdapter/Schema/* ./dist/DatabaseAdapters/PgDatabaseAdapter/Schema/


EXPOSE 3000
CMD [ "node", "dist/index.js" ]



