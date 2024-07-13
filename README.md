# Emisión Continua de Video via RTMP

Este proyecto tiene como objetivo facilitar la transmisión continua de video a YouTube (y en realidad a cualquier web que permita lives) desde un servidor remoto, como un servidor VPN o un servicio en la nube. Esto es útil para transmitir eventos en vivo las 24 horas del día sin depender de una única computadora local.

## Funcionalidades

- **Transmisión Continua de Video:** Utiliza `ffmpeg` para transmitir un video de forma continua a través de RTMP.
- **Automatización:** Permite la transmisión 24/7 sin intervención manual.
- **Configuración Remota:** Ideal para configurar y administrar la transmisión desde cualquier lugar con acceso a Internet.

## Requisitos

- Node.js
- `ffmpeg` instalado y configurado para la transmisión RTMP a YouTube.
- Acceso a una cuenta de YouTube con derechos para transmitir en vivo.

## Instalación y Configuración

1. **Clonar el Repositorio:**

   ```bash
   git clone https://github.com/francomoreira/emitir-24-7.git
   cd emitir-24-7
   ```

2. **Instalar Dependencias:**

   ```bash
   npm install
   ```

3. **Configurar Variables de Entorno:**

   Crea un archivo `.env` en la raíz del proyecto y agrega tus configuraciones:

   ```plaintext
   API_KEY=tu_clave_de_transmisión
   ```

   Asegúrate de añadir `.env` a tu archivo `.gitignore` para evitar subir claves sensibles a tu repositorio.

4. **Ejecutar la Aplicación:**

   ```bash
   node app.js
   ```

## Uso

1. **Iniciar la Transmisión:**

   Una vez configurado y ejecutado, el servidor comenzará a transmitir el video especificado a YouTube.

2. **Administrar desde la Consola de YouTube:**

   Gestiona la transmisión en vivo desde el Panel de Control de YouTube.

## Contribuciones

Si quieres contribuir a este proyecto, por favor:

1. Haz un fork del repositorio.
2. Crea una rama con tu nueva funcionalidad: `git checkout -b nueva-funcionalidad`.
3. Haz commit de tus cambios: `git commit -am 'Añadir nueva funcionalidad'`.
4. Empuja la rama: `git push origin nueva-funcionalidad`.
5. Haz un pull request.

---
