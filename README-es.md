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
<a href="#"><img src="assets/Droplet-Screenmate.png"/></a>

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

## Contribuciones
* Si haces comentarios en el código, preferiblemente en Español, por favor.
* Los nombres de las variables deben estar en Inglés.
* Si abres un **Issue**, puede ser en Inglés o Español.
* **Pull request** en Inglés, en la descripción puedes agregar detalles en Inglés o Español.
* Debido a la simplicidad y optimización que se requiere en esta aplicación, no se harán traducciones.
  
## Configuración
El archivo `Config.ini` almacena información del skin.

~~~
[Options]
Skin = Mushroom
~~~

El archivo `Config.ini` del skin almacena su propia configuración.

~~~
[Config]
Velocity = 0.2
Step size = 12
~~~

## Créditos
Pixie Cursors está basado en [PixelArtTool](https://github.com/unitycoder/PixelArtTool) bajo [MIT license](https://github.com/unitycoder/PixelArtTool/blob/master/LICENSE).

**Puedes encontrar todas las licencias [aquí](/src/PixieCursors/Docs).*

## Licencia
**MIT License**

Copyright (c) 2025 Génesis Toxical ([read here](LICENSE)).

<br>

## Related:
`❤️ Crystal Folders` Personaliza los iconos de tus carpetas en segundos: [`Descarga`](https://genesistoxical.github.io/crystal-folders/) o [`Repositorio`](https://github.com/genesistoxical/crystal-folders).

`❤️ Custom Folder` Crea tu propia carpeta personalizada: [`genesistoxical.github.io/customfolder`](https://genesistoxical.github.io/customfolder/) o [`Repository`](https://github.com/genesistoxical/customfolder).

`❤️ Drop Icons` Utilidad para convertir imágenes a iconos (.ico) para Windows: [`Descarga`](https://genesistoxical.github.io/drop-icons/) o [`Repositorio`](https://github.com/genesistoxical/drop-icons/).

`❤️ Image to Icon` Convertir imagen a icono online: [`genesistoxical.github.io/imagetoicon`](https://genesistoxical.github.io/imagetoicon/) o [`Repositorio`](https://github.com/genesistoxical/imagetoicon).
