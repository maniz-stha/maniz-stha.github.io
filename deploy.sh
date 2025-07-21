#!/bin/bash

echo "Starting deployment..."

# Build the application
echo "Building application..."
npm run build

# Copy files to server
echo "Copying files to server..."
rsync -avz --delete dist/ manis@114.29.237.70:/home/manis/maniz-stha/dist/

# Set proper permissions and restart Nginx
echo "Setting permissions and restarting Nginx..."
ssh manis@114.29.237.70 'sudo systemctl restart nginx'

echo "Deployment completed!" 