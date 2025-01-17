# Étape 1 : Construire l'application Angular
FROM node:18 AS build
WORKDIR /app

# Copier uniquement les fichiers package.json et package-lock.json pour installer les dépendances
COPY package.json /app/
COPY package-lock.json /app/

# Installer les dépendances
RUN npm install

# Copier tout le code source dans le répertoire de travail du conteneur
COPY . .

# Construire l'application Angular pour production
RUN npm run build --prod

# Étape 2 : Servir l'application avec Nginx
FROM nginx:alpine

# Copier les fichiers construits depuis l'étape précédente
COPY --from=build /app/dist/exos-angular /usr/share/nginx/html

# Exposer le port 80 pour accéder à l'application
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
