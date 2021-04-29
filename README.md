# PLCS (Places)

El proyecto consta de una plataforma donde los usuarios pueden encontrar nuevos lugares en distintas ubicaciones del mundo. Cada usuario puede publicar, compartir e interactuar con las publicaciones de la plataforma.

## PLCS en **GitHub Pages**
Entra en el siguiente link para interactuar con la aplicación de PLCS

https://bytewise-backend-api.herokuapp.com/

## Usuarios de PLCS 👱🏻‍♀️👱🏻‍♂️
En PLCS, los usuarios pueden hacer varias acciones:
1. Registrarse a la plataforma
2. Iniciar sesión
3. Suscribirse al newsletter
4. Publicar un "PLC" (un lugar que haya visitado)
5. Dar like, compartir y comentar las publicaciones
6. Ver su perfil de usuario

## Comenzando 🚀

Mira **Deployment** para conocer como desplegar el proyecto.

### Pre-requisitos 📋
```
1. Tener instalado un navegador como Google Chrome o Firefox
2. Tener una aplicación para hacer solicitudes HTTP como Insomnia o Postman
```

## Instalación 🔧

Sigue los siguiente pasos para obtener una copia del proyecto y ejecutarla en entorno de desarrollo

* Clona el repositorio desde la linea de comandos o descargando el ZIP
```
$ git clone https://github.com/JILSE7/Project-Place
```
* Instala los paquetes que necesita el proyecto
```
$ npm install
```
* Ejecuta el comando para correr la aplicación en modo desarrollo:
```
$ npm start
```
* Abre otra terminal y dirígete a la carpeta database:
```
$ cd database
```
* Ejecuta los paquetes que utiliza la fake-api:
```
$ npm install
```
* Ejecuta el comando para correr la fake-api y pueda consumirlo la aplicación:
```
$ npm start
```


## Despliegue 📦

Create-React-App tiene configurado un comando para realizar un deploy de la aplicación, creando una carpeta dentro del proyecto llamada **dist**.

Para hacer el deploy, sigue los siguientes pasos:

1. Crea y accede a Heroku con tu cuenta
2. Pulsa en el botón "Create new app"
3. Ponle un nombre a la app y selecciona tu región
4. Sube tu código a un repositorio de GitHub
5. En la sección "Deployment method", selecciona "Connect to Github" y conectala con tu cuenta.
6. Busca tu repositorio por su nombre y selecciona la rama donde tienes tu código final.
7. Pulsa el botón "Deploy Branch" para desplegar tu aplicación
8. Dirígete a "Setting" y en la sección "Config Vars" agrega las siguientes variables de entorno:
```bash
export NODE_ENV='production'
export PORT= '80'
export SECRET='supersecret'
export MONGODB_URI=''
```
En MONGODB_URI pon la URI que tienes en tu archivo ./env.sh
9. Abre la app con el botón "Open app" situado en la parte superior derecha de la pantalla.

Ya podrás hacer las mismas peticiones que hacias con tu aplicación de peticiones HTTP usando la url que te proporciona Heroku.

## Construido con 🛠️

* [React.js](https://es.reactjs.org/) - Librería de Javascript
* [Bootstrap](https://getbootstrap.com/) - Toolkit CSS
* [JSON-Server](https://github.com/typicode/json-server) - Toolkit CSS
* [Visual Studio Code 2019](https://visualstudio.microsoft.com/es/) - Editor de Texto

## Autores ✒️

* **David Cruz Portilla** - [davidportilla179](https://github.com/davidportilla179)
* **Said Mandujano** - [JILSE7](https://github.com/JILSE7)
* **Brandon Alberto Fuentes Ocampo** - [Brandon851](https://github.com/Brandon851)
* **José Antonio Millán Villegas** - [AntonioMillanV](https://github.com/AntonioMillanV)
## Versionado 📌

* [Git Bash](https://gitforwindows.org/) - Controlador de versiones
* [Repositorio](https://github.com/JILSE7/Project-Place) - Repositorio del Proyecto
## Expresiones de Gratitud 🎁

* Agradecemos al equipo de BEDU en general por su gran trabajo y apoyo en este proyecto. 📢🤓.
---
⌨️ con ❤️ por el EQUIPO 21