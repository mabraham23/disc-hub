#!/bin/sh

# Start @ repo root

# Add frontend build to public
mv ./client/build ./server/public

# Rename to build for pushing
mv ./server ./build