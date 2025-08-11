FROM node:18-bullseye AS node-builder

WORKDIR /backend

# Copy only package files first to install dependencies
COPY data/package*.json ./

RUN npm install

# Copy everything else from data folder (source, configs)
COPY data/ ./

RUN chmod +x ./node_modules/.bin/tsc
RUN chmod +x ./node_modules/.bin/copyfiles

# Build your project (run build script from package.json)
RUN npm run build

FROM registry.heroiclabs.com/heroiclabs/nakama:3.22.0

# Copy compiled JS files to Nakama modules folder
COPY --from=node-builder /backend/build/*.js /nakama/data/modules/build/

# Copy Nakama config file
COPY data/local.yml /nakama/data/
