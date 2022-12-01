# NOTAS:

## Sobre docker

### Cuando usar docker compose?
En caso de no tener node instalado[1] o que queramos utilizar alguna otra version de node[2]

### No tener node instalado:[1]
Entrar al docker compose file y editar algunas lineas iniciales:
1. Comentar el `command` (para usar por defecto el `sh`).
2. Descomentar la opcion `tty: true` para iniciar una pseudo-tty (y asi evitar que el contenedor se cierre).
3. En una nueva terminal ingresar el comando: `docker exec -it <nombre carpeta root>-app-1 sh` (ejemplo de nombre de carpeta root: `clase5`).
4. Ejecutar `npm install` para crear el node module.
5. Deshacer los cambios en el docker compose file.

---
### Utilizar alguna otra vesion de node:[2]

Entrar al docker compose file y editar algunas lineas iniciales:
1. Editamos la linea `image: node:<version>` y en `version` colocamos la que queramos.
2. Opciones de versiones en [docker hub](https://hub.docker.com/_/node)

---

## Ahora cada vez que queramos iniciar la app, usamos `docker compose up`

---
---

## Sobre Thunder Client 
> Algo asi como postman pero para vsc

- En el directorio raiz de la clase (ej clase5) viene un JSON llamado `thunder-collection...json`.
- Este tiene las peticiones a realizar para probar la api.
- Para usarlo se tiene que descargar la extension en vsc e importar los datos a la extension con la opcion importar.