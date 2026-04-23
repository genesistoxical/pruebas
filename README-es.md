<p align="center"></p>
<p align="center"><a href="#"><img width="115px" src="docs/assets/Logo-115px.png" align="center" alt="Pixie Cursors"/></a></p>
<h1 align="center">Droplet Screenmate</h1>
<p align="center">Droplet Screenmate, una mascota corriendo por tu escritorio.</p>

<p align="center">
 <a href="LICENSE"><img alt="License" src="https://img.shields.io/badge/License-MIT-FD2A7A?style=flat-square&labelColor=343B45"/></a>
 <a href="https://github.com/genesistoxical/pixie-cursors/releases/latest"><img src="https://img.shields.io/github/v/release/genesistoxical/pixie-cursors.svg?color=2AB4FC&label=Release&style=flat-square&labelColor=343B45"/></a>
 <a href="#"><img alt="NET" src="https://img.shields.io/badge/.NET_Framework-4.8-FD2A7A?style=flat-square&labelColor=343B45"/></a> 
</p>

<p align="center">
<a href="README.md">English</a> :speech_balloon: <a href="README-es.md">Español</a>
</p>

## Características
* Tu mascota detecta la barra de tareas y camina por encima de ella.
* Puedes arrastrarlo y soltarlo en cualquier otra parte de tu escritorio.
* Animaciones diferentes al caminar, detenerse, sentarse y arrastrar.
* Elige entre los 8 skins por defecto.
* Opciones para cambiar la velocidad en la que camina.
* Opción de iniciar al encender tu PC.
* Puedes crear tu propio skin usando las plantillas (PNG y editables).

## Preview
<a href="#"><img src="docs/assets/Droplet-Screenmate.png"/></a>

## Uso
Lo único que debes hacer es ejecutar Droplet Screenmate.exe ¡y listo! Aparecerá tu mascota caminando sobre tu barra de tareas, no solo eso, también se detiene, se sienta e incluso basta con que lo arrastres y lo sueltes para cambiarlo de lugar. De hecho, también tiene una animación especial cuando lo estás arrastrando.

Dirígete al icono que está en tu bandeja, dale click derecho: 

**Options** abrirá la ventanita de Opciones de la mascota:
* En el apartado de _Skin_, solo despliega, elige uno y da click en OK. ¡Eso es todo!
* Para cambiar qué tan rápido camina y qué tan largos da los pasos, ve al apartado de _Config_: entre más alto esté el valor de Velocity, más rápido irá. Step Size es lo largo que da sus pasitos, entre menos valor, más cortos los pasos. Puedes usar estas combinaciones al crear tu skin personalizado, dependiendo si se arrastra, si salta, etc.

**Run at Startup**: Actívala para que se inicie al momento que enciendes tu PC, puedes desactivarla también cuando desees. IMPORTANTE; una vez que actives esta opción, si vuelves a mover la carpeta de Droplet Screenmate de lugar, ya no se iniciará con tu PC aunque se marque como activa... únicamente debes desactivarla y activarla nuevamente.

**About**: Licencia MIT, créditos y enlace al respositorio.

**Exit**: Cerrar la aplicación. Sin embargo, al momento de que vuelvas a abrirla nuevamente, tu configuración y skin serán mismos que antes, ya que todo se guarda en archivos Config.ini


<br>
<a href="#"><img src="docs/assets/Pixie-Cursors-Usage.gif"/></a>

<br></br>

Dando click en ![Info](docs/assets/buttons/Info.png), aparecerá una nueva ventana en la que puedes:

- **Cambiar el idioma:** En la sección inferior **Idioma**, haz clic en el icono de las flechitas para cambiar entre English, Español o Deutsch. Por último da clic en el botón de regresar para aplicar y ver los cambios.

- **Contenido de terceros:** En la parte izquierda están los nombres de cada librería, proyecto, iconos o tipografías que fueron utilizados, cliquea uno para leer su licencia y autor(a) o autores(as), además de una corta descripción. Puedes hacer clic sobre el icono de clip para ir al repositorio/sitio oficial de cada uno y cambiar de página con **Siguiente 🢖🢖** o **🢔🢔 Atrás**.

