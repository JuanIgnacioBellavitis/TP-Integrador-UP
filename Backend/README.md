Trabajo Practico Integrador - FULL STACK WEB DEVELOPMENT

Backend realizado con Typescript, NodeJs, express y MongoDB.

Material necesario para su correcto funcionamiento:

- NodeJs v18.X o superior
- NPM 9.X o superior
- Postman

Instalación y Ejecución
Descargue el zip y abra el proyecto en Visual Studio Code.

Antes de empezar a ejecutar el programa, ejecute npm install o yarn install en la consola en el directorio del proyecto para instalar las dependencias del package.json

Endpoints y bodys para el correcto funcionamiento:

AUTENTIFICACIÓN:

/auth/login --> Autentificiación del usuario, ingresando nombre de usuario y contraseña.

{
    "username": "USUARIO 1",
    "password":  "1234"
}

Descripción: Éste endpoint devuelve el nombre de usuario, su ID, y un objecto llamado "authentication" el cual devuelve la contraseña encriptada, un sessionToken, y un salt

USUARIO: 

/user -->  obtiene el ID y Nombre del usuario logueado.

{
    "username": "USUARIO 1"
}

Descripción: Éste endpoint hace un GET y obtiene el ID y nombre del usuario

PERSONAJES:

/defaultCharacters

Descripción: No necesita Body. Obtiene todos los personajes hechos por defecto, su ID, nombre y la cabeza del personaje.

/characters

{
    "userId": "64f4ff936f2badff5b3b61de"
}

Descripción: Obtiene todos los personajes creados por el usuario logueado

/characterById 

{
    "_id": "6508cda7456a80ef86b72790"
}

Descripción: Obtiene los datos de un personaje en concreto.

/characters/create 

{
    "userId": "64f4fff27c1e572c517f8eae",
    "characterName": "Francisco",
    "headId": 4,
    "tshirtId": 2,
    "pantsId": 1,
    "shoesId": 4
}

Descripción: Se utiliza para crear el personaje con parte superior, inferior y zapatos elegidos por el usuario.

/character/:id 

{
    "userId": "64f4fff27c1e572c517f8eae",
    "characterName": "Francisco",
    "headId": 4,
    "tshirtId": 2,
    "pantsId": 2,
    "shoesId": 2
}

Descripción: Se utiliza para hacer una modificacion del personaje.
