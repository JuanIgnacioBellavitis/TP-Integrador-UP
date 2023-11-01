# Trabajo Practico Integrador - FULL STACK WEB DEVELOPMENT

## Descripción del proyecto

Trabajo Práctico para la materia Fullstack Web Developer de la Universidad de Palermo.

Backend realizado con Typescript, NodeJs, express y MongoDB.

### Requerimientos

- NodeJs v18.X o superior
- NPM 9.X o superior
- Postman

### Instalación y Ejecución
Descargue el zip y abra el proyecto en Visual Studio Code.

Antes de empezar a ejecutar el programa, ejecute ```npm install``` o ```yarn install``` en la consola en el directorio del proyecto para instalar las dependencias del package.json.

Una vez finalizado la instalación de los paquetes, ejecutar ```npm start``` para iniciar el servidor.

Por último, abrir Postman y consumir la API, apuntando a ```http://localhost:3000``` seguido de los siguientes endpoints y bodys para el correcto funcionamiento:


#### AUTENTIFICACIÓN:

```/auth/login```

```
{
    "username": "USUARIO 1",
    "password":  "1234"
}
```

Descripción: Método POST. Autentificiación del usuario, ingresando nombre de usuario y contraseña.

#### USUARIO: 

```/user/:id```

Descripción: Método GET. Se envía el ID por parametro y se obtiene el ID y Nombre del usuario logueado.

#### PERSONAJES:

```/characters```

Descripción: Método GET. Obtiene todos los personajes creados.

```/defaultCharacters```

Descripción: Método GET. No necesita Body. Obtiene todos los personajes hechos por defecto, su ID, nombre y la cabeza del personaje.

```/charactersFromUserId/:userId```

Descripción: Método GET. Se envia el ID del usuario y se obtiene todos los personajes creados por el usuario logueado

```/characterById/:id ```

Descripción: Método GET. Se envia el ID del personaje y se obtiene los datos de un personaje en concreto.

```/characters/create ```

```
{
    "userId": "64f4fff27c1e572c517f8eae",
    "characterName": "Francisco",
    "headId": 4,
    "tshirtId": 2,
    "pantsId": 1,
    "shoesId": 4
}
```

Descripción: Método POST. Se utiliza para crear el personaje con parte superior, inferior y zapatos elegidos por el usuario.

```/character/update/:id ```
```
{
    "userId": "64f4fff27c1e572c517f8eae",
    "characterName": "Francisco",
    "headId": 4,
    "tshirtId": 2,
    "pantsId": 2,
    "shoesId": 2
}
```
Descripción: Método POST. Se utiliza para hacer una modificacion del personaje.
