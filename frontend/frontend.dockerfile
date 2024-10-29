# Usa la imagen oficial de Node.js con la versión requerida
FROM node:18.18.0

# Crear el directorio de trabajo
WORKDIR /app

# Copiar las dependencias y instalarlas
COPY package.json package-lock.json ./
RUN npm install

# Copiar el código de la aplicación
COPY . .

# Exponer el puerto que usará Next.js
EXPOSE 3000

# Comando para ejecutar la aplicación en modo de desarrollo
CMD ["npm", "run", "dev"]