## Instalador
Para compilar el instalador es necesario [Inno Setup](https://jrsoftware.org/isinfo.php), los archivos se encuentran en la carpeta [installer src](/installer%20src). Solo debes abrir el proyecto (Installer.iss) y compilarlo, a menos que desees hacer una modificación. Al finalizar, en la misma ubicación dejará una carpeta llamada Output.

>* Por favor, toma en cuenta que primero debes compilar el código de fuente en Visual Studio para tener los binarios, de lo contrario obtendrás un [📍Compiler Error](https://github.com/genesistoxical/drop-icons/issues/3).
>* Si lo prefieres, puedes descargar la app compilada en la [página](https://genesistoxical.github.io/pixie-foders/) de Pixie Folders.

**Portable with 7zip.bat** permite comprimir en .zip rápidamente la versión portable. Únicamente funciona con [7zip](https://www.7-zip.org/).

.iss Obtiene los archivos que son necesarios dentro de su carpeta y/o la carpeta Release (debido a las rutas relativas).

## Contribuciones
* Si haces comentarios en el código, preferiblemente en Español, por favor.
* Los nombres de las variables deben estar en Inglés.
* Si abres un **Issue**, puede ser en Inglés o Español.
* **Pull request** en Inglés, en la descripción puedes agregar detalles en Inglés o Español.
  
## Configuración
El archivo `Config.ini` almacena información del lenguaje.

~~~
[Options]
Language = en
~~~

## Créditos
Pixie Cursors está basado en [PixelArtTool](https://github.com/unitycoder/PixelArtTool) bajo [MIT license](https://github.com/unitycoder/PixelArtTool/blob/master/LICENSE).

* [HandyControls](https://github.com/ghost1372/HandyControls) bajo [MIT License](https://github.com/ghost1372/HandyControls/blob/develop/LICENSE).

* [FolderBrowserEx](https://github.com/evaristocuesta/FolderBrowserEx) library bajo [MIT License](https://github.com/evaristocuesta/FolderBrowserEx/blob/master/LICENSE).

* Icons are part of [Teenyicons](https://github.com/teenyicons/teenyicons) bajo [MIT License](https://github.com/teenyicons/teenyicons/blob/master/LICENSE).

* [LazZiya.ImageResize](https://github.com/LazZiya/ImageResize) bajo [MIT License](https://github.com/LazZiya/ImageResize/blob/master/LICENSE).
<br><sub>Este paquete incluye una dependencia, lee más detalles en este [archivo](/src/PixieCursors/Docs/LazZiyaImageResize%20%2B.txt).</sup>

* [Noto Music](https://fonts.google.com/noto/specimen/Noto+Music) bajo [SIL Open Font License](/src/PixieCursors/Docs/Noto%20Music/OFL.txt).

**Puedes encontrar todas las licencias [aquí](/src/PixieCursors/Docs).*

## ¿Qué es lo nuevo?
`Versión 1.1.0` al abrir una imagen menor a 32px que no es cuadrada, ya no se ve borrosa.

`Versión 1.4.1` herramienta borrador arreglada, no funcionaba. Se ha mejorado el mensaje que se muestra al abrir una imagen cuando ya hay otra abierta.

`Versión 1.5.2` se arregló un pequeño problema al dar doble clic al Selector de Color. El mensaje para crear un nuevo archivo al abrir otra imagen se ha mejorado, ahora también se muestra cuando hay un diseño de cursor en el canvas.

En cuanto a un problema con la compatibilidad con Windows 10 (no se abre), se compilará en esa versión para arreglarlo.

`Versión 1.5.4` se solucionó el problema de que Pixie Cursors no se ejecutaba usando el instalador. Esto debido a que la ruta del archivo **Config.ini** era incorrecta cuando se intentaba obtener desde AppData.

## Licencia
**MIT License**

Copyright (c) 2025 Génesis Toxical ([read here](LICENSE)).

<br>

## Related:
`❤️ Crystal Folders` Personaliza los iconos de tus carpetas en segundos: [`Descarga`](https://genesistoxical.github.io/crystal-folders/) o [`Repositorio`](https://github.com/genesistoxical/crystal-folders).

`❤️ Custom Folder` Crea tu propia carpeta personalizada: [`genesistoxical.github.io/customfolder`](https://genesistoxical.github.io/customfolder/) o [`Repository`](https://github.com/genesistoxical/customfolder).

`❤️ Drop Icons` Utilidad para convertir imágenes a iconos (.ico) para Windows: [`Descarga`](https://genesistoxical.github.io/drop-icons/) o [`Repositorio`](https://github.com/genesistoxical/drop-icons/).

`❤️ Image to Icon` Convertir imagen a icono online: [`genesistoxical.github.io/imagetoicon`](https://genesistoxical.github.io/imagetoicon/) o [`Repositorio`](https://github.com/genesistoxical/imagetoicon).
