# Automated Deployment Setup

This project uses GitHub Actions to automatically build and deploy the website when changes are merged to the main branch.

## Prerequisites

1. **SSH Key Pair**: You need an SSH key pair for secure server access
2. **Server Access**: Your server should be accessible via SSH
3. **Nginx**: Your server should have Nginx configured to serve the site

## GitHub Secrets Setup

To enable automated deployment, you need to configure the following secrets in your GitHub repository:

### 1. Go to Repository Settings
- Navigate to your GitHub repository
- Click on **Settings** tab
- Click on **Secrets and variables** → **Actions**

### 2. Add the following secrets:

#### `SSH_PRIVATE_KEY`
- **Description**: Your private SSH key for server access
- **Value**: The entire content of your private key file (usually `~/.ssh/id_rsa`)
- **Example**: 
  ```
  -----BEGIN OPENSSH PRIVATE KEY-----
  b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAABlwAAAAdzc2gtcn
  ...
  -----END OPENSSH PRIVATE KEY-----
  ```

#### `SERVER_USER`
- **Description**: Username for SSH access to your server
- **Value**: Your server username (e.g., `manis`)

#### `SERVER_HOST`
- **Description**: IP address or domain of your server
- **Value**: Your server's IP address or domain (e.g., `114.29.237.70`)

#### `SERVER_PATH`
- **Description**: Path on the server where the built files should be deployed
- **Value**: The directory path on your server (e.g., `/home/manis/maniz-stha/dist/`)

#### `SITE_URL` (Optional)
- **Description**: Your website's URL for deployment notifications
- **Value**: Your website URL (e.g., `https://maniz-stha.com`)

## SSH Key Setup

### 1. Generate SSH Key Pair (if you don't have one)
```bash
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"
```

### 2. Add Public Key to Server
```bash
# Copy your public key to the server
ssh-copy-id manis@114.29.237.70

# Or manually add to ~/.ssh/authorized_keys on the server
cat ~/.ssh/id_rsa.pub | ssh manis@114.29.237.70 "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

### 3. Test SSH Connection
```bash
ssh manis@114.29.237.70
```

## How It Works

1. **Trigger**: When code is pushed to the `main` branch or a PR is created
2. **Build**: The action installs dependencies, runs linting, and builds the project
3. **Deploy**: Only on main branch pushes, it securely copies files to your server
4. **Restart**: Nginx is restarted to serve the updated files
5. **Notification**: Success/failure messages are displayed

## Manual Deployment

If you need to deploy manually, you can still use the existing `deploy.sh` script:

```bash
chmod +x deploy.sh
./deploy.sh
```

## Troubleshooting

### Common Issues:

1. **SSH Connection Failed**
   - Verify your SSH key is correctly added to the server
   - Check that the server host and user are correct
   - Ensure the server is accessible from GitHub Actions

2. **Permission Denied**
   - Make sure the server user has write permissions to the deployment directory
   - Verify sudo access for Nginx restart

3. **Build Failures**
   - Check the build logs for dependency or compilation errors
   - Ensure all required environment variables are set

### Debugging:
- Check the Actions tab in your GitHub repository for detailed logs
- Test the deployment script locally first
- Verify all secrets are correctly configured

## Security Notes

- Never commit SSH private keys to your repository
- Use specific SSH keys for deployment (don't reuse personal keys)
- Regularly rotate your deployment SSH keys
- Consider using deployment tokens for additional security 