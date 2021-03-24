#!/bin/sh

# Build in client dir
cd ./client
npm run build

# Move to server folder
cd ..
rm -rf ./server/public
mv ./client/dist ./server/public