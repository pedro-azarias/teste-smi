# Use uma imagem base do Node.js
FROM node:14

# Defina o diretório de trabalho como /app
WORKDIR /app

# Copie os arquivos do frontend para o contêiner
COPY front-end-smi/ ./front-end-smi/

# Copie os arquivos do backend para o contêiner
COPY backend-smi/ ./backend-smi/

# Instale as dependências para o front-end
WORKDIR /app/front-end-smi
RUN npm install

# Defina a porta em que o front-end será executado
EXPOSE 3000

# Comando para iniciar o front-end
CMD ["npm", "start"]
