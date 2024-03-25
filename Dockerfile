# Use an official Node.js with Alpine Linux as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the entire project directory
COPY . .

# Install dependencies
RUN npm install --only=prod

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the application
CMD ["node", "server.js"]
