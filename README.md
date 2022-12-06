# NOTAS:

## Sobre docker dev

### Cuando usaria docker compose en desarrollo?

En caso de [no tener node instalado](#no-tener-node-instalado) o que queramos [utilizar alguna otra version de node](#utilizar-alguna-otra-vesion-de-node)

### No tener node instalado:

Entrar al docker compose file y editar algunas lineas iniciales:

- Comentar el `command` (para usar por defecto el `sh`).
- Descomentar la opcion `tty: true` para iniciar una pseudo-tty (y asi evitar que el contenedor se cierre).
- Colocate en la carpeta de la clase que vas a ejecutar `cd <nombre de carpeta clase>`
- Iniciar docker con `docker compose up -d`
- Ingresar el comando: `docker exec -it <nombre carpeta clase>-app-1 sh` (ejemplo de nombre de carpeta clase: `clase5`).
- Ejecutar `npm install` para crear el node module.
- Deshacer los cambios en el docker compose file.

> [Ahora si ejecutar la app](#cada-vez-que-queramos-iniciar-la-app-usamos-docker-compose-up)

---

### Utilizar alguna otra vesion de node:

Entrar al docker compose file y editar algunas lineas iniciales:

- Entramos en la carpeta de la clase e instalamos las dependencias con `npm install`
- Editamos la linea `image: node:<version>` y en `version` colocamos la que queramos.
- Opciones de versiones en [docker hub](https://hub.docker.com/_/node)

> [Ahora si ejecutar la app](#cada-vez-que-queramos-iniciar-la-app-usamos-docker-compose-up)

---

### Cada vez que queramos iniciar la app, usamos `docker compose up`

---

---

## Sobre Thunder Client

> Algo asi como postman pero para vsc

- En el directorio raiz de la clase (ej clase5) viene un JSON llamado `thunder-collection...json`.
- Este tiene las peticiones a realizar para probar la api.
- Para usarlo se tiene que descargar la extension en vsc e importar los datos a la extension con la opcion importar.
