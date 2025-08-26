# Use Node for development
FROM node:18

WORKDIR /app
COPY package*.json ./

ENV NODE_ENV=development

RUN npm install
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Start dev server with open network interface
CMD ["npm", "run", "dev", "--", "--host"]
