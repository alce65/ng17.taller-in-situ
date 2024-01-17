# Taller de Angular 17 para React developers

## Pasos previos

- Instala y configura **Git**. Seguro que no necesitas que te lo recuerde, pero por si acaso...

Configuración GIT

```shell
  git config --global user.email sample_email@sample.con
  git config --global user.name sample_name
```

Si no habéis instalado Git diciéndole que VSCode sea su editor por defecto, para configurarlo hay que lanzar este comando:

```shell
  git config --global core.editor "code --wait"
```

Por último, es importante que configuréis esta opción del git, ya lo explicaremos en clase:

```shell
  git config --global core.autocrlf false
```

- Asegúrate de tener instalada la versión mínima requerida de **Node** (18.x.x). Actualmente la LTS es la 20.x.x y disponemos de la 21.5.x

Si aún no lo tienes, puede ser un buen momento para instalar un gestor de versiones de Node: [nvm-windows](https://github.com/coreybutler/nvm-windows)

- Seguro que **VSC** también lo tienes ya. Comprueba que incluye las siguientes extensiones específicas de Angular:

  - Angular Language Service [angular.ng-template]: prácticamente imprescindible
  - Angular Snippets (Version 16): Los snippets más actualizados, gracias al legendario John Papa 
  - Angular 10 Snippets: Otro set de snippets disponible desde hace muchas versiones

- Añade a Chrome la extensión para desarrollos en Angular  [Angular Dev Tools](https://chromewebstore.google.com/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh?pli=1)

## Angular CLI

Instalamos de forma global el [CLI de Angular](https://angular.io/cli)

```shell
  npm i -g @angular/cli
```

Al ser una instalación global, puede que necesites privilegios de administrador (sudo en caso de Linux/iOS)

Para comprobar que todo ha ido bien

```shell
  ng version
```

El resultado será espectacular

```shell
     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 17.0.6
Node: 20.10.0
Package Manager: npm 10.2.5
OS: win32 x64

Angular: 
... 

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1700.6 (cli-only)
@angular-devkit/core         17.0.6 (cli-only)
@angular-devkit/schematics   17.0.6 (cli-only)
@schematics/angular          17.0.6 (cli-only)
```

Ya tenemos el CLI, el set de herramientas (tool set) que realiza todas operaciones necesarias en nuestros proyectos de Angular
Veamos cuales son esas operaciones

```shell
  ng help
```

Nos mostrará todas las herramientas incluidas en el set

```shell
ng <command>

Commands:
  ng add <collection>            Adds support for an external library to your project.
  ng analytics                   Configures the gathering of Angular CLI usage metrics.
  ng build [project]             Compiles an Angular application or library into an output directory named dist/ at the given output path. [aliases: b]  
  ng cache                       Configure persistent disk cache and retrieve cache statistics.
  ng completion                  Set up Angular CLI autocompletion for your terminal.
  ng config [json-path] [value]  Retrieves or sets Angular configuration values in the angular.json file for the workspace.
  ng deploy [project]            Invokes the deploy builder for a specified project or for the default project in the workspace.
  ng doc <keyword>               Opens the official Angular documentation (angular.io) in a browser, and searches for a given keyword. [aliases: d]  
  ng e2e [project]               Builds and serves an Angular application, then runs end-to-end tests. [aliases: e]  
  ng extract-i18n [project]      Extracts i18n messages from source code.
  ng generate                    Generates and/or modifies files based on a schematic. [aliases: g]  
  ng lint [project]              Runs linting tools on Angular application code in a given project folder.
  ng new [name]                  Creates a new Angular workspace. [aliases: n]  
  ng run <target>                Runs an Architect target with an optional custom builder configuration defined in your project.
  ng serve [project]             Builds and serves your application, rebuilding on file changes. [aliases: s]  
  ng test [project]              Runs unit tests in a project. [aliases: t]  
  ng update [packages..]         Updates your workspace and its dependencies. See https://update.angular.io/.
  ng version                     Outputs Angular CLI version. [aliases: v]

Options:
  --help  Shows a help message for this command in the console. [boolean]

For more information, see https://angular.io/cli/.
```

## Información y práctica

La nueva web de Angular, completamente rediseñada y puesta al día para [Angular 17](https://angular.dev/)

Incluye un playground para pode probar Angular directamente en la Web

Un montón de challenges para practicar con [Angular Challenges](https://angular-challenges.vercel.app/)

## Creación de un workspace y proyecto

Por fin todo listo, así que vamos allá

Veamos la herramienta del CLI que crea un nuevo workspace (con un proyecto)

```shell
  ng new --help
```

Probemos, sin que se ejecute, el comando que nos interesa, gracias a la feature dry-run del CLI

```shell
  ng new --dry-run
```

El comando es interactivo y nos pide los datos que le faltan

```shell
  ? What name would you like to use for the new workspace and initial project? test
  ? Which stylesheet format would you like to use? SCSS   [ https://sass-lang.com/documentation/syntax#scss                ]
  ? Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? No
```

Si preferimos, podemos incluir los parámetros por línea de comandos, aprovechando para definir el prefijo que tendrán nuestros componentes

```shell
  ng new workspace_name --ssr false --style scss -p isdi --dry-run
```

El resultado, el siguiente scaffolding y la instalación de todas las dependencias necesarias desde npm

```shell
CREATE ng.17.taller/angular.json (2797 bytes)
CREATE ng.17.taller/package.json (1043 bytes)
CREATE ng.17.taller/README.md (1064 bytes)
CREATE ng.17.taller/tsconfig.json (903 bytes)
CREATE ng.17.taller/.editorconfig (274 bytes)
CREATE ng.17.taller/.gitignore (548 bytes)
CREATE ng.17.taller/tsconfig.app.json (263 bytes)
CREATE ng.17.taller/tsconfig.spec.json (273 bytes)
CREATE ng.17.taller/.vscode/extensions.json (130 bytes)
CREATE ng.17.taller/.vscode/launch.json (470 bytes)
CREATE ng.17.taller/.vscode/tasks.json (938 bytes)
CREATE ng.17.taller/src/main.ts (250 bytes)
CREATE ng.17.taller/src/favicon.ico (15086 bytes)
CREATE ng.17.taller/src/index.html (298 bytes)
CREATE ng.17.taller/src/styles.scss (80 bytes)
CREATE ng.17.taller/src/app/app.component.html (20884 bytes)
CREATE ng.17.taller/src/app/app.component.spec.ts (934 bytes)
CREATE ng.17.taller/src/app/app.component.ts (372 bytes)
CREATE ng.17.taller/src/app/app.component.scss (0 bytes)
CREATE ng.17.taller/src/app/app.config.ts (227 bytes)
CREATE ng.17.taller/src/app/app.routes.ts (77 bytes)
CREATE ng.17.taller/src/assets/.gitkeep (0 bytes)
```

Al crear el workspace con el proyecto, el CLI ya lo incorpora a un repositorio Git, con un primer commit con el mensaje 'initial commit'

## Creación de un workspace sin proyecto para luego añadírselo

Opcionalmente, también podemos crear un workspace vacío, si pensamos alojar en el más de un proyecto (aplicaciones y librerías).
En ese caso, los demás parámetros no tienen sentido, porque serán propios de cade proyecto.

```shell
  ng new workspace_name --create-application false --dry-run
```

El resultado un scaffolding básico y la instalación apenas dependencias desde npm

```shell
CREATE ng.17.taller2/angular.json (139 bytes)
CREATE ng.17.taller2/package.json (996 bytes)
CREATE ng.17.taller2/README.md (1065 bytes)
CREATE ng.17.taller2/tsconfig.json (903 bytes)
CREATE ng.17.taller2/.editorconfig (274 bytes)
CREATE ng.17.taller2/.gitignore (548 bytes)
CREATE ng.17.taller2/.vscode/extensions.json (130 bytes)
CREATE ng.17.taller2/.vscode/launch.json (470 bytes)
CREATE ng.17.taller2/.vscode/tasks.json (938 bytes)
```

De nuevo al crear el workspace, el CLI ya lo incorpora a un repositorio Git, con un primer commit con el mensaje 'initial commit'
(Si lo necesitas puedes indicar en linea de comandos el mensaje del commit)

Desde dentro de la carpeta del workspace, podemos añadir el primer proyecto, en este caso una aplicación

```shell
  cd workspace_name
  ng g app --dry-run
```

Volveríamos a tener la parte interactiva del CLI

```shell
? What name would you like to use for the application? test
? Which stylesheet format would you like to use? SCSS   [ https://sass-lang.com/documentation/syntax#scss                ]
? Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? No
```

Y de nuevo podíamos utilizar la línea de comandos para proporcionar todos los datos

```shell
 ng g app app_name --ssr false --style scss -p isdi --dry-run
```

El resultado

- el siguiente scaffolding dentro de projects
- la instalación de todas las dependencias necesarias desde npm reflejadas en el package.json del workspace
(en futuros proyectos, apenas será necesario añadir nuevas dependencias)
- la actualización del workspace con el proyecto añadido (angular.json)

```shell
CREATE projects/app_name/src/app/app.component.html (21220 bytes)
CREATE projects/app_name/src/app/app.component.spec.ts (951 bytes)
CREATE projects/app_name/src/app/app.component.ts (382 bytes)
CREATE projects/app_name/src/app/app.component.scss (0 bytes)
CREATE projects/app_name/src/main.ts (256 bytes)
CREATE projects/app_name/src/app/app.config.ts (235 bytes)
CREATE projects/app_name/src/app/app.routes.ts (80 bytes)
CREATE projects/app_name/tsconfig.app.json (285 bytes)
CREATE projects/app_name/tsconfig.spec.json (295 bytes)
CREATE projects/app_name/src/favicon.ico (15086 bytes)
CREATE projects/app_name/src/index.html (308 bytes)
CREATE projects/app_name/src/styles.scss (81 bytes)
CREATE projects/app_name/src/assets/.gitkeep (0 bytes)
UPDATE angular.json (2992 bytes)
UPDATE package.json (1044 bytes)
```

En este caso no se actualiza el repositorio: quizás sería buena idea un commit con el proyecto añadido
