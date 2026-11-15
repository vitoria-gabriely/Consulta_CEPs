FROM node:24-alpine

WORKDIR /app

COPY package.json package-lock.json ./
# --omit=dev exclui as dependências de desenvolvimento
RUN npm ci --omit=dev 

COPY server ./server
COPY public ./public

# No Express, isso evita mostrar detalhes internos dos erros nas respostas.
ENV NODE_ENV=production
ENV PORT=3000

USER node

EXPOSE 3000

CMD ["node", "server/main.js"]