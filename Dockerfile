# Sử dụng Node.js làm base image
FROM node:14

# Đặt thư mục làm việc trong container
WORKDIR /usr/src/app

# Sao chép package.json và package-lock.json
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Mở cổng ứng dụng
EXPOSE 8000

# Khởi động ứng dụng
CMD ["npm", "start"]
