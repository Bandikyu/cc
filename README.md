# Uso:

## Sobre docker dev

### Cuando usaria docker compose en desarrollo?

En caso de [no tener node](#no-tener-node-instalado) o que queramos [utilizar alguna otra version de node](#utilizar-alguna-otra-vesion-de-node).
Aparte algunos directorios requieren de mysql y/o phpmyadmin, los cuales ya estan disponibles en el docker compose.

### No tener node instalado:

Entrar al docker compose file y editar algunas lineas iniciales:

- Comentar el `command` (para usar por defecto el `sh`).
- Descomentar la opcion `tty: true` para iniciar una pseudo-tty (y asi evitar que el contenedor se cierre).
- Colocate en la carpeta de la clase que vas a ejecutar `cd <nombre de carpeta clase>`
- Iniciar docker con `docker compose up -d`
- Ingresar el comando: `docker exec -it <nombre carpeta clase>-app-1 sh` (ejemplo de nombre de carpeta clase: `5-node`).
- Volver un directorio en la consola con `cd ..` y ejecutar `npm install` para crear el node module 
- Salir de esta consola (`exit`) e ingresar `docker compose stop` y `docker compose down`.
- Deshacer los cambios en el docker compose file.

> [Ahora si ejecutar la app](#cada-vez-que-queramos-iniciar-la-app-usamos-docker-compose-up)

---

### Utilizar alguna otra vesion de node:

Primero la carpeta root instalamos las dependencias con `npm install`

Luego entrar al `docker-compose.yml` file de cualquer carpeta primaria y editar algunas lineas iniciales:

- Editamos la linea `image: node:<version>` y en `version` colocamos la que queramos.
- Opciones de versiones en [docker hub](https://hub.docker.com/_/node)

> [Ahora si ejecutar la app](#cada-vez-que-queramos-iniciar-la-app-usamos-docker-compose-up)

---

### Cada vez que queramos iniciar la app 
Vamos al cualquiera de los directorios de primer nivel y usamos `docker compose up` (para ver todos los logs)

---


## Sobre los datos SQL
> Adjunto, en algunas carpetas primarias estan los archivos para iniciar la base de datos
> con los datos que fui procesando en desarrollo.

---

## Sobre Thunder Client

> Algo asi como postman pero para vsc, al igual
> que los archivos sql estos tambien
> se encuentan disponibles en los directorios 
> correspondientes (donde se pueden usar)

- En algunas de las carpetas primarias (ej /5-node) viene un JSON llamado `thunder-collection_.*.json`.
- Este tiene las peticiones a realizar para probar la api.
- Para usarlo se tiene que descargar la extension en vsc e importar los datos a la extension con la opcion importar.
