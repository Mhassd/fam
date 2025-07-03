# Gunakan base image Node.js versi stabil
FROM node:18

# Set direktori kerja di dalam container
WORKDIR /app

# Copy file package.json & package-lock.json ke container
COPY package*.json ./

# Install semua dependency
RUN npm install

# Copy semua file project lu ke container
COPY . .

# Kalau bot lu butuh port tertentu, EXPOSE boleh, contoh:
# EXPOSE 8080

# Start bot pakai npm start
CMD ["npm", "start"]
