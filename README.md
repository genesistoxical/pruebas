<p align="center"></p>
<p align="center"><a href="#"><img width="115px" src="docs/assets/Logo-115px.png" align="center" alt="Pixie Cursors"/></a></p>
<h1 align="center">Droplet Screenmate</h1>
<p align="center">Droplet Screenmate, a pet running on your desktop.</p>

<p align="center">
 <a href="LICENSE"><img alt="License" src="https://img.shields.io/badge/License-MIT-FD2A7A?style=flat-square&labelColor=343B45"/></a>
 <a href="https://github.com/genesistoxical/pixie-cursors/releases/latest"><img src="https://img.shields.io/github/v/release/genesistoxical/pixie-cursors.svg?color=2AB4FC&label=Release&style=flat-square&labelColor=343B45"/></a>
 <a href="#"><img alt="NET" src="https://img.shields.io/badge/.NET_Framework-4.8-FD2A7A?style=flat-square&labelColor=343B45"/></a> 
</p>

<p align="center">
<a href="README.md">English</a> :speech_balloon: <a href="README-es.md">Español</a>
</p>

## Features
* Your pet detects the taskbar and walks over it.
* You can drag and drop it anywhere else on your desktop.
* Different animations for walking, stopping, sitting, and dragging.
* Choose from 8 default skins.
* Options to change its walking speed.
* Option to start when you turn on your PC.
* You can create your own skin using the templates (PNG and editable).

## Preview
<a href="#"><img src="docs/assets/Droplet-Screenmate.png"/></a>

## Usage
All you have to do is run Droplet Screenmate.exe and you're done! Your pet will appear walking on your taskbar. Not only that, it also stops, sits, and you can even drag and drop it to change its position. In fact, it also has a special animation when you're dragging it.

Go to the icon in your system tray and right-click it:

**Options** will open the Pet Options window:

* In the _Skin_ section, just expand the dropdown menu, choose one, and click OK. That's it!

* To change how fast it walks and how long its strides are, go to the _Config_ section: the higher the Velocity value, the faster it will go. Step Size is how long its steps are; the lower the value, the shorter the steps. You can use these combinations when creating your custom skin, depending on whether it crawls, jumps, etc.

**Run at Startup**: Enable this option to launch the application when you turn on your PC. You can also disable it at any time. IMPORTANT: Once you enable this option, if you move the Droplet Screenmate folder, it will no longer launch with your PC, even if it's marked as active. You'll simply need to disable and then re-enable it.

**About**: MIT license, credits, and repository link.

**Exit**: Close the application. However, when you reopen it, your settings and skin will be the same as before, since everything is saved in Config.ini files.

<br>
<a href="#"><img src="docs/assets/Pixie-Cursors-Usage.gif"/></a>

<br></br>

By clicking on ![Info](docs/assets/buttons/Info.png), a new window will appear in which you can:

- **Change language:** In the **Language** section below, click on the little arrows icon to change between English or Español. Finally click on the return button to apply and see changes.
     
- **Third-party content:** On the left side are the names of each library, project, icons or fonts that were used, click one to read its license and author(s), as well as a short description. You can click on the clip icon to go to each repository/official site and change pages with **Next 🢖🢖** or **🢔🢔 Back**.

## Installer
To compile the installer you need [Inno Setup](https://jrsoftware.org/isinfo.php), the files are located in the [installer src](/installer%20src) folder. You just need to open the project (Installer.iss) and compile it, unless you want to make a change. When finished, it will leave a folder called Output in the same location.

>* Please note that you must first compile the source code in Visual Studio to get the binaries, otherwise you will get a [📍Compiler Error](https://github.com/genesistoxical/drop-icons/issues/3).
>* Alternatively, you can download the compiled app from the Pixie Cursors [page](https://genesistoxical.github.io/pixie-cursors/).

.iss Get the files that are needed within their folder and/or the Release folder (due to relative paths).

## Contributing
* If you make comments in the code, preferably in Spanish, please.
* Variable names must be in English.
* If you open an **Issue**, it can be in English o Spanish.
* **Pull request** in English, in the description you can add details in English or Spanish.
  
## Config
`Config.ini` file stores information about the language.

~~~
[Options]
Language = en
~~~

## Credits
Pixie Cursors is based on [PixelArtTool](https://github.com/unitycoder/PixelArtTool) under [MIT license](https://github.com/unitycoder/PixelArtTool/blob/master/LICENSE).

* [HandyControls](https://github.com/ghost1372/HandyControls) under [MIT License](https://github.com/ghost1372/HandyControls/blob/develop/LICENSE).

* [FolderBrowserEx](https://github.com/evaristocuesta/FolderBrowserEx) library under [MIT License](https://github.com/evaristocuesta/FolderBrowserEx/blob/master/LICENSE).

* Icons are part of [Teenyicons](https://github.com/teenyicons/teenyicons) under [MIT License](https://github.com/teenyicons/teenyicons/blob/master/LICENSE).

* [LazZiya.ImageResize](https://github.com/LazZiya/ImageResize) under [MIT License](https://github.com/LazZiya/ImageResize/blob/master/LICENSE).
<br><sub>This package includes a dependency, read more details in this [file](/src/PixieCursors/Docs/LazZiyaImageResize%20%2B.txt).</sup>

* [Noto Music](https://fonts.google.com/noto/specimen/Noto+Music) under [SIL Open Font License](/src/PixieCursors/Docs/Noto%20Music/OFL.txt).

*You can find all licenses [here](/src/PixieCursors/Docs).*

## What's new?
`Version 1.1.0` when opening an image smaller than 32px that is not square, it no longer looks blurry.

`Version 1.4.1` eraser tool fixed, it wasn't working. Message displayed when opening an image while another one is already open has been improved.

`Version 1.5.2` fixed a minor issue when double-clicking the ColorPicker. The message to create a new file when opening another image has been improved, now also displays when a cursor design is on the canvas.

Regarding a Windows 10 compatibility issue (it won't open), it will be compiled on that version to fix it.

`Version 1.5.4` fixed an issue where Pixie Cursors wouldn't run using the installer. This was due to the **Config.ini** file path was incorrect when attempting to get it from AppData.

## License
**MIT License**

Copyright (c) 2025 Génesis Toxical ([read here](LICENSE)).

<br>

## Related:
`❤️ Crystal Folders` Customize your folder icons in a few seconds: [`Download`](https://genesistoxical.github.io/crystal-folders/) or [`Repository`](https://github.com/genesistoxical/crystal-folders).

`❤️ Custom Folder` Create your own custom icon folder: [`genesistoxical.github.io/customfolder`](https://genesistoxical.github.io/customfolder/) or [`Repository`](https://github.com/genesistoxical/customfolder).

`❤️ Drop Icons` Utility to convert images to icons (.ico) for Windows: [`Download`](https://genesistoxical.github.io/drop-icons/) or [`Repository`](https://github.com/genesistoxical/drop-icons/).

`❤️ Image to Icon` Convert image to icon online: [`genesistoxical.github.io/imagetoicon`](https://genesistoxical.github.io/imagetoicon/) or [`Repository`](https://github.com/genesistoxical/imagetoicon).
