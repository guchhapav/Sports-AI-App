# frontend/Dockerfile

# Base image with Node.js
FROM node:24

# Set working directory
WORKDIR /app

# Copy dependencies and install
COPY package*.json ./
RUN npm install

# Copy app code
COPY . .

# Expose Vite dev server port
EXPOSE 3000

# Run dev server with hot reload
CMD ["npm", "run", "dev", "--", "--host"]
