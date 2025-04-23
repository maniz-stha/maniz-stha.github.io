#!/bin/bash

echo "Starting deployment..."

# Build the application
echo "Building application..."
npm run build

# Copy files to server (adjust the server details)
echo "Copying files to server..."
rsync -avz --delete dist/ user@your-server:/var/www/portfolio/dist/

# Restart Nginx on the server (requires SSH key setup)
echo "Restarting Nginx..."
ssh user@your-server 'sudo systemctl restart nginx'

echo "Deployment completed!" 