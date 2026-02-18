# Use a lightweight Node.js image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first
# This improves build performance by leveraging Docker cache
COPY package*.json ./

# Install Node dependencies
RUN npm install

# Copy the rest of the frontend source code
COPY . .

# Expose port 3000 (React dev server default)
EXPOSE 3000

# Start React development server
CMD ["npm", "start"]
