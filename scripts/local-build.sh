#!/bin/sh

# Build in client dir
cd ./client
npm build

# Move to server folder
cd ..
mv ./client/build ./server/public