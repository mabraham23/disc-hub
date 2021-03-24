#!/bin/sh

# Build in client dir
cd ./client
npm run build

# Move to server folder
cd ..
mv ./client/dist ./server/public