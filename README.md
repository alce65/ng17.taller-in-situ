# Ng17 Workshop

- [Ng17 Workshop](#ng17-workshop)
  - [Creación del proyecto](#creación-del-proyecto)
  - [Incorporación de ESLint](#incorporación-de-eslint)
  - [Primera aproximación a Angular](#primera-aproximación-a-angular)
    - [Revisión del Scaffolding resultante](#revisión-del-scaffolding-resultante)
      - [El workspace](#el-workspace)
      - [El proyecto de tipo aplicación](#el-proyecto-de-tipo-aplicación)
      - [El proceso de arranque (bootstrap) de la aplicación](#el-proceso-de-arranque-bootstrap-de-la-aplicación)
    - [Revisión de las operaciones básicas con el CLI (1): scaffolding y server](#revisión-de-las-operaciones-básicas-con-el-cli-1-scaffolding-y-server)
      - [Development server](#development-server)
      - [Code scaffolding. El componente Sample](#code-scaffolding-el-componente-sample)
    - [COMPONENTE (Review)](#componente-review)
    - [Revisión de las operaciones básicas con el CLI (2): build y test](#revisión-de-las-operaciones-básicas-con-el-cli-2-build-y-test)
      - [Build](#build)
      - [Running tests unitarios](#running-tests-unitarios)
      - [Running tests end-to-end](#running-tests-end-to-end)
      - [Further help](#further-help)
    - [Re-configuración del entorno de test](#re-configuración-del-entorno-de-test)
  - [Páginas y Routing: lazy loading en las rutas](#páginas-y-routing-lazy-loading-en-las-rutas)
    - [Creación de componentes pages](#creación-de-componentes-pages)
    - [Rutas](#rutas)
    - [Rutas lazy](#rutas-lazy)
    - [Menu: navegación sin recarga para una SPA](#menu-navegación-sin-recarga-para-una-spa)
  - [Componentes: estado y binding. Eventos. Templates y control flow. Estilos](#componentes-estado-y-binding-eventos-templates-y-control-flow-estilos)
    - [Opciones del menu como propiedad: uso de @for](#opciones-del-menu-como-propiedad-uso-de-for)
    - [Componente Contador (Counter): estado y eventos](#componente-contador-counter-estado-y-eventos)
    - [Uso condicional de clases CSS](#uso-condicional-de-clases-css)
    - [Limites en el contador: renderizado condicional](#limites-en-el-contador-renderizado-condicional)
    - [Componente saludo: two-way data binding with ngModel](#componente-saludo-two-way-data-binding-with-ngmodel)
    - [Los estilos y los componentes](#los-estilos-y-los-componentes)
  - [Challenge 1](#challenge-1)
    - [Solución de Challenge 1](#solución-de-challenge-1)
  - [Librerías, más componentes. Proyección de componentes](#librerías-más-componentes-proyección-de-componentes)
    - [Creación de una librería](#creación-de-una-librería)
    - [Componentes header y footer en la librería](#componentes-header-y-footer-en-la-librería)
    - [Componente layout: proyección de componentes](#componente-layout-proyección-de-componentes)
    - [Componente logo](#componente-logo)
    - [Proyección de más de un contenido](#proyección-de-más-de-un-contenido)
  - [Pipes](#pipes)
  - [Testing de los componentes](#testing-de-los-componentes)
    - [Test de la aplicación](#test-de-la-aplicación)
    - [Tests de la librería](#tests-de-la-librería)
    - [Test del componente Message](#test-del-componente-message)
    - [Test del componente Menu](#test-del-componente-menu)
    - [Test del componente Counter](#test-del-componente-counter)
    - [Test del componente Greeting](#test-del-componente-greeting)
  - [Challenge 2. Página TODO. Componente 'TODO List' unitario](#challenge-2-página-todo-componente-todo-list-unitario)
    - [Solución del Challenge 2](#solución-del-challenge-2)
      - [La vista (template)](#la-vista-template)
      - [La lógica del componente](#la-lógica-del-componente)
      - [Los tests](#los-tests)
  - [Comunicación entre componentes](#comunicación-entre-componentes)
    - [Inputs: paso de parámetros a los hijos](#inputs-paso-de-parámetros-a-los-hijos)
      - [Test del componente menu](#test-del-componente-menu-1)
    - [Outputs: eventos hacia el padre](#outputs-eventos-hacia-el-padre)
      - [Test del componente clicker](#test-del-componente-clicker)
      - [Test del componente click. SpyOn en Jasmine](#test-del-componente-click-spyon-en-jasmine)
      - [Challenge. Comenzando un Design system](#challenge-comenzando-un-design-system)
  - [**Arquitectura básica** (1)](#arquitectura-básica-1)
  - [Modelo controlador (contenedor) / presentadores:](#modelo-controlador-contenedor--presentadores)
  - [Challenge. Refactoring del TODO list: List / Card + Add](#challenge-refactoring-del-todo-list-list--card--add)
  - [Challenge (alternativa). Lista de notas: List / Cards + Add](#challenge-alternativa-lista-de-notas-list--cards--add)
    - [Solución: Lista de notas](#solución-lista-de-notas)
      - [Componente notesList](#componente-noteslist)
      - [Componente noteAdd](#componente-noteadd)
      - [Componente noteCard](#componente-notecard)
    - [Testing de los componentes interrelacionados](#testing-de-los-componentes-interrelacionados)
      - [Test del componente noteAdd](#test-del-componente-noteadd)
      - [Test del componente noteCard](#test-del-componente-notecard)
      - [Problemas en el orden de los test](#problemas-en-el-orden-de-los-test)
      - [Test del componente noteList](#test-del-componente-notelist)
  - [Abstracción de la lógica en servicios. Repositorio](#abstracción-de-la-lógica-en-servicios-repositorio)
    - [Nueva feature: Courses](#nueva-feature-courses)
    - [Repositorio inMemory](#repositorio-inmemory)
      - [Test del servicio y del componente que lo usa](#test-del-servicio-y-del-componente-que-lo-usa)
  - [Persistencia en el repositorio con localStore](#persistencia-en-el-repositorio-con-localstore)
    - [Creación de un servicio storage abstrayendo localStore/sessionStore](#creación-de-un-servicio-storage-abstrayendo-localstoresessionstore)
      - [Test del servicio storage](#test-del-servicio-storage)
    - [Uso del servicio en un nuevo repo: courses.local.repo](#uso-del-servicio-en-un-nuevo-repo-courseslocalrepo)
      - [Test del repo courses.local.repo](#test-del-repo-courseslocalrepo)
    - [Uso del repo courses.local.repo en el componente](#uso-del-repo-courseslocalrepo-en-el-componente)
  - [NEXT Schedule: aplicación demo](#next-schedule-aplicación-demo)
  - [Reactividad basada en RxJs. **Arquitectura básica** (2)](#reactividad-basada-en-rxjs-arquitectura-básica-2)
    - [OBSERVABLES](#observables)
    - [Nueva aplicación demo.rx](#nueva-aplicación-demorx)
    - [Challenge: Paso de elementos a la librería](#challenge-paso-de-elementos-a-la-librería)
    - [Uso de observables en el repo courses.local.repo.service](#uso-de-observables-en-el-repo-courseslocalreposervice)
      - [Ajustes de los tests al uso de observables](#ajustes-de-los-tests-al-uso-de-observables)
    - [Uso del repo basado en observables en el componente](#uso-del-repo-basado-en-observables-en-el-componente)
      - [Ajustes de los tests del componente al uso de observables](#ajustes-de-los-tests-del-componente-al-uso-de-observables)
  - [Conexiones Http con el backend](#conexiones-http-con-el-backend)
    - [Interface del repositorio](#interface-del-repositorio)
    - [El backend](#el-backend)
    - [Configuración del acceso al backend](#configuración-del-acceso-al-backend)
    - [Servicio de acceso al backend: servicio APIRepo encapsulando HttpClient](#servicio-de-acceso-al-backend-servicio-apirepo-encapsulando-httpclient)
      - [Test del servicio con HttpClient](#test-del-servicio-con-httpclient)
    - [Uso en el componente CursesList](#uso-en-el-componente-curseslist)
      - [Ajustes en los tests de componentes al usar HttpClient en sus servicios](#ajustes-en-los-tests-de-componentes-al-usar-httpclient-en-sus-servicios)
    - [Gestión de errores en el servicio](#gestión-de-errores-en-el-servicio)
      - [Test de la gestión de errores en el servicio](#test-de-la-gestión-de-errores-en-el-servicio)
    - [Uso de la gestión de errores en el componente CoursesList](#uso-de-la-gestión-de-errores-en-el-componente-courseslist)
  - [Flux: Servicio con estado para el Store. BehaviorSubject y Observables](#flux-servicio-con-estado-para-el-store-behaviorsubject-y-observables)
    - [Iniciando la feature tareas](#iniciando-la-feature-tareas)
    - [Creación de un servicio con estado](#creación-de-un-servicio-con-estado)
    - [Uso del servicio con estado en el componente lista](#uso-del-servicio-con-estado-en-el-componente-lista)
    - [Uso del servicio con estado en los componentes add y card](#uso-del-servicio-con-estado-en-los-componentes-add-y-card)
    - [Test del servicio con estado](#test-del-servicio-con-estado)
    - [Test de los componentes que utilizan el servicio](#test-de-los-componentes-que-utilizan-el-servicio)
  - [Gestión de errores centralizada. Interceptores](#gestión-de-errores-centralizada-interceptores)
    - [Test del interceptor de errores](#test-del-interceptor-de-errores)
  - [Estados basados en Signals](#estados-basados-en-signals)
    - [Concepto de signals en Angular](#concepto-de-signals-en-angular)
    - [Uso de signal en un servicio con estado](#uso-de-signal-en-un-servicio-con-estado)
  - [Formularios reactivos](#formularios-reactivos)
  - [NEXT Schedule: aplicación demo.rx](#next-schedule-aplicación-demorx)
    - [Autenticación](#autenticación)
    - [Librerías de componentes](#librerías-de-componentes)

## Creación del proyecto

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.6.

```shell
nmp -g @angular/cli
ng new ng.17.taller --create-application false
cd ng.17.taller
ng g app demo --ssr false --style scss -p isdi
```

## Incorporación de ESLint

```shell
ng add @angular-eslint/schematics
```

El resultado será el siguiente

```shell
CREATE .eslintrc.json (993 bytes)
CREATE projects/demo/.eslintrc.json (647 bytes)
UPDATE package.json (1420 bytes)
UPDATE angular.json (3255 bytes)
```

## Primera aproximación a Angular

### Revisión del Scaffolding resultante

#### El workspace

Gitignore, Editorconfig y README inicial

- ng.17.taller/.editorconfig (274 bytes)
- ng.17.taller/.gitignore (548 bytes)
- ng.17.taller/README.md (1065 bytes)

Fichero de VSC

- ng.17.taller/.vscode/extensions.json (130 bytes)
- ng.17.taller/.vscode/launch.json (470 bytes)
- ng.17.taller/.vscode/tasks.json (938 bytes)

Ficheros de configuración

- .eslintrc.json (993 bytes)
- ng.17.taller/package.json (996 bytes)
- ng.17.taller/tsconfig.json (903 bytes)
- ng.17.taller/angular.json (139 bytes)

#### El proyecto de tipo aplicación

Ficheros de configuración actualizados

- UPDATE angular.json (2992 bytes)
- UPDATE package.json (1044 bytes)

La carpeta del proyecto: Ficheros de configuración

- projects/demo/tsconfig.app.json (285 bytes)
- projects/demo/tsconfig.spec.json (295 bytes)
- projects/demo/.eslintrc.json (647 bytes)

La carpeta sources (src): Ficheros globales en la raíz del proyecto

- projects/demo/src/main.ts (256 bytes)
- projects/demo/src/favicon.ico (15086 bytes)
- projects/demo/src/index.html (308 bytes)
- projects/demo/src/styles.scss (81 bytes)

La carpeta app: configuración del bootstrap y las rutas

- projects/demo/src/app/app.config.ts (235 bytes)
- projects/demo/src/app/app.routes.ts (80 bytes)

La carpeta app: el componente principal (app)

- projects/demo/src/app/app.component.html (21220 bytes)
- projects/demo/src/app/app.component.spec.ts (951 bytes)
- projects/demo/src/app/app.component.ts (382 bytes)
- projects/demo/src/app/app.component.scss (0 bytes)

La carpeta assets preparada

- projects/demo/src/assets/.gitkeep (0 bytes)

#### El proceso de arranque (bootstrap) de la aplicación

En projects/demo/src/ están los ficheros responsables de que exista la aplicación

```schema
index.html + styles.scss
   (definido en angular.json)
          ┕━━━━━━━> main.ts
                    (bootstrap with)
                      ┝━━━━━━━>  app.config.ts
                      ┃                ┕━━━━━━━> rutas desde app.routes.ts
                      ┕━━━━━━━> app.component.ts
                                       ┝━━━━━━━━> app.component.html
                                       ┕━━━━━━━━> app.component.scss
```

### Revisión de las operaciones básicas con el CLI (1): scaffolding y server

#### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
The application will automatically reload if you change any of the source files.

Estando activo ng serve comprobamos como se refleja un cambio e.g. el valor del titulo almacenado en app.component

#### Code scaffolding. El componente Sample

Run `ng generate component component-name` to generate a new component.
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Generamos un componente sample en la carpeta components (también se generara)

```shell
ng g c components/sample --dry-run
```

Nos llevamos al nuevo componente todo el ejemplo que viene con angular:

- template HTML
- estilos, desde el HTML al fichero de estilos
- propiedades de la clase
- elementos del test

Utilizamos el nuevo componente desde app

- lo importamos
- lo consumimos en el template de app

### COMPONENTE (Review)

- Clase + decorador
- template (html + elementos de Angular)
- estilos (css, scss, sass...)

### Revisión de las operaciones básicas con el CLI (2): build y test

#### Build

Run `ng build` to build the project.
The build artifacts will be stored in the `dist/` directory.

Se crea la carpeta dist/demo/browser

favicon.ico
index.html

Los resultados de la compilación por parte de esbuild

main-FMCIX442.js | main | 191.64 kB | 52.66 kB
polyfills-RX4V3J3S.js | polyfills | 33.01 kB | 10.68 kB
styles-5INURTSO.css | styles | 0 bytes | 0 bytes

Este contenido es el que aparecerá en el server donde hagamos es despliegue de la aplicación (Vercel, Netlify...)

Podemos probarlo localmente, e.g. con LiveServer desde linea de comandos, si lo tenemos instalado global

```shell
npm list -g
npm i -g live-server
```

#### Running tests unitarios

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

El test de componente fallará hemos cambiado un valor en una propiedad sin reflejarlo en el test.
lo corregimos y observamos la estructura de los test

El test del ejemplo ya nos muestra los **dos niveles de test**

- las propiedades del componente como clase (caja blanca)
- los elementos y comportamientos del template (caja negra: orientación UX)

Cambiamos la forma de esta última orientación sustituyendo querySelector de elemento HTML
por el debugElement de testing y sus propios métodos

```ts
// const compiled = fixture.nativeElement as HTMLElement;
// const elementH1 = compiled.querySelector('h1') as HTMLHeadingElement
const debugElement = fixture.debugElement;
const elementH1 = debugElement.query(By.css("h1")).nativeElement as HTMLHeadingElement;
expect(elementH1.textContent).toContain("Hello, demo");
```

Con los cambios hechos y los test en verde, podemos hacer un **commit**

#### Running tests end-to-end

Run `ng e2e` to execute the end-to-end tests via a platform of your choice.
To use this command, you need to first add a package that implements end-to-end testing capabilities.

#### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

### Re-configuración del entorno de test

```shell
npm i -D karma-mocha-reporter
ng g config karma
```

Configuración de karma: projects/demo/karma.conf.js (1356 bytes)

```js
  plugins: [
      // ...
      require("karma-mocha-reporter"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],


    coverageReporter: {
      //...
      reporters: [{ type: "lcov" }, { type: "text" }],
    },
    reporters: ["mocha", "kjhtml"],
    //...

```

script de ejecución del test

```json
    "test": "ng test --code-coverage --browsers=ChromeHeadless",
    "test:prod": "ng test --code-coverage --no-watch --browsers=ChromeHeadless",
```

Nuestro entrono de test es ahora similar al de Jest que ya conocemos

```shell
✔ Browser application bundle generation complete.
10 01 2024 19:27:41.353:WARN [karma]: No captured browser, open http://localhost:9876/
10 01 2024 19:27:41.370:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
10 01 2024 19:27:41.370:INFO [launcher]: Launching browsers ChromeHeadless with concurrency unlimited
10 01 2024 19:27:41.380:INFO [launcher]: Starting browser ChromeHeadless
10 01 2024 19:27:42.165:INFO [Chrome Headless 120.0.6099.216 (Windows 10)]: Connected on socket 8CaGnX-85MTwA1diAAAB with id 93006915

START:
  SampleComponent
    √ should have the 'demo' title
    √ should render title
    √ should create
  AppComponent
    √ should create the app

Finished in 0.049 secs / 0.045 secs @ 19:27:43 GMT+0100 (hora estándar de Europa central)

SUMMARY:
√ 4 tests completed
-----------------------|---------|----------|---------|---------|-------------------
File                   | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------------------|---------|----------|---------|---------|-------------------
All files              |     100 |      100 |     100 |     100 |
 app                   |     100 |      100 |     100 |     100 |
  app.component.ts     |     100 |      100 |     100 |     100 |
 app/components/sample |     100 |      100 |     100 |     100 |
  sample.component.ts  |     100 |      100 |     100 |     100 |
-----------------------|---------|----------|---------|---------|-------------------
```

## Páginas y Routing: lazy loading en las rutas

### Creación de componentes pages

NO existen como tal las páginas
Podemos llamar así a los componentes invocados directamente en las rutas y usarlos como contenedores
podemos crearlos con el modo inline para el template (-t) y para los estilos (-s)

```shell
ng g c pages/home -t -s  --skip-selector
ng g c pages/about -t -s  --skip-selector
```

Modificamos nuestro componente para incluir propiedades y su interpolación en el template

```ts
@Component({
  selector: "isdi-home",
  standalone: true,
  imports: [],
  template: `<h2>{{ title }}</h2>`,
  styles: ``,
})
export class HomeComponent {
  title = "Home page";
}
```

### Rutas

En el fichero de rutas, añadimos las páginas incluyendo las re-direcciones para la url vacía o cualquier error

```ts
export const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "**", redirectTo: "home" },
];
```

Comprobamos su funcionamiento escribiendo directamente las rutas en el navegador

El componente sample lo reubicamos en la página about
Vemos que para usar un componente es necesario **importarlo en los metadata** del otro

### Rutas lazy

Cambiamos las rutas para que carguen la páginas de formaa lazy o diferida:
en el momento en el que son requeridas por primera vez

Para ello angular usa los import dinámicos soportados por el actual estándar de ES

El objeto Route disponía de la propiedad loadChildren, para referirse a los módulos en carga lazy;
en las últimas versiones se añade la propiedad **loadComponent**, con la misma funcionalidad para los componentes

Nos aseguramos de no importar los componentes de forma estática

```ts
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },

  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((c) => c.AboutComponent),
  },
  { path: '**', redirectTo: 'home' },
```

### Menu: navegación sin recarga para una SPA

Creamos un componente menu

```shell
ng g c components/menu
```

Lo incorporamos en app.component, antes del router outlet

Para poder usar directivas de routing es necesario que el componente importe de Angular
el módulo responsable de esta funcionalidad, RoutingModule

```ts
@Component({
  selector: "isdi-menu",
  standalone: true,
  imports: [RouterModule],
  templateUrl: "./menu.component.html",
  styleUrl: "./menu.component.scss",
})
export class MenuComponent {}
```

De esa forma, el template puede definir el comportamiento de los hiperenlaces como una navegación SPA

```html
<a [routerLink]="'home'" routerLinkActive="link-active">Home</a>
```

Si incluimos la clase CSS en los estilos, se aplicara automáticamente en el elemento del menu que esté activo

```scss
nav {
  ul {
    list-style: none;
    display: flex;
    li {
      display: block;
      padding: 0.2rem 0.5rem;
      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
}

.link-active {
  font-weight: 500;
  font-size: 1.1rem;
  position: relative;
  top: -2px;
  transition: font-weight 2s;
  border-bottom: 1px solid;
}
```

## Componentes: estado y binding. Eventos. Templates y control flow. Estilos

### Opciones del menu como propiedad: uso de @for

Creamos un interface con el CLI

```shell
  ng g i interfaces/menu.option
```

Definimos en el el objeto que representa una ruta (path y label)

```ts
export interface MenuOption {
  path: string;
  label: string;
}
```

Añadimos en el componente menu una propiedad con el array de opciones del menu

```ts
  options: MenuOption[] = [
    { path: 'home', label: 'Home' },
    { path: 'about', label: 'Acerca de' },
  ];
```

En el template iteramos sobre esa propiedad para construir el menu

```html
@for (option of options; track $index) {
<li><a [routerLink]="option.path" routerLinkActive="link-active">{{option.label}}</a></li>
}
```

Estamos usando una de las nuevas flow controls, que sustituyen a las directivas estructurales en Angular 17

Al mismo tiempo vemos las dos formas de incorporar expresiones de ES en los templates de Angular

- como atributos de los componentes: []
- como interpolaciones en el contenido: {{}}

### Componente Contador (Counter): estado y eventos

Creamos un componente contador y lo añadimos en la página home

```shell
  ng g c components/counter
```

- Cualquier propiedad de la clase es en si un estado: sus cambios se reflejan en la vista
- En la vista podemos definir la respuesta a los eventos con el operador ()
- En esa respuesta podemos hacer directamente cambios en el estado, que automáticamente actualizaran la vista

```html
<button type="button" (click)="counter =  counter - 1">➖</button>
<span>{{counter}}</span>
<button type="button" (click)="counter =  counter + 1">➕</button>
```

Sería mucho mejor práctica llevar la lógica a un método manejador del evento click

```ts
  updateCounter(value: number) {
    this.counter = this.counter + value;
  }
```

### Uso condicional de clases CSS

La directiva ngClass es un ejemplo de las directivas de atributo
Para usar las directivas en un componente es necesario importar en él CommonModule

NgClass se puede usar de varias maneras.
La más potente es vincularla con un objeto con la directiva en el que

- los nombres de las propiedades corresponden a clases CSS
- su valor boolean determina si se aplican o no

```html
<span [ngClass]="{'negative': counter < 0}">{{counter}}</span>
```

### Limites en el contador: renderizado condicional

Si definimos como límites -10 y 10, podemos deshabilitar el botón que ya no es valido dando al atributo disable un valor booleano.
Vemos de nuevo como el operador [] permite vincular un atributo a una expresión

```html
<button type="button" (click)="updateCounter(-1)" [disabled]="counter === -10">➖</button>
<span [ngClass]="{negative: counter < 0}">{{counter}}</span>
<button type="button" (click)="updateCounter(+1)" [disabled]="counter === 10">➕</button>
```

Pero ademas, podemos añadir información al usuario que se renderizará condicionalmente
Para ello tenemos también un nuevo flow control, @if, que viene a sustituir a la directiva estructural nf-if

```html
@if (counter === 10) {
<p class="info">has alcanzado el límite superior</p>
} @else if (counter === -10) {
<p class="info">has alcanzado el límite inferior</p>
```

### Componente saludo: two-way data binding with ngModel

Creamos un componente saludo y lo añadimos en la página home

```shell
  ng g c components/greeting
```

Añadimos un input de HTML y vemos como vincularlo a una propiedad,
de forma similar a lo que hacemos en los formularios controlados de react

```html
<input type="text" placeholder="Dime tu nombre" [value]="user" (input)="updateInput($event)" />
```

```ts
 updateInput(event: Event) {
    this.user = (event.target! as HTMLInputElement).value as string;
  }
```

El value del input se iguala a la propiedad del componente
En respuesta al evento input, se actualiza la propiedad con el valor del input

Podemos añadir un botón de borrado, que elimina el valor de la propiedad
reflejándose en el template, incluso en el valor del input

```ts
  cleanInputUser() {
    this.user = '';
  }
```

De esta forma se consigue el binding bidireccional (two-way data binding)
entre la vista (template) y el componente

Además, Angular proporciona una directiva de atributo, **ngModel**,
junto con su evento específico **ngModelChange** que permiten reescribir el código de forma mas simple

Para usarla debemos importar formsModule en nuestro componente

```html
<input type="text" placeholder="El nombre de tu mascota" [ngModel]="pet" (ngModelChange)="pet = $event" />
```

Finalmente, la referencia a la directiva y su método puede unificarse con el operador [()] con ngModel.
Así es como usaremos siempre el binding bidireccional

```html
<input type="text" placeholder="Y de donde eres" [(ngModel)]="place" />
```

### Los estilos y los componentes

El fichero de estilos src/styles define los **estilos generales**.

En el podemos colocar las variables que teníamos en el componente sample o las propiedades de main

La etiqueta main la pasamos a app.component, quitándola de sample, ya que solo puede ser usada una vez.

Como vemos, el css se sigue aplicando, ya que esta en el fichero global, no vinculado a ningún componente.

En el componente sample sigue existiendo la etiqueta **:host**, auto-referencia al propio componente

```scss
:host {
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: relative;
}
```

Para comprobar la encapsulación de los estilos, vamos al componente counter y
aplicamos el estilo al párrafo de mensaje directamente en la etiqueta p, sin usar clases

Los párrafos de otros componente no se ven afectados

Creamos un componente mensaje para incluirlo en counter y ver que pasa con el css en un componente hijo

```shell
  ng g c components/message
```

Tampoco le afecta el css del componente: los estilos están encapsulados en su componente

Podemos ver en el inspector de las developer Tools como se consigue esto aplicando los estilos
junto con atributos en forma de hash creados por Angular durante la compilación

Este comportamiento puede modificarse con el metadato **encapsulation** al que podemos asignar el valor **ViewEncapsulation.None**

## Challenge 1

Crea una página **works** con su correspondiente ruta y acceso desde el menú
Crea en ella un componente **estilos** que

- recoja un texto en un input, con un botón que permita borrarlo
- recoja los valores de color, tamaño y tipo de fuente
- muestre el texto aplicándole todos los valores recogidos

Testa a fondo el componente

Pista: usa la directiva de atributo ngStyle, similar a ngClass pero para aplicar estilos inline, sin usar clases
Ya sabes que esto no es en general una buena práctica, pero es necesario en este caso

### Solución de Challenge 1

Añadimos la página, la ruta y la opción en el array con las opciones de componente menu

```shell
ng g c pages/work -t -s --project demo
```

Creamos el componente styles y lo incorporamos a la página

```shell
ng g c components/styles --project demo
```

La entrada del texto, su display y el botón de borrar reflejan el two-wat data binding que ya conocemos

Añadimos los inputs de color y tamaño y un select para la lista de fuentes.
Es fácil encontrar como conseguir la lista con una pequeña función (no es importante)

Para crear un select/options iteramos sobre el array con @for

```html
<select [(ngModel)]="font">
  <option value=""></option>
  @for (item of availableFonts; track $index) {
  <option [value]="item">{{item}}</option>
  }
</select>
```

La presentación del texto en pantalla recibe los estilos elegidos por el usuario de forma dinámica gracias a propiedades de [style] asociadas a variables

```html
<output [style.color]="refColor.value ? refColor.value : '#000000' " [style.fontSize]="size + 'rem'" [style.fontFamily]="font ? font : 'inherit'">{{sample}}</output>
```

Las variables están asociadas a los inputs de color y tamaño y al select de fuentes a traves de ngModel con propiedades del componente o utilizando referencias locales de la vista, independientes de la lógica del componente.

```html
<input type="color" name="" id="" ngModel #color /> // referencia local <input type="number" step="0.5" min="0.5" max="5" [(ngModel)]="size" /> // propiedad del componente
```

Estas variables pueden incluso ser leídas en el componente gracias al decorador @ViewChild

```ts

export class StylesComponent implements OnInit {
  ...
  @ViewChild('refColor', { static: true }) color!: ElementRef;

  ngOnInit(): void {
    this.getFonts();
    console.log('Color:', this.color.nativeElement.value);
  }
  ... }
```

En cuanto a los test:

- comprobamos que se puede dar valor al input, que se refleja el texto y que se puede borrar
- comprobamos que se pueden asignar valores a los controles de los estilos y que estos aparecen en la vista, tal como hemos programado

El único caso novedoso es el select, que a diferencia del input, tiene asociado el evento change

```ts
it("should use the style values selected", () => {
  component.availableFonts = new Set(["Arial"]);
  fixture.detectChanges();
  const selectElement: HTMLSelectElement = debugElement.query(By.css(".styles select")).nativeElement;
  const pElement: HTMLParagraphElement = debugElement.query(By.css("p")).nativeElement;
  selectElement.value = selectElement.options[1].value;
  // También válido
  // selectElement.value = 'Arial';
  selectElement.dispatchEvent(new Event("change"));
  fixture.detectChanges();
  expect(pElement.textContent).toContain("Arial");
});
```

## Librerías, más componentes. Proyección de componentes

Los workspaces, además de aplicaciones pueden contener librerías:

- no tiene index.html, porque no se renderizan directamente
- exportan elementos (componentes, servicios...) pare ser usados en las aplicaciones
- pueden ser publicadas en npm de forma pública o privada

### Creación de una librería

Creamos la librería 'core'

```shell
ng g lib core -p isdi --dry-run
```

El resultado es

```shell
CREATE projects/core/ng-package.json (159 bytes)
CREATE projects/core/package.json (220 bytes)
CREATE projects/core/README.md (987 bytes)
CREATE projects/core/tsconfig.lib.json (328 bytes)
CREATE projects/core/tsconfig.lib.prod.json (250 bytes)
CREATE projects/core/tsconfig.spec.json (287 bytes)
CREATE projects/core/src/public-api.ts (118 bytes)
CREATE projects/core/src/lib/core.component.spec.ts (605 bytes)
CREATE projects/core/src/lib/core.component.ts (235 bytes)
CREATE projects/core/src/lib/core.service.spec.ts (363 bytes)
CREATE projects/core/src/lib/core.service.ts (142 bytes)
CREATE projects/core/.eslintrc.json (647 bytes)
UPDATE angular.json (4503 bytes)
UPDATE package.json (1611 bytes)
UPDATE tsconfig.json (971 bytes)
```

El scaffolding es más simple que el de una aplicación

Ficheros de configuración de TS

- projects/core/tsconfig.lib.json (328 bytes)
- projects/core/tsconfig.lib.prod.json (250 bytes)
- projects/core/tsconfig.spec.json (287 bytes)

Readme, .eslintrc.json, package.json y configuración propia de Angular

- projects/core/README.md (987 bytes)
- projects/core/.eslintrc.json (647 bytes)
- projects/core/package.json (220 bytes)
- projects/core/ng-package.json (159 bytes)

En la carpeta sources (src)

Ejemplos de componente y servicio

- projects/core/src/lib/core.component.spec.ts (605 bytes)
- projects/core/src/lib/core.component.ts (235 bytes)
- projects/core/src/lib/core.service.spec.ts (363 bytes)
- projects/core/src/lib/core.service.ts (142 bytes)

Definición del API de la librería, con los elementos que exporta

- projects/core/src/public-api.ts (118 bytes)

En el workspace se actualizan los ficheros

UPDATE angular.json (4503 bytes)
UPDATE package.json (1611 bytes)
UPDATE tsconfig.json (971 bytes)

El cambio en tsconfig.json supone añadir un path que mapea la nueva librería,
necesario para poder usarla desde las aplicaciones del workspace sin instalarla
siempre que la tengamos compilada (build) para que este disponible en la carpeta dist/core

Para ello es util añadir una variación al script watch de npm

```json
  "build:lib": "ng build --watch --configuration development --project core",
```

La primera vez puede dar un error Cannot find module 'ng-packagr'
que se corrige con un npm i para actualizar el paquete que no ha sido instalado correctamente

```shell
Building Angular Package

------------------------------------------------------------------------------
Building entry point 'core'
------------------------------------------------------------------------------
✔ Compiling with Angular sources in Ivy full compilation mode.
✔ Generating FESM bundles
✔ Copying assets
✔ Writing package manifest
✔ Built core

------------------------------------------------------------------------------
Built Angular Package
 - from: D:\Desarrollo\Skylab.base\trying\ng.17.taller\projects\core
 - to:   D:\Desarrollo\Skylab.base\trying\ng.17.taller\dist\core
------------------------------------------------------------------------------
```

Comprobamos que podemos importar el componente CoreComponent
desde la aplicación como desde cualquier librería instalada

```ts
import { CoreComponent} from 'core';

@Component({
  ...
  imports: [CommonModule, RouterOutlet, MenuComponent, CoreComponent],
  ...
  })
```

Una vez importado, lo consumimos por su selector, como cualquier componente

### Componentes header y footer en la librería

Añadimos los clásicos componentes header y footer en la librería.
Como en otros componentes podríamos optar por hacer inline template (-t) y estilos (-s)
o por prescindir de la carpeta para el componente (--flat)

```shell
  ng g c components/header --project core -t -s --flat --dry-run
```

En nuestro caso, los dejamos con el estilo que venimos usando en la aplicación

```shell
  ng g c components/header --project core
  ng g c components/footer --project core
```

Para poder usar los nuevos componentes los añadimos al API de la librería (public-api.ts)

En los estilos de los componentes de la librería podemos hacer referencia a variables CSS que definiremos en la aplicación.

### Componente layout: proyección de componentes

En lugar de exportar header y footer podemos crear un componente layout

```shell
  ng g c components/layout --project core
```

En el consumiremos header y footer dejando un espacio para todo el contenido que envuelva el componente

Para indicar donde se colocará el contenido utilizamos la directiva ngContent

```html
<isdi-header></isdi-header>

<ng-content></ng-content>

<isdi-footer></isdi-footer>
```

Para poder usar el nuevo componentes lo añadimos al API de la librería (public-api.ts).
Al mismo tiempo dejamos de exportar header y footer

Al consumir el componente en la aplicación es un wrapper que envuelve todo el contenido que se va a proyectar dentro de el

```html
<isdi-layout>
  <isdi-menu></isdi-menu>
  <main class="main">
    <router-outlet></router-outlet>
  </main>
</isdi-layout>
```

### Componente logo

Incorporamos en la librería un componente logo que ya nos dan hecho

Lo usamos el header, pasándole los parámetros que necesita.
Como veremos a partir de aquí, los componentes se comunican entre si

### Proyección de más de un contenido

Si queremos integrar el menu en el header a nivel de html, el layout deberá
recibir dos contenidos diferentes y colocarlos donde corresponda

Angular lo permite en base a cualquier selector válido de los contenidos

```html
<isdi-header>
  <ng-content select=".menu"></ng-content>
</isdi-header>

<ng-content select=".main"></ng-content>

<isdi-footer></isdi-footer>
```

A su vez el menu se proyecta al componente header, que tendrá definido donde renderizarlo

Una vez definido así, usamos el layout en la aplicación como wrapper de los dos elemntos que espera recibir

```html
<isdi-layout>
  <isdi-menu class="menu"></isdi-menu>
  <main class="main">
    <router-outlet></router-outlet>
  </main>
</isdi-layout>
```

Como se ve la proyección de contenido es una potente herramienta que permite la **composición de componentes**, muy utilizada por las librerías al permitir componentes envolventes preparados para manejar y renderizar el contenido que les será proporcionado en las aplicaciones

## Pipes

Son funciones transformadoras de la salida de datos que se utilizan de forma declarativa, en los templates

Existen una serie de Built-in pipes

- DatePipe: Formats a date value according to locale rules.
- UpperCasePipe: Transforms text to all upper case.
- LowerCasePipe: Transforms text to all lower case.
- CurrencyPipe: Transforms a number to a currency string, formatted according to locale rules.
- DecimalPipe: Transforms a number into a string with a decimal point, formatted according to locale rules.
- PercentPipe: Transforms a number to a percentage string, formatted according to locale rules.
- AsyncPipe: Subscribe and unsubscribe to an asynchronous source such as an observable.
- JsonPipe: Display a component object property to the screen as JSON for debugging.

Para ver el uso de DatePipe, añadimos la fecha y hora en el componente mensaje, que tendrá que importar DatePipe

Este sería el aspecto inicial:

```ui
Pagina cargada Thu Jan 11 2024 14:04:40 GMT+0100 (hora estándar de Europa central)
```

Y este cuando filtramos la salida para darle un formato

```ui
Pagina cargada  Thursday, January 11, 2024
```

Los pipes con Date, Currency, Decimal y Percent pueden recibir un parámetro que les indica la localización a usar,
que debe haber sido previamente registrada en el fichero de configuración (app.config.ts)

```ts
import localeEs from "@angular/common/locales/es";
import { registerLocaleData } from "@angular/common";

registerLocaleData(localeEs);
```

A partir de ahí, podemos indicas la localización ES en los formatos de los pipes citados

```html
<p>Pagina cargada el {{today | date: 'fullDate' : '' : 'ES' }} a las {{today | date: 'mediumTime' : '' : 'ES' }}</p>
```

Otra posibilidad es cambiar globalmente el locale que usa la aplicación, en el mismo app.config.ts

Importando el token LOCALE_ID y añadiéndolo al provider global de la aplicación con un valor 'es'

```ts
import { ApplicationConfig, LOCALE_ID } from '@angular/core';
...

export const appConfig: ApplicationConfig = {
  providers: [{ provide: LOCALE_ID, useValue: 'es' }, provideRouter(routes)],
};

```

## Testing de los componentes

### Test de la aplicación

Los errores de los test iniciales suelen deberse a als carencias del entorno de test, frente al entorno de ejecución del componente.

El error NullInjectorError indica que en el test no hay un provider del servicio, es decir no se esta importando algún modulo.
En el caso del RouterModule, lo sustituimos por el RouterTestingModule que se importa de'@angular/router/testing'.

Sin apenas más cambios este es nuestro resultado

```shell
√ 10 tests completed
-------------------------|---------|----------|---------|---------|-------------------
File                     | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-------------------------|---------|----------|---------|---------|-------------------
All files                |   89.28 |      100 |      70 |      85 |
 app                     |     100 |      100 |     100 |     100 |
  app.component.ts       |     100 |      100 |     100 |     100 |
 app/components/counter  |      75 |      100 |      50 |   66.66 |
  counter.component.ts   |      75 |      100 |      50 |   66.66 | 17
 app/components/greeting |   71.42 |      100 |   33.33 |   66.66 |
  greeting.component.ts  |   71.42 |      100 |   33.33 |   66.66 | 17-21
 app/components/menu     |     100 |      100 |     100 |     100 |
  menu.component.ts      |     100 |      100 |     100 |     100 |
 app/components/message  |     100 |      100 |     100 |     100 |
  message.component.ts   |     100 |      100 |     100 |     100 |
 app/components/sample   |     100 |      100 |     100 |     100 |
  sample.component.ts    |     100 |      100 |     100 |     100 |
 app/pages/about         |     100 |      100 |     100 |     100 |
  about.component.ts     |     100 |      100 |     100 |     100 |
 app/pages/home          |     100 |      100 |     100 |     100 |
  home.component.ts      |     100 |      100 |     100 |     100 |
-------------------------|---------|----------|---------|---------|-------------------
```

Hay que tener en cuenta que son solo los test de humo que auto-completa Angular y que,
con independencia del coverage, solo están testando que se instancian correctamente los componentes.

### Tests de la librería

En el caso de la librería, falta ajustar la configuración como hicimos en la aplicación.

```shell
ng g config karma --project core
```

Crea el fichero de configuración y lo referencia en angular.json

```shell
CREATE projects/core/karma.conf.js (1356 bytes)
UPDATE angular.json (4561 bytes)
```

Aplicamos la misma configuración de karma que a la aplicación en projects/core/karma.conf.js

```js
  plugins: [
      // ...
      require("karma-mocha-reporter"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],


    coverageReporter: {
      //...
      reporters: [{ type: "lcov" }, { type: "text" }],
    },
    reporters: ["mocha", "kjhtml"],
    //...

```

Los resultados de partida parecen aún más contundentes

```shell
√ 7 tests completed
-----------------------|---------|----------|---------|---------|-------------------
File                   | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------------------|---------|----------|---------|---------|-------------------
All files              |     100 |      100 |     100 |     100 |
 lib                   |     100 |      100 |     100 |     100 |
  core.component.ts    |     100 |      100 |     100 |     100 |
  core.service.ts      |     100 |      100 |     100 |     100 |
 lib/components/footer |     100 |      100 |     100 |     100 |
  footer.component.ts  |     100 |      100 |     100 |     100 |
 lib/components/header |     100 |      100 |     100 |     100 |
  header.component.ts  |     100 |      100 |     100 |     100 |
 lib/components/layout |     100 |      100 |     100 |     100 |
  layout.component.ts  |     100 |      100 |     100 |     100 |
 lib/components/logo   |     100 |      100 |     100 |     100 |
  logo.component.ts    |     100 |      100 |     100 |     100 |
-----------------------|---------|----------|---------|---------|-------------------
```

### Test del componente Message

Aunque ya tiene un 100% de coverage, deberíamos testar ue renderiza realmente lo esperado.

- Añadimos el debugElement a partir de la fixture
- Buscamos él con el selector de la etiqueta p
- Nos quedamos con el correspondiente nativeElement
- Comprobamos que contiene el texto esperado

```ts
it("should render a paragraph", () => {
  let pElement: HTMLParagraphElement = debugElement.query(By.css("p")).nativeElement;
  expect(pElement.textContent).toContain("Página cargada");
});
```

### Test del componente Menu

A diferencia de lo que sucede en Jest, tenemos acceso a las propiedades de la instancia.
Por ejemplo podríamos añadir una nueva opción al menu y comprobar que se renderiza

```ts
it("should render a menu item", () => {
  component.options.push({
    path: "Test",
    label: "Test",
  });
  fixture.detectChanges();
  let itemElement: HTMLLIElement = debugElement.queryAll(By.css("li"))[2].nativeElement;
  expect(itemElement.textContent).toContain("Test");
});
```

### Test del componente Counter

Como tenemos botones, debemos comprobar su funcionalidad.

El debugElement dispone para es del método triggerEventHandler() para disparar el click del botón.
Después de usarlo es importante lanzar **fixture.detectChanges()** para que la vista refleje los cambios en el componente. El proceso de detección del cambio automático en los componentes de Angular no lo es en el entorno de test, por lo que hay que ejecutar el correspondiente método de la fixture

```ts
describe("When we use the buttons", () => {
  let spanElement: HTMLSpanElement;
  let buttonDebugElements: DebugElement[];
  beforeEach(() => {
    spanElement = debugElement.query(By.css("span")).nativeElement;
    buttonDebugElements = debugElement.queryAll(By.css("button"));
  });

  it("should increase the display when the button + is clicked", () => {
    component.counter = 0;
    buttonDebugElements[1].triggerEventHandler("click");
    fixture.detectChanges();
    expect(spanElement.textContent).toBe("1");
  });

  it("should increase the display when the button + is clicked", () => {
    component.counter = 0;
    buttonDebugElements[0].triggerEventHandler("click");
    fixture.detectChanges();
    expect(spanElement.textContent).toBe("-1");
  });
});
```

### Test del componente Greeting

Las responsabilidades de este componente son

- recoger el valor que escribe el usuario
- actualizar con el el estado del componente y reflejarlo en la vista
- responder al click en el botón modificando el estado y la vista

Para tester lo primero, accedemos al input, cambiamos su valor y despachamos un evento input.
De esa forma simulamos la interacción del usuario con el input
A continuación, tras lanzar la detección de cambios, comprobamos que la vista se ha actualizado.

Como ya vimos antes, disparamos el evento click del botón con el método triggerEventHandler del debugElement
y de nuevo, tras lanzar la detección de cambios, comprobamos que la vista se ha actualizado.

```ts
it("should type a user name and see in the document", () => {
  let inputElement: HTMLInputElement = debugElement.query(By.css(".user input")).nativeElement;
  inputElement.value = "Test";
  inputElement.dispatchEvent(new Event("input"));
  fixture.detectChanges();

  let pElement: HTMLParagraphElement = debugElement.query(By.css(".user p")).nativeElement;
  expect(pElement.textContent).toBe("Hola Test");

  let buttonDebugElement = debugElement.query(By.css(".user button"));
  buttonDebugElement.triggerEventHandler("click");
  fixture.detectChanges();
  expect(pElement.textContent).toBe("Hola amigo");
});
```

## Challenge 2. Página TODO. Componente 'TODO List' unitario

Crea una lista de tareas en un solo componente
Las tareas estarán en un array en el propio componente
Se ajustaran a un modelo o entidad: id - titulo - isComplete
El id sera generado con crypto
Se podrá cambiar el estado de la tarea de completa a incompleta
Se podrá cambiar el titulo en la propia lista
Se podrán añadir y borrar tareas

Repasa el uso de

- Built-in control flow (antes directivas estructurales): @for / @if
- directivas de atributo y CSS: ngClass (y ngStyle)
- two-way data binding
- manejadores de eventos: (click) ...

### Solución del Challenge 2

Generamos el modelo de datos (entidad)

```shell
ng g i entities/task --project demo
```

Creamos el componente ToDo y lo consumimos en la página works

```shell
  ng g c components/todo --project demo
```

El componente importara FormsModules, para poder vincular el input de nueva tarea con ngModel

#### La vista (template)

En la vista (template) incluimos

- un **details** para la parte del componente que añade tareas. s
  - un input, con la estética que ya hemos utilizado, ligado con un ngModel
  - un botón con su manejador del evento click
  - un párrafo de errores, que se renderiza condicionalmente cuando hays errores

Como solo hay un input y no hemos visto aún formularios, no lo utilizamos

```html
<details #refDetails>
  <summary>Añadir tarea</summary>
  <div class="form">
    <div class="contorl">
      <label>
        <!-- Don`t remove placeholder: used by CSS implementation -->
        <input type="text" placeholder=" " [(ngModel)]="title" (focus)="addError = ''" />
        <span>Describe la tarea</span>
      </label>
    </div>
    <div class="buttons">
      <button type="button" (click)="handleAddTask()">Add</button>
    </div>
  </div>
  @if (addError) {
  <p class="info-error">{{addError}}</p>
  }
</details>
```

- una **lista** que itera sobre el array de tareas
- cada **item** de la lista tendrá
  - un checkbox con el atributo checked ligado al item.isComplete
  - un input ligado con ngModel al item.title, que
    - sera readonly hasta que pasemos a modo edición con el botón correspondiente
    - tendrá un manejador del evento blur para salvar cuando dejemos de editar
  - dos botones para editar y borrar con sus manejadores del eventoClick

```html
<ul #refLista>
  @for (item of tasks; track item.id) {
  <li [title]="item.id" [id]="item.id">
    <div class="card">
      <span><input type="checkbox" [checked]="item.isComplete" (change)="handleChangeTasks(item)" /></span>
      <input type="text" [readOnly]="!editMode[item.id]" [(ngModel)]="item.title" (blur)="handleSave(item)" />

      <!-- <span [contentEditable]="editMode">{{item.title}}</span> -->

      <span class="buttons">
        @if (!editMode[item.id]) {
        <button type="button" (click)="handleEdit(item)">Edit</button>

        }
        <button type="button" (click)="handleDeleteTask(item)">Delete</button>
      </span>
    </div>
  </li>
  }
</ul>
```

Tanto en el details como en la lista (ul) incorporamos referencias locales que permitirán desde el componente acceder a los elementos del DOM, para operaciones como colapsar el details o darle foco al input al activar su edición

#### La lógica del componente

Para obtener unos datos iniciales, creamos un fichero tasks mock, donde una función nos devuelve una promesa con un array de tareas predefinido (hardcoded) en el propio fichero.

En el ngOnInit del componente cargamos los datos, como si vinieran de un API.

Los manejadores de eventos responden a cada uno de los eventos asociados a ellos en la vista

- handleAddTask: añadir tareas
- handleChangeTasks: cambiar el estado 'completada' de una tarea
- handleEdit: poner en modo edición el titulo de una tarea
- handleSave: salir del modo edición salvando los datos
- handleDeleteTask: borrar una tarea

```ts
  handleAddTask() {
    if (!this.title) {
      this.addError = 'Invalid data';
      return;
    }
    const newTaskData: Omit<Task, 'id' | 'isComplete'> = {
      title: this.title,
    };
    this.title = '';
    this.addTask(newTaskData);
    this.refDetails.nativeElement.removeAttribute('open');
  }

  handleChangeTasks(item: Task) {
    item.isComplete = !item.isComplete;
    this.updateTask(item);
  }

  handleEdit(item: Task) {
    this.editMode[item.id] = true;
    this.refLista.nativeElement.children[
      item.id
    ].children[0].children[1].focus();
  }

  handleSave(item: Task) {
    this.editMode[item.id] = false;
    this.updateTask(item);
  }

  handleDeleteTask(item: Task) {
    this.deleteTask(item);
    delete this.editMode[item.id];
  }
```

Como previo a llevar parte de la lógica a un servicio aplicando el patrón repo,
las operaciones sobre el array se han llevado a métodos separados, invocados desde los manejadores:

- addTask
- updateTask
- deleteTask

```ts
  addTask(taskData: Omit<Task, 'id' | 'isComplete'>) {
    const task: Task = {
      id: crypto.randomUUID(),
      isComplete: false,
      ...taskData,
    };
    this.tasks = [...this.tasks, task];
  }

  updateTask(updatedItem: Task) {
    this.tasks = this.tasks.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
  }

  deleteTask(deletedItem: Task) {
    this.tasks = this.tasks.filter((item) => item.id !== deletedItem.id);
  }
```

#### Los tests

En este caso, como nuestro componente tiene mucha lógica, y esta no se ve cubierta por el test base, tenemos apenas un 30% de coverage de partida

En los test tendremos que cubrir las responsabilidades del componente:

- añadir una tares
- pasar a completa/incompleta una tarea
- modificar el texto de una tarea
- eliminar una tarea

Como las tareas iniciales ya son en cierto modo un mock, podemos dejarlas en el test.

En el beforeAll inicial, tenemos que esperar de ngOnInit termine el proceso de carga asíncrona de los datos

```ts
beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [TodoComponent],
  }).compileComponents();

  fixture = TestBed.createComponent(TodoComponent);
  component = fixture.componentInstance;
  debugElement = fixture.debugElement;
  fixture.detectChanges(); // dispara ngOnInit
  await fixture.whenStable();
  fixture.detectChanges();
});
```

El resto de los test escribe en los inputs, hace check o click y emitir los eventos correspondientes (input, change, blur) a los que hay asociados manejadores, de forma muy similar a lo que ya hemos visto

## Comunicación entre componentes

En Angular es bidireccional pero asimétrica

- hacia abajo: paso de parámetros a los hijos
- hacia arriba: envío de eventos hacia el padre

### Inputs: paso de parámetros a los hijos

Se basa en el decorador **@Input()** que incorpora una propiedad al 'interface' del componente, como si fuera un atributo html, que puede recibir valores cuando se consume el componente, ed decir en el padre.

El resultado es muy similar a las props de React

Como ejemplo, podemos refactorizar el componente menu y como lo consume app,
llevándonos la definición de las opciones del menú hasta app

El componte hijo define sus atributos

```ts
export class MenuComponent {
  @Input() options: MenuOption[] = [];
}
```

El componente padre proporciona valores a esos atributos, accediendo a ellos con el operador [], igual que a los atributos html

```ts
@Component({
  ...
})
export class AppComponent {
  menuOptions: MenuOption[] = [
    { path: 'home', label: 'Home' },
    { path: 'works', label: 'Works' },
    { path: 'about', label: 'Acerca de' },
  ];
}
```

```html
<isdi-menu class="menu" [options]="menuOptions"></isdi-menu>
```

#### Test del componente menu

En el test del componente que recibe valores en un atributo, podemos simularla asignándole un valor a la propiedad a través de la instancia del componente

```ts
component.options = [
  {
    path: "Test",
    label: "Test",
  },
];
```

### Outputs: eventos hacia el padre

Se basa en dos elementos:

- el decorador **@Output()**, peu permite dirigir eventos hacia el nivel anterior (padre)
- la clase **EventEmitter** que permite crear y emitir eventos con cualquier contenido

Para verlo, crearemos un componente clickers que contendrá varios contadores y
totalizara el número de clicks y el valor total en el conjunto de ellos,

```shell
  ng g c components/clickers --project demo
```

Sustituiremos con el nuevo componente el counter que ahora tenemos en la página home
Y tendremos 2 contadores que funciona independientemente

El componente contador, cuando cuando se hace click emitirá un evento con el valor que acumula.
Para ello dispone en el eventEmitter del método next() o su alias emit()
El primer nombre nos indica que en realidad se trata de un observable

```ts
  @Output() countEvent: EventEmitter<number>

  constructor() {
    this.countEvent = new EventEmitter()
  }

  updateCounter(value: number) {
    this.counter = this.counter + value;
    // this.countEvent.emit(value)
    this.countEvent.next(value);
  }
```

El componente clickers estará escuchando (listener) los eventos countEvent como lo haría con cualquier otro evento

```html
<isdi-counter (countEvent)="handleCounter($event)" /> <isdi-counter (countEvent)="handleCounter($event)" />
```

Y en el correspondiente manejador aplicara la lógica necesaria al caso

```ts
  handleCounter(value: number) {
    this.clicks += 1;
    this.collected += value;
  }
```

#### Test del componente clicker

Como la responsabilidad del componente es responder a los evento, podríamos testarlo de formo integrada con el componente que los emite, simulando los clicks en el componente hijo.

Otra alternativa más unitaria es acceder al debugElement del componente hijo
y emitir el evento en directamente con triggerEventHandler para en el expect comprobar la respuesta.

```ts
beforeEach(() => {
  const counterElement: DebugElement[] = debugElement.queryAll(By.css("isdi-counter"));
  counterElement[0].triggerEventHandler("countEvent", 10);
});

it("should respond to the event changing its values", () => {
  expect(component.clicks).toBe(1);
  expect(component.collected).toBe(10);
});
```

#### Test del componente click. SpyOn en Jasmine

Aunque aparentemente continúa pasando el test, no estamos testando su nueva funcionalidad de emitir eventos.
Para ello creamos un Spy de jest para el método next de la propiedad eventEmitter del componente
y comprobamos que el método ha sido llamado con el valor correspondiente en cada caso

```ts
   spyOn(component.countEvent, 'next');
   ...
   // tras el click en un botón
    expect(component.countEvent.next).toHaveBeenCalledWith(1);
    ---
    // tras el click en el otro botón
    expect(component.countEvent.next).toHaveBeenCalledWith(-1);

```

Tal como lo estamos usando, el spy es en realidad un mock (como jest.fn) sin ninguna implementación.

Para que sea realmente un spy, manteniendo la implementación original, le añadimos el método callThrough

```ts
pyOn(component.countEvent, "next").and.callThrough();
```

#### Challenge. Comenzando un Design system

Sabiendo como funciona la comunicación entre los componentes, podemos avanzar en la idea de sistema de diseño (Design system):

> una colección de componentes reutilizables y estándares claros que se pueden ensamblar para crear cualquier cantidad de aplicaciones.
> [Fanguy, Will (2019). A comprehensive guide to design systems. Invision.](https://www.invisionapp.com/inside-design/guide-to-design-systems/)

Ya hemos usado varias veces un código similar para crear inputs. Lo eficaz sería abstraer ese código a un componente independiente y usarlo cuando sea necesario,
Intenta conseguirlo

Y la misma pauta podemos aplicarla a botones, modales y demás elementos hasta ir construyendo nuestro propia sistema de diseño.

## **Arquitectura básica** (1)

- Modelo controlador/presentadores: Refactoring del TODO list: List / Cards
- Abstracción de la lógica en servicios. Repositorio
- Persistencia en el repositorio: servicio storage (localStore)

## Modelo controlador (contenedor) / presentadores:

Cualquier situación que incluye una lista con una serie de items es buena practica componentizarla,
separando la lista y el item como componentes que se pueden comunicar tal como hemos visto.

Podríamos refactorizar la lista de tareas o crear una nueva, e.g. de notas

## Challenge. Refactoring del TODO list: List / Card + Add

## Challenge (alternativa). Lista de notas: List / Cards + Add

En lugar de refactorizar la feature que ya tenemos, podemos crear una nueva con notas, de características muy similares

Las notas estarán en un array en el propio componente
Se ajustaran a un modelo o entidad: id - titulo autor - isImportant
El id sera generado con crypto
Se podrá cambiar el estado de la nota de importante a no
Se podrá cambiar el titulo y autor en re-aprovechando el formulario de añadir

### Solución: Lista de notas

Añadimos una nueva entidad
Añadimos una pagina Notes y los componentes notesList, noteCard y noteAdd

```shell
  ng g i entities/note --project demo
  ng g c pages/notes -t -s --project demo
  ng g c components/notesList --project demo
  ng g c components/noteCard --project demo
  ng g c components/noteAdd --project demo
```

La página tendrá su ruta y su opción del menú consumirá el componente notesList, que hará lo propio con noteCard y noteAdd

Definimos la nueva entidad

```ts
export interface Note {
  id: string;
  title: string;
  author: string;
  isImportant: boolean;
}
```

De nuevo creamos un mock de datos iniciales, como función que devuelve una promesa en un fichero independiente.

Podemos copiar y modificar el componente TODO retocando algunos de sus campos y su presentación.

Posteriormente podemos segregarlo en los tres componentes que necesitamos

#### Componente notesList

En él vemos como se simplifica la vista, y que se trata del componente controlador

```ts
<isdi-note-add (addEvent)="handleAddNote($event)" />

<h3>Lista de notas</h3>

<ul class="list">
  @for (item of notes; track item.id) {
  <li [title]="item.id" [id]="item.id">
    <isdi-note-card
      [item]="item"
      (updateEvent)="handleUpdateNote($event)"
      (deleteEvent)="handleDeleteNote($event)" />
  </li>
  }
</ul>
```

Sus responsabilidades son

- itera sobre el array de notas
- en cada iteración alimenta al componente **noteCard** con los datos de una nota
- define handlers específicos para los eventos de cada item (**updateEvent** y **deleteEvent**)
- consume también el componente noteAdd definiendo el manejador del evento **addEvent**

```ts
 ngOnInit(): void {
    getNotes().then((notes) => (this.notes = notes));
  }

  handleAddNote(noteData: NoteData) {
    const note: Note = {
      id: crypto.randomUUID(),
      isImportant: false,
      ...noteData,
    };
    this.notes = [...this.notes, note];
  }

  handleUpdateNote(updatedItem: Note) {
    console.log('Deleting in List');
    this.notes = this.notes.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
  }
  handleDeleteNote(deletedItem: Note) {
    this.notes = this.notes.filter((item) => item.id !== deletedItem.id);
  }
```

La lógica del componente corresponde a las operaciones sobre el array de los datos:

- leerlo inicialmente
- añadir items
- modificar items
- borrar items

Aunque no es necesario, podemos hacer estas operaciones sin mutar el array.
Más adelante podemos sacarle partido a esto ajustando la detección del cambio de Angular.

#### Componente noteAdd

La vista es un interface para recoger los datos en dos inputs.
Sería mejor que fuera un formulario, como veremos más adelante.

Su lógica se limita al handler del botón, que

- validar uno de los campos
- emitir un evento con los datos que ha recogido, que son la parte de una nota que aporta el usuario (tipo NoteData)
- limpiar el estado y por tanto la UI
- colapsar el elemento details del html

```ts
  handleAddNote() {
    if (!this.title) {
      this.addError = 'Invalid data';
      return;
    }
    const newNoteData: NoteData = {
      title: this.title,
      author: this.author,
    };
    this.title = '';
    this.author = ''
    this.refDetails.nativeElement.removeAttribute('open');
    this.addEvent.next(newNoteData);
  }
}
```

#### Componente noteCard

La vista corresponde a la presentación de los datos de una sola nota, que recibe a traves de un input desde el componente padre.

Los eventos que se gestionan en este caso son

- el marcado del checkbox
- el paso al modo edición al pulsar el correspondiente botón
- el guardado de los datos al abandonar el input tras la edición
- el click del botón de borrado

Tras posibles cambios e las propiedades del componente, tres de estos situaciones desencadenan un event para que sea procesado por el componente controlador (padre)

```ts
  handleMarkNotes() {
    this.item.isImportant = !this.item.isImportant;
    this.updateEvent.next(this.item);
  }

  handleEdit() {
    this.editMode = true;
    this.refTitle.nativeElement.focus();
  }

  handleSaveNote() {
    this.editMode = false;
    this.updateEvent.next(this.item);
  }

  handleDeleteNote() {
    this.deleteEvent.next(this.item);
  }
```

### Testing de los componentes interrelacionados

Toda esta lógica descrita en los componente esta pendiente de ser testada, de acuerdo con las responsabilidades que venimos detallando.

#### Test del componente noteAdd

En el componente **noteAdd** el arrange es muy similar a la parte añadir del componente TODO List (all-in-one): simulamos escribir los inputs y pulsar el botón

Lo que cambia es el assert, ya que ahora espiamos el eventEmitter y comprobamos que ha sido llamado

```ts
spyOn(component.addEvent, "next");
expect(component.addEvent.next).toHaveBeenCalledWith(mockNoteData);
```

#### Test del componente noteCard

En el componente **noteCard** el arrange vuelve a ser muy similar para los tres casos que testamos, y el expecte en cada caso es que se haya disparado el evento que estaremos espiando

- When the user modify a note checking it for important

```ts
spyOn(component.updateEvent, "next");
expect(component.updateEvent.next).toHaveBeenCalledOnceWith({
  isImportant: true,
} as Note);
```

- When the user modify a note writing a new title

```ts
spyOn(component.updateEvent, "next");
expect(component.updateEvent.next).toHaveBeenCalledOnceWith({
  ...mockNote,
  title: "Updated title",
} as Note);
```

- When the user click de button for delete a note

```ts
spyOn(component.deleteEvent, "next");
component.item = { ...mockNote, id: "1" };
expect(component.deleteEvent.next).toHaveBeenCalledOnceWith({
  ...mockNote,
  id: "1",
});
```

Aunque ya lo hemos visto, recordemos que tal como lo estamos usando, el spy es en realidad un mock (como jest.fn) sin ninguna implementación.

Para que sea realmente un spy, manteniendo la implementación original, le añadimos el método callThrough

```ts
pyOn(component.deleteEvent, "next").and.callThrough();
```

#### Problemas en el orden de los test

Para este caso concreto puede suceder que los test fallen aleatoriamente por el orden random en que Jasmine los ejecuta.

Puede modificarse este comportamiento en el fichero karma.conf.js

```js
 client: {
    jasmine: {
      // you can add configuration options for Jasmine here
      // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
      // for example, you can disable the random execution with `random: false`
      // or set a specific seed with `seed: 4321`
      random: false,
    },
    ...
  },
```

#### Test del componente noteList

En este caso, la funcionalidad del componente es responder a los eventos en los componentes hijos, por lo que en el test dispararemos esos eventos gracias al triggerEventHandler del debugElement, como vimos en el componente Clickers

When the component NoteAdd emit the event addEvent

```ts
component.notes = [{ id: "1" } as Note];
const addNoteElement: DebugElement = debugElement.query(By.css("isdi-note-add"));
addNoteElement.triggerEventHandler("addEvent", { id: 2 });

expect(component.notes.length).toBe(2);
```

When the component NoteCard emit the event updateEvent

```ts
component.notes = [{ id: "1" } as Note, { id: "2" } as Note];
fixture.detectChanges();
const cardNoteElement: DebugElement[] = debugElement.queryAll(By.css("isdi-note-card"));
cardNoteElement[0].triggerEventHandler("updateEvent", {
  id: "1",
  title: "Test",
} as Note);

expect(component.notes[0].title).toBe("Test");
```

When the component NoteCard emit the event deleteEvent

```ts
component.notes = [{ id: "1" } as Note];
fixture.detectChanges();
const cardNoteElement: DebugElement = debugElement.query(By.css("isdi-note-card"));
cardNoteElement.triggerEventHandler("deleteEvent", { id: "1" });

expect(component.notes.length).toBe(0);
```

## Abstracción de la lógica en servicios. Repositorio

Siguiendo con l mejora de nuestra arquitectura, el siguiente paso es abstraer del componte aquella lógica que no tiene que ver directamente con la presentación.

Como sabemos, si esa lógica tiene que ver con los datos, llevárnosla a una capa independiente es implementar el **patron repository**

Ademas, Angular proporciona un elemento especifico para lo lógica independiente de los componentes denominado **servicio**, que será proporcionado a quien lo necesite, componente u otro servicio, mediante **inyección de dependencias**, de la que se ocupan los **inyectores** del framework

Los inyectores almacenan la instancia del servicio, que obtienen del **provider**, responsable a su vez de aplicar el **patrón singleton**, de modo que existirá una sola instancia del servicio en el ámbito de su provider.

Por defecto el provider es la aplicación, por lo que la instancia de cada servicio será única en toda ella.

Los módulos, como los importados desde angular, juegan el papel de provider de sus propios servios.

### Nueva feature: Courses

Clonamos completamente la feature de Notes para disponer de una nueva para aplicarle la arquitectura que iremos viendo:

- la entity Course incluirá

```ts
export interface Curse {
  id: string;
  title: string;
  author: string;
  isComplete: boolean;
}
```

- la pagina courses, su ruta y su opción en el menú
- los componentes courses.list, curse.card, curse.add

```shell
  ng g c components/courses-list --project demo
  ng g c components/course-card --project demo
  ng g c components/course-add --project demo
```

### Repositorio inMemory

Para empezar a crear un repositorio podemos definir el interface que usará.

```shell
  ng g i interfaces/repo --project demo
```

Como inicialmente guardará los datos en memoria, devolverá siempre el array de los datos, en forma de promesa para simular los procesos asíncronos que aparecerán cuando el repositorio dependa de un API.

```ts
export interface Repo<T extends { id: string }> {
  getAll(): Promise<T[]>;
  add(newItem: Partial<T>): Promise<T[]>;
  update(id: T["id"], updatedItem: Partial<T>): Promise<T[]>;
  delete(id: T["id"]): Promise<T[]>;
}
```

El segundo paso es crear el servicio que lo implemente

```shell
  ng g s services/courses.in.memory.repo --project demo
```

El primero de sus métodos retorna el array de datos predefinidos, igual que hacíamos con las notas

```ts
const COURSES = [...]

@Injectable({
  providedIn: 'root',
})
export class CoursesInMemoryRepoService implements Repo<Curse> {

  async getAll(): Promise<Curse[]> {
    return COURSES;
  }
}
```

El servicio lo es gracias a su decorador, que define la aplicación global como su inyector

Para que se produzca la inyección de dependencias en un componente vasta tener una propiedad inicializada por un parámetro del constructor con un tipo que corresponda a un servicio, definido por el decorador @injectable

```ts
export class CoursesListComponent implements OnInit {
  constructor(private repo: CoursesInMemoryRepoService) {}

  ngOnInit(): void {
    this.repo.getAll().then((courses) => (this.courses = courses));
  }
}
```

En el repo tendremos toda la lógica de gestión de los datos del array, que antes estaba en el componente

- añadir cursos

```ts
  async add(curseData: Partial<Curse>): Promise<Curse[]> {
    const curse: Curse = {
      id: crypto.randomUUID(),
      isComplete: false,
      ...curseData,
    } as Curse;
    this.courses = [...this.courses, curse];
    return this.courses;
  }
```

- actualizar cursos

```ts
  async update(id: string, updatedItem: Partial<Curse>): Promise<Curse[]> {
    this.courses = this.courses.map((item) =>
      item.id === id ? { ...item, ...updatedItem } : item
    );
    return this.courses;
  }
```

- borrar cursos

```ts
  async delete(id: string): Promise<Curse[]> {
    this.courses = this.courses.filter((item) => item.id !== id);
    return this.courses;
  }
```

El componente que inyecta el servicio se limita a utilizarlo para mantener siempre actualizado el **estado**, que en este caso es el array con los datos de los cursos

```ts
  ngOnInit(): void {
    this.repo.getAll().then((courses) => (this.courses = courses));
  }

  handleAddCurse(curseData: CurseData) {
    this.repo.add(curseData).then((courses) => (this.courses = courses));
  }

  handleUpdateCurse(updatedItem: Curse) {
    this.repo
      .update(updatedItem.id, updatedItem)
      .then((courses) => (this.courses = courses));
  }

  handleDeleteCurse(deletedItem: Curse) {
    this.repo.delete(deletedItem.id).then((courses) => (this.courses = courses));
  }
```

Mantenemos el formato then para las promesas, en lugar de async/await por su similitud con el de los observables, que usaremos más adelante

#### Test del servicio y del componente que lo usa

La responsabilidad del componente es ahora invocar al servicio, y eso es lo que debemos testar, para lo cual tendremos que espiarlo/moquearlo

En lo que se refiere a los métodos podríamos hacerlo a traves del prototipo, y mediante callThrough dejamos que el servicio se ejecute realmente, es decir ,o espiamos pero no lo moqueamos.

Como todos los métodos del servicio son asíncronos, es necesario que el test lo sea y que ejecutemos fixture.whenStable(), similar al act que utilizamos en Jest.

```ts
spyOn(CoursesInMemoryRepoService.prototype, "add").and.callThrough();

await fixture.whenStable();
expect(CoursesInMemoryRepoService.prototype.add).toHaveBeenCalled();
expect(component.courses.length).toBe(2);
```

Una alternativa más integrada en Angular es convertir a nuestro entorno del test en el provider del servicio cuando se instancia el componente que estamos testando

```ts
  let service: CoursesInMemoryRepoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesListComponent],
      providers: [CoursesInMemoryRepoService],
    }).compileComponents();
    ...
    service = TestBed.inject(CoursesInMemoryRepoService);
    service.courses = [{ id: '1' } as Curse];
    fixture.detectChanges();
  });
```

De esta forma además conseguimos acceso no solo a los métodos del servicio, también a sus propiedades, que no están en el prototipo. Con ello podemos incluso ajustarlas para cada test

En consecuencia, espiamos directamente la propiedad service, correspondiente a la instancia del servicio que se inyectará en el componente

```ts
service.courses = [{ id: "1" } as Curse, { id: "2" } as Curse];
fixture.detectChanges();
spyOn(service, "update").and.callThrough();

await fixture.whenStable();
expect(service.update).toHaveBeenCalled();
expect(component.courses[0].title).toBe("Test");
```

En este caso, como el servicio solo almacena datos en memoria, no lo hemos moqueado, sino espiado, por lo queda testado al testar el componente que lo usa

## Persistencia en el repositorio con localStore

Para dar una persistencia inicial a nuestra aplicación vamos a usar localStorage.

### Creación de un servicio storage abstrayendo localStore/sessionStore

En lugar de utilizarlo directamente en el repo, lo encapsularemos en un servicio independiente.

```shell
  ng g s services/storage --project demo
```

La principal novedad de este servicio es que si queremos que sea abstracto, necesitamos pasarle parámetros para indicarle

- el nombre del store
- si queremos que utilice localStore o sessionStore

Par ello los definimos en el constructor con el decorador @Inject() que le indica que los recibirá durante la inyección de dependencia

```ts
  constructor(
    @Inject('storeName') private storeName: string,
    @Inject('storeType') @Optional() private storeType?: string
  ) {
    this.storeType = storeType || 'local';
    this.storage = this.storeType === 'local' ? localStorage : sessionStorage;
  }
```

El resto del servicio se limita a encapsular los métodos de local/sessionStore recibiendo o devolviendo los datos de acuerdo con el tipo asignado en forma de genérico.

```ts
export class StorageService<T> {
  private storage: Storage;
  ...

  get() {
    const initialData = this.storage.getItem(this.storeName);
    if (!initialData) return null;
    return JSON.parse(initialData) as T;
  }

  set(data: T) {
    const finalData = JSON.stringify(data);
    this.storage.setItem(this.storeName, finalData);
  }

  remove() {
    this.storage.removeItem(this.storeName);
  }
}
```

#### Test del servicio storage

Para testar un servicio que recibe parametros necesitamos inyectarle valores en dichos parámetros.

Podemos hacerlo gracias al inyector del entorno de testing TestBed.inject()

Los inyectores de Angular reciben desde el Provider un token que puede corresponder a distintas formas de crear el objeto que van a inyectar

- una clase que se instanciará [useClass - this option tells Angular DI to instantiate a provided class when a dependency is injected]
- un token ya existente [useExisting - allows you to alias a token and reference any existing one.]
- un factoría que devuelve la instancia [useFactory - allows you to define a function that constructs a dependency.]
- una constante [useValue - provides a static value that should be used as a dependency.]

En este caso usaremos un Token de tipo Factory, que nos permite ser nosotros lo que instanciamos la clase y así pasarle al constructor los parámetros adecuados.

```ts
  type Test = [];
  const storeName = 'Tasks';

  const STORAGE_TOKEN = new InjectionToken<StorageService<Test>>(
    'Storage Service',
    {
      providedIn: 'root',
      factory: () => new StorageService<Test>(storeName),
    }
  );

  let service: StorageService<Test>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(STORAGE_TOKEN);
  });
  ...
```

Los test en si son muy simples: ejecutan cada uno de los métodos del servicio habiendo moqueado localStore y en el assert se comprueba que recogen y procesan la respuesta del mock

- para el método get, con o sin datas en el store

```ts
spyOn(window.localStorage, "getItem");
service.get();
expect(window.localStorage.getItem).toHaveBeenCalled();

spyOn(window.localStorage, "getItem").and.returnValue("[]");
const result = service.get();
expect(result).toEqual([]);
```

- para el método set

```ts
spyOn(window.localStorage, "setItem");
service.set([]);
expect(window.localStorage.setItem).toHaveBeenCalled();
```

- para el método remove

```ts
spyOn(window.localStorage, "removeItem");
service.remove();
expect(window.localStorage.removeItem).toHaveBeenCalled();
```

### Uso del servicio en un nuevo repo: courses.local.repo

Creamos un nuevo servicio courses.local.repo que implementará el mismo interface que el anterior

```shell
  ng g s services/courses.local.repo --project demo
```

Inyectamos el servicio StorageService concretando su tipo como Course[] y pasándole los parámetros que necesita

Para ello unamos un token de tipo factory como el que vimos en el test del componente

```ts
const storeName = 'Courses';
const STORAGE_TOKEN = new InjectionToken<StorageService<Course[]>>(
  'Storage Service',
  {
    providedIn: 'root',
    factory: () => new StorageService<Course[]>(storeName),
  }

  export class CoursesLocalRepoService implements Repo<Course> {
    courses: Course[];

    constructor(@Inject(STORAGE_TOKEN) private ls: StorageService<Course[]>) {
      this.courses = this.ls.get() || COURSES;
    }
    ...
  }
);

```

#### Test del repo courses.local.repo

El servicio se incorpora al test en el injector del TestBed, tal como nos proporciona el CLI.

En el encontraremos inyectado el servicio StorageService que podemos moquear fácilmente a traves de su prototipo; con spyOn(...).and.returnValue(...) definiremos el comportamiento del mock cuando necesitemos que devuelva algún valor, adecuándolo a cada uno de los cuatro métodos que tenemos que testar

- getAll()

```ts
spyOn(StorageService.prototype, "get").and.returnValue([]);
const result = await service.getAll();
expect(StorageService.prototype.get).toHaveBeenCalled();
expect(result).toEqual([]);
```

- add()

```ts
spyOn(StorageService.prototype, "get").and.returnValue([]);
spyOn(StorageService.prototype, "set");
const result = await service.add({ id: "1" });
expect(StorageService.prototype.get).toHaveBeenCalled();
expect(StorageService.prototype.set).toHaveBeenCalled();
expect(result).toEqual([{ id: "1", isComplete: false } as Course]);
```

- update()

```ts
spyOn(StorageService.prototype, "get").and.returnValue([
  { id: "1", isComplete: false },
  { id: "2", isComplete: false },
]);
const result = await service.update("1", { id: "1", isComplete: true });
expect(StorageService.prototype.get).toHaveBeenCalled();
expect(StorageService.prototype.set).toHaveBeenCalled();
expect(result).toEqual([{ id: "1", isComplete: true } as Course, { id: "2", isComplete: false } as Course]);
```

- delete()

```ts
spyOn(StorageService.prototype, "get").and.returnValue([{ id: "1", isComplete: false }]);
spyOn(StorageService.prototype, "set");
const result = await service.delete("1");
expect(StorageService.prototype.get).toHaveBeenCalled();
expect(StorageService.prototype.set).toHaveBeenCalled();
expect(result).toEqual([]);
```

### Uso del repo courses.local.repo en el componente

El componente CoursesList ya utiliza el repo CoursesInMemoryRepoService
Como el nuevo repo CoursesLocalRepoService utiliza el mismo interface, basta inyectarlo en lugar del anterior para que la aplicación lo utilice y tenga persistencia local.

No es necesario ningún otro ajuste a nivel de los componentes, que son totalmente agnósticos a la capa repositorio, siempre que se respete el interface

Tan solo es necesario algunos ajustes de los test, y añadir los del repo CoursesInMemoryRepoService que antes estaba testado indirectamente y ahora deja de estarlo al no ser usado por ningún componente.

Es un test similar al del otro repo pero mas sencillo.
Le damos valor directamente a la propiedad courses del servicio y comprobamos coo se modifica cuando invocamos los distintos métodos

- getAll()

```ts
service.courses = [];
const result = await service.getAll();
expect(result).toEqual([]);
```

- add()

```ts
service.courses = [];
const result = await service.add({ id: "1" });
expect(result).toEqual([{ id: "1", isComplete: false } as Course]);
```

- update()

```ts
service.courses = [{ id: "1", isComplete: false } as Course, { id: "2", isComplete: false } as Course];
const result = await service.update("1", { id: "1", isComplete: true });
expect(result).toEqual([{ id: "1", isComplete: true } as Course, { id: "2", isComplete: false } as Course]);
```

- delete()

```ts
service.courses = [{ id: "1", isComplete: false } as Course];
const result = await service.delete("1");
expect(result).toEqual([]);
```

## NEXT Schedule: aplicación demo

- Componente añadir: formularios no reactivos. Validación
- Test de los formularios
- Componentización del ejemplo inicial de Angular
- Sistema de diseño: componentes reutilizables. Input. Modal

## Reactividad basada en RxJs. **Arquitectura básica** (2)

[RxJs](https://rxjs.dev/) es la librería reactiva más importante en JS, proporcionado un tipo de dato conocido como Observables, junto varias extensiones suyas y multitud de operadores para manejarlos.

> RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code. This project is a rewrite of Reactive-Extensions/RxJS with better performance, better modularity, better debuggable call stacks, while staying mostly backwards compatible, with some breaking changes that reduce the API surface.
> [RxJs](https://rxjs.dev/)

Recientemente liberada su versión 7, se incorpora en Angular 17 como dependencia "rxjs": "~7.8.0".

Proporciona al framework entre otras cosas

- la clase **EventEmitter** como extensión indirecta de la clase Observable, que ya hemos visto
- el sustrato de los **formularios reactivos**
- el servicio **HttpClient** que encapsula las conexiones Http, sustituyendo a fetch
- los medios necesarios, basados en clases que extienden de Observables, como **BehaviorSubject**, para la implementación de una gestión de estados que puede utilizar el patrón **Flux**

Para poder trabajar en todo ello, y también para aprovechar las características del workspace de Angular, vamos a añadirle una segunda aplicación

### OBSERVABLES

Los observables son la representación de un flujo de datos (stream) al que podemos suscribirnos.
De esa forma cuando el flujo cambia, nuestra suscripción reacciona.

En la práctica es similar al then de las promesas, con una diferencia clave

- una promesa solo se resuelve una vez, fulfilled o rejected, mientras que
- un observable puede emitir un número indeterminado de datos y errores

En la práctica los Observables ligados al protocolo Http solo emiten una vez,
pero eso es propio del protocolo, no de los observables

En consecuencia, al suscribirnos a un observable le proporcionamos la callback que se ejecutara ante cada dato

```ts
observable.subscribe((data) => console.log(data));
```

Si necesitamos pasarle más callback lo haremos en forma de objeto

```ts
observable.subscribe({
  next: (data) => console.log(data),
  error: (error: Error) => console.error(error.message),
  complete: () => {}, // make anyway
});
```

### Nueva aplicación demo.rx

```shell
  ng g app demo-rx --ssr false --style scss -p isdi --dry-run
```

Nos crea el mismo scaffolding inicial de antes y actualiza angular.json.
Nos incluye el ESLint, que esta instalado a nivel del workspace.
NO incluye la configuración de testing (karma) por tanto se la añadimos

```shell
ng g config karma --project demo-rx
```

Se crea projects/demo-rx/karma.conf.js y se actualiza angular.json
Sobre-escribimos el fichero **karma.conf.js** con el de la aplicación anterior
CorrSustituimos en el fichero la referencia a demo por demo-rx

Probamos que compila y que ejecuta los tests

```shell
  ng serve --project demo-rx
  npm test -- --project demo-rx
```

- Eliminamos el ejemplo de react
- Creamos en src/app las carpetas
  - components
  - entities
  - interfaces
  - pages
  - services

```shell
  mkdir projects\demo-rx\src\app\components
  mkdir projects\demo-rx\src\app\entities
  mkdir projects\demo-rx\src\app\interfaces
  mkdir projects\demo-rx\src\app\pages
  mkdir projects\demo-rx\src\app\services
```

- Copiamos desde demo

  - el componente menu
  - la entity courses
  - los interfaces menu.options y repo
  - las páginas home y curses
  - los componentes course-\* [list, card, add]
  - los servicios storage.service y courses.local.repo.service, incluyendo mock.data

- Corregimos el contenido de
  - el componente app, dejando dos opciones para el menu
  - los ficheros de configuración y rutas
  - el componente home, que vaciamos
  - los estilos generales

Comprobamos de nuevo

- la compilación
- los test
- la funcionalidad de la página de Cursos

### Challenge: Paso de elementos a la librería

Como hemos visto, la ventaja de una librería es que no hemos tenido que duplicar el componente layout y los que lo acompañan para usarlos en una segunda aplicación

Podríamos trasladar a la librería algún elemento más:

- el componente menu
- el interface menu.options
- el servicio storage.service

El componente menu podría integrarse en el layout como contenido.
El layout recibiría como input las opciones del menu y se las pasaría al componente menú

Prueba a añadir estos cambios y refléjalos en las dos aplicaciones

### Uso de observables en el repo courses.local.repo.service

Dado que tenemos un repo al que hemos añadido el uso de promesas solo para probarlo, podemos sustituirlo por el uso de observables

Modificamos en interface repo

```ts
import { Observable } from "rxjs";

export interface Repo<T extends { id: string }> {
  getAll(): Observable<T[]>;
  add(newItem: Partial<T>): Observable<T[]>;
  update(id: T["id"], updatedItem: Partial<T>): Observable<T[]>;
  delete(id: T["id"]): Observable<T[]>;
}
```

Modificamos el servicio para que se ajuste al interface

En el método getAll, el operador of de RxJs nos permitirá crear un observable a partir de un array

```ts
  getAll(): Observable<Course[]> {
    let courses = this.ls.get();
    if (!courses) {
      courses = COURSES;
      this.ls.set(courses);
    }
    return of(courses);
  }
```

Los otros métodos ya reciben un observable al llamar a getAll.
Lo que harán sera modificar el contenido de ese observable antes de retornarlo
Para ello, RxJs proporciona el método pipe, que permite invocar operadores RxJs que actúan sobre el contenido del observable
En este caso el operador sera map (de RsJs), similar al map de los arrays:
recibe el contenido de un observable y lo devuelve modificado de la forma que necesitemos

```ts
  add(courseData: Partial<Course>): Observable<Course[]> {
    const course: Course = {
      id: crypto.randomUUID(),
      isComplete: false,
      ...courseData,
    } as Course;
    return this.getAll().pipe(
      map((courses) => {
        courses = [...courses, course];
        this.ls.set(courses);
        return courses;
      })
    );
  }
```

#### Ajustes de los tests al uso de observables

Al tener observables en vez de promesas, debemos cambiar los tests correspondientes, en los que ya no tendrá sentido el async/await.
En su lugar, tendremos que suscribirnos al observable

```ts
beforeEach(() => {
  spyOn(StorageService.prototype, "get").and.returnValue([]);

  service.getAll().subscribe((result) => {
    expect(StorageService.prototype.get).toHaveBeenCalled();
    expect(result).toEqual([]);
  });
});
```

### Uso del repo basado en observables en el componente

El componente CoursesList ya no recibe promesas, sino observables.

Como lo escribimos sin usar async/await, basta sustituir el then de las promesas por la suscripción al obserbable.

Hay que recordar una **importante** diferencia: los observables sole se ejecutan si alguien se suscribe a ellos.

```ts
  ngOnInit(): void {
    this.repo.getAll().subscribe((courses) => (this.courses = courses));
  }

  handleAddCourse(courseData: CourseData) {
    this.repo.add(courseData).subscribe((courses) => (this.courses = courses));
  }

  handleUpdateCourse(updatedItem: Course) {
    this.repo
      .update(updatedItem.id, updatedItem)
      .subscribe((courses) => (this.courses = courses));
  }

  handleDeleteCourse(deletedItem: Course) {
    this.repo
      .delete(deletedItem.id)
      .subscribe((courses) => (this.courses = courses));
  }
```

#### Ajustes de los tests del componente al uso de observables

De nuevo tenemos que ajustar los tests al nuevo funcionamiento del observable.
Donde antes moqueábamos el servicio con un and.resolveTo,
ahora retornaremos un observable, utilizando el operador of que ya conocemos

```ts
spyOn(service, "getAll").and.returnValue(of([{ id: "1" } as Course]));
```

## Conexiones Http con el backend

### Interface del repositorio

Al crear el interface del repositorio podríamos optar por dos opciones:

- un nuevo interface que se adapte al funcionamiento habitual del backend (e.g. basado en JSONServer)

  - los métodos add y update devuelven el item creado/actualizado como observable
  - el método delete devuelve un observable void

```ts
import { Observable } from "rxjs";

export interface Repo<T extends { id: string }> {
  getAll(): Observable<T[]>;
  add(newItem: Partial<T>): Observable<T>;
  update(id: T["id"], updatedItem: Partial<T>): Observable<T>;
  delete(id: T["id"]): Observable<void>;
}
```

- mantenemos el interface que tenemos

  - todos los métodos devuelven los datos completos (un array de T)

```ts
import { Observable } from "rxjs";

export interface Repo<T extends { id: string }> {
  getAll(): Observable<T[]>;
  add(newItem: Partial<T>): Observable<T[]>;
  update(id: T["id"], updatedItem: Partial<T>): Observable<T[]>;
  delete(id: T["id"]): Observable<T[]>;
}
```

Si el backend se comporta así, esto significa que el backend enviará muchos más datos.
La ventaja será que en cada operación estaremos actualizándonos a los posibles cambios que hayan producido otros clientes.

Si nuestro backend no se comporta así, será responsabilizad del repo que los datos se ajusten al interface.
Podrá añadir peticiones getAll o construir los datos finales a partir de los que tiene
En este segundo caso, el repo procesa los datos que le llegan antes de devolverlos

Vamos a aplicar este último planteamiento.

### El backend

Vamos a simular un backend con json-server.

Por si no lo tenemos instalado globalmente, lo añadimos a nuestro workspace

```shell
  npm i json-server
```

Añadimos la carpeta server, donde querremos los datos de nuestro fake-server

```shell
  mkdir server
```

Creamos un script en el package json, sin el modificador --watch, que a pasado a estar por defecto

```json
 "server": "json-server -p 3030 server/db.json"
```

Si no crea el fichero db.json lo creamos a mano y en cualquier caso añadimos la propiedad courses con el array de ejemplos que teníamos en services/mock.data.ts

En un nuevo terminal ejecutamos el script de npm

```shell
  npm run server
```

### Configuración del acceso al backend

Vamos a definirlo en una variable de entorno.

Angular proporciona un sistema para hacerlo, pero no lo instala por defecto: debemos añadirlo en nuestra aplicación

```shell
  ng g environments --project demo-rx
```

El resultado será

```shell
CREATE projects/demo-rx/src/environments/environment.ts (31 bytes)
CREATE projects/demo-rx/src/environments/environment.development.ts (31 bytes)
UPDATE angular.json (7968 bytes)
```

El fichero environment.development.ts sera al que accederemos desde nuestro código
Al fichero environment.ts accederá angular directamente cuando este en modo producción

De esta forma podemos definir variables con diferentes valores en función del entorno

En ambos crearemos la variable baseUrl con un valor 'http://localhost:3030/'

Una vez hecho un commit podemos excluir de git futuros cambios del fichero db.json para no estar actualizando el repo con los cambios en el fake.backend

```ts
  git update-index --assume-unchanged server/db.json
```

### Servicio de acceso al backend: servicio APIRepo encapsulando HttpClient

Angular proporciona un servicio responsable de las conexiones Http, denominado **httpClient**, que puede comportarse como una encapsulación de fetch

No sería buena practica usarlo directamente en un componente, sino que se debe encapsular en un servicio propio, en este caso un repositorio

```shell
  ng g s services/courses.api.repo --project demo-rx
```

Para usar el servicio HttpClient es necesario considerar el provider que lo proporcionará: **'@angular/common/http/provideHttpClient'**;
Tendremos que añadirlo en el fichero de configuración app.config.ts
pudiendo pasarle el parámetro withFetch para que encapsule **fetch** en lugar del original httpXmlRequest

```ts
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [..., provideHttpClient(withFetch())],
};
```

Ahora ya podemos inyectarlo en nuestro servicio

```ts
export class CoursesApiRepoService implements Repo<Course> {
  constructor(private http: HttpClient) {}
}
```

Finalmente tendremos que implementar sus métodos de acuerdo con el interface

.... implementación

#### Test del servicio con HttpClient

Para los test del servicio que encapsula httpClient, Angular proporciona una serie de herramientas
que importaremos desde **'@angular/common/http/testing'**

- HttpClientTestingModule
- HttpTestingController
- TestRequest

El módulo HttpClientTestingModule se importa en el test para que funcione como provider

```ts
TestBed.configureTestingModule({
  imports: [HttpClientTestingModule],
});
```

El controller es la instancia de HttpTestingController que hará de mock de fetch para crear la request http

```ts
 let controller: HttpTestingController;
 ...
 controller = TestBed.inject(HttpTestingController)
```

Además definiremos una constante con la url que esperaríamos que usara nuestro servicio

```ts
  const expectedUrl = environment.<serverUrl> + '/courses';
```

En el test de un método que use httpClient

- nos suscribimos al método, incluyendo los asserts en la suscripción

- creamos la request http simulada

```ts
const testRequest: TestRequest = controller.expectOne(expectedUrl);
expect(testRequest.request.method).toEqual("GET");
```

- lanzamos la request definiendo la response moqueada que queremos que le llegue a la suscripción

```ts
testRequest.flush([]);
```

### Uso en el componente CursesList

Sustituimos el repositorio utilizado en el componente CourseList.
De nuevo, como el interface es el mismo, la sustitución no exige ningún otro cambio en la aplicación.

#### Ajustes en los tests de componentes al usar HttpClient en sus servicios

En el componente **CoursesList** y en la página que lo consume, **Course**, tiene que haber un provider del servicio nativo HttpClient,
para que no de un error NullInjector al haber intentado el inyector conseguir una instancia del servicio para poder inyectarlo.

Lo indicaremos el los entornos de sus tests

```ts
  await TestBed.configureTestingModule({
    ...
    providers: [provideHttpClient()],
  }).compileComponents();
```

En Course además moquearemos el método getAll, para evitar que el componente CoursesList, al llamar a getAll en el OnInit use el servicio HttpCliente real

```ts
service = TestBed.inject(CoursesApiRepoService);
spyOn(service, "getAll").and.returnValue(of([]));
```

Además habrá que hacer ajustes en los tests de CoursesList

- sustituyendo la inyección del local.repo por el api.repo
- sustituyendo los espías del repo por mocks que impidan llamada el servicio HttpCliente real.

```ts
  beforeEach(async () => {
    ...
    service = TestBed.inject(CoursesApiRepoService);
    // Moqueamos la respuesta al ngOnInit
    spyOn(service, 'getAll').and.returnValue(of([{ id: '1' } as Course]));
    ...
  });
```

Por ejemplo en el método add

```ts
spyOn(service, "add").and.returnValue(of([{ id: "2" } as unknown as Course]));
const addCourseElement: DebugElement = debugElement.query(By.css("isdi-course-add"));
addCourseElement.triggerEventHandler("addEvent", "any value");

expect(service.add).toHaveBeenCalled();
expect(component.courses).toEqual([{ id: "2" } as Course]);
```

### Gestión de errores en el servicio

En el moment en que dependemos de una conexión http tenemos que gestionar dos posibles situaciones de error, que ya son contempladas por el servicio http:

- los problemas en el lado del cliente, como un error de red que impide que la solicitud se complete correctamente o una excepción lanzada en un operador RxJS.
  Estos errores tienen un status establecido en 0 y una propiedad error que contiene un objeto ProgressEvent, cuyo type podría proporcionar más información.
- las respuestas del servidor backend cuando rechaza la solicitud con un código de estado 4xx / 5xx. Estas son respuestas de error (**error responses**).

En cualquiera de los casos, los errors pueden ser capturados en un pipe del observable, con el operador RxJx catchError
Éste tendrá como parámetro el callback definido como manejador de los errores (error handler).

```ts
  .pipe(
    catchError((errorResponse: HttpErrorResponse) => {
      let errorMessage: string;
      if (errorResponse.status === 0) {
        // A client-side or network error occurred. Handle it accordingly.
        // errorResponse.error contiene la información del error
        errorMessage = `Se ha producido un error interno ${errorResponse.error}`;
        console.error(errorMessage);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        errorMessage = `El Backend ha devuelto un código ${errorResponse.status} con el mensaje ${errorResponse.error}`;
        console.error(errorMessage);
      }
      // Return an observable with a user-facing error message.
      return throwError(() => new Error(errorMessage));
    })
  )
```

El objeto de este handler es crear un mensaje de error coherente de cara al usuario,
Al final el operador throwError reenvía el error como parte del observable
De esa forma los componentes que se suscriban podrán recuperar el error
para incorporarlo el feedback al usuario que tengan previsto.

En lugar de mantener el callback anónimo como se ve, lo convertiremos en un método privado
que usaremos en todas las operaciones de nuestro servicio de cara al backend

```ts
  .pipe(catchError(this.handleError))
```

#### Test de la gestión de errores en el servicio

En el test del servicio, habrá que incluir al menos un caso que involucre el handler de errores

```ts
service.getAll().subscribe({
  error: (error) => expect(error.message).toContain("Fetch error"),
});

const testRequest: TestRequest = controller.expectOne(expectedUrl);
expect(testRequest.request.method).toEqual("GET");

testRequest.error("Fetch error" as unknown as ProgressEvent);
testRequest.flush("Error test", {
  status: 400,
  statusText: "Bad Request",
});
```

testRequest puede hacer flush con un código de error 400 o lanzar un error,
simulando así las dos posibles situaciones de error que hemos descrito

En ambos casos, al suscribirnos al observable definimos la función a ejecutar en caso de error
En ella nuestro assert comprobara el mensaje del error capturado

### Uso de la gestión de errores en el componente CoursesList

Todos los métodos del componente al suscribirse al servicio, deben definir también el método que gestionará los errores.
Una opción es disponer de un objeto que almacene los posibles mensajes de error de los métodos

```ts
type ServiceErrors = {
  load?: string;
  add?: string;
  update?: string;
  delete?: string;
};

export class CoursesListComponent implements OnInit {
  ...
  errors: ServiceErrors = {};

ngOnInit(): void {
    this.repo.getAll().subscribe({
      next: ...,
      error: (error: Error) => (this.errors.load = error.message),
    });
  }
}
```

En la vista podemos hacer rendering condicional en base a los mensajes de error
o definir la forma que consideremos para der feedback al usuario

```html
@if (errors.load) {

<div class="error-info">
  <p>No se puede acceder al servidor</p>
  <p>{{errors.load}}</p>
</div>

} @else {

<ul class="list">
  ...
</ul>

}
```

Como consecuencia tenemos que completar los test con los cuatro casos en que pueden aparecer errorres

- la carga de datos

```ts
(service.getAll as jasmine.Spy).and.returnValue(throwError(() => new Error("Load Courses Error")));
component.ngOnInit();

expect(component.errors.load).toEqual("Load Courses Error");
```

- los eventos emitidos desde los componentes hijos: addEvent, updateEvent y deleteEvent

```ts
spyOn(service, "add").and.returnValue(throwError(() => new Error("Add Course Error")));
const addCourseElement: DebugElement = debugElement.query(By.css("isdi-course-add"));
addCourseElement.triggerEventHandler("addEvent", "any value");
expect(component.errors.add).toEqual("Add Course Error");
```

## Flux: Servicio con estado para el Store. BehaviorSubject y Observables

Pare emplear una gestión de estado centralizada vamos a añadir una nieva feature tareas,
que en principio clonaremos de ta que ya tenemos

### Iniciando la feature tareas

Añadimos una nueva entidad
Añadimos una pagina Tasks y los componentes tasksList, taskCard y taskAdd
Añadimos el servicio tasks.api.repo.service

```shell
  xcopy projects\demo-rx\src\app\entities\course.ts projects\demo-rx\src\app\temp\entities\task.ts
  xcopy projects\demo-rx\src\app\pages\courses\courses.* projects\demo-rx\src\app\temp\pages\tasks\ /s /e
  xcopy projects\demo-rx\src\app\components\course-add projects\demo-rx\src\app\temp\components\task-add /s /e
  xcopy projects\demo-rx\src\app\components\course-card projects\demo-rx\src\app\temp\components\task-card /s /e
  xcopy projects\demo-rx\src\app\components\courses-list projects\demo-rx\src\app\temp\components\tasks-list /s /e
  xcopy projects\demo-rx\src\app\services\courses.api.repo.service.*  projects\demo-rx\src\app\temp\services\ /s /e
```

La página tendrá su ruta y su opción del menú consumirá el componente tasksList, que hará lo propio con taskCard y taskAdd

Definimos la nueva entidad

```ts
export interface Task {
  id: string;
  title: string;
  author: string;
  isImportant: boolean;
}
```

De nuevo creamos un endpoint en el back con unos datos iniciales.

Podemos copiar y modificar los componentes y el servicio junto con sus tests

### Creación de un servicio con estado

El nuevo servicio actuará como un store de los estados globales de la feature Tasks de la aplicación.

```shell
  ng g s store/tasks.store --project demo-rx --dry-run
```

El estado (TasksState) lo definiremos como

data (Tasks[]): el array de tareas
errors: un objeto con los mensajes de errors de load, add, update, delete

```ts
export type TasksErrors = {
  load?: string;
  add?: string;
  update?: string;
  delete?: string;
};

export type TasksState = {
  data: Observable<Task[]>;
  errors: Observable<TasksErrors>;
};
```

Lo importante es que el estado no almacena directamente los valores,
sino los correspondientes observables

Como propiedades **privadas** de la clase, declaramos los **BehaviorSubjects** correspondientes a cada propiedad del estado, que nos proporcionaran los correspondientes observables

En el constructor creamos los BehaviorSubjects de cada parte del estado,
que directamente emiten los valores iniciales

```ts
  private tasks$: BehaviorSubject<Task[]>;
  private errors$: BehaviorSubject<TasksErrors>;

  constructor(private repo: TasksApiRepoService) {
    const initialTasks: Task[] = [];
    const initialErrors: TasksErrors = {};

    this.tasks$ = new BehaviorSubject(initialTasks);
    this.errors$ = new BehaviorSubject(initialErrors);
  }
```

Añadimos el método de acceso al estado (**getState**), que devuelve todas sus propiedades en forma de observables creados a partir de los BehaviorSubject.

Aquí está la clave del patrón Flux: los suscripciones al estado podrán leer los valores pero nunca modificar el estado. Para eso nuestro servicio proporcionará las funciones apropiadas

```ts
  getState() {
    const state: TasksState = {
      data: this.tasks$.asObservable(),
      errors: this.errors$.asObservable(),
    };
    return state;
  }
```

En este caso hay además una función que setter que elimina todos los errores

```ts
  setNoErrors() {
    this.errors$.next({});
  }
```

La primera de las funciones relativa al array de datos, carga los valores desde el repo y lo emite en el BehaviorSubject

```ts
 loadTasks() {
    this.repo.getAll().subscribe({
      next: (tasks) => {
        this.tasks$.next(tasks);
      },
      error: (error: Error) => this.errors$.next({ load: error.message }),
    });
  }

```

El resto, son las funciones que gestionan los cambios en el array.
Son muy simples y similares a la anterior porque la lógica de los cambios esta en el repo,
y se limitan a emitir con el BehaviorSubject los valores del array modificado

```ts
  addTask(taskData: TaskData) {
    this.repo.add(taskData).subscribe({
      next: (tasks) => this.tasks$.next(tasks),
      error: (error: Error) => this.errors$.next({ add: error.message }),
    });
  }

  updateTask(updatedItem: Task) {
    this.repo.update(updatedItem.id, updatedItem).subscribe({
      next: (tasks) => this.tasks$.next(tasks),
      error: (error: Error) => this.errors$.next({ update: error.message }),
    });
  }

  deleteTask(deletedItem: Task) {
    this.repo.delete(deletedItem.id).subscribe({
      next: (tasks) => this.tasks$.next(tasks),
      error: (error: Error) => this.errors$.next({ delete: error.message }),
    });
  }
```

### Uso del servicio con estado en el componente lista

El componente lista (TasksList) se simplifica enormemente

- Ya no se le inyecta el servicio repo
- En su lugar se le inyecta el servicio con el estado (TasksStoreService)
- En el OnInit ejecuta el método loadTasks() del servicio, para cargar los datos
- Desaparecen los métodos handle de los eventos de los componentes hijos, que se comunicaran directamente con el servicio responsable del estado

```ts
export class TasksListComponent implements OnInit {
  constructor(public tasksStore: TasksStoreService) {}

  ngOnInit(): void {
    this.tasksStore.loadTasks();
  }
}
```

- Para acceder al estado nos podríamos suscribir en el constructor

```ts
  tasks: Task[] = [];
  errors: TasksErrors = {};
  constructor(public tasksStore: TasksStoreService) {
    this.tasksStore.getState().data.subscribe((tasks) => (this.tasks = tasks));
    this.tasksStore.getState().errors.subscribe((errors) => (this.errors = errors));
  }

```

Sin embargo es mejor práctica hacer la suscripción en el template con el pipe **async**
Para ello habrá que importarlo

```ts
  imports: [AsyncPipe, TaskCardComponent, TaskAddComponent],
```

Ya en ma vista haremos un @if global, que nos permita

- la suscripción con el pipe async el observable de los errores
- darle un alias al valor devuelto por la suscripción: errors
- renderizar condicionalmente en función de errors.load
  - mostrar feedback al usuario si hay un error
  - de nuevo usando el pipe async, suscribirnos al observable con el array de datos para iterarlo

```html
@if (tasksStore.getState().errors| async; as errors) { @if(errors.load) {
<div class="error-info">
  <p>No se puede acceder al servidor</p>
  <p>{{errors.load}}</p>
</div>
} @else {

<ul class="list">
  @for (item of tasksStore.getState().data| async; track item.id) {
  <li [title]="item.id" [id]="item.id">
    <isdi-task-card [item]="item" />
  </li>
  }
</ul>

} }
```

Como se ve, los componentes TasksAdd y TasksCard, ya no tienen asociados manejadores de eventos.
Ya no emitirán eventos sino que utilizarán directamente los métodos del store para modificar el estado

### Uso del servicio con estado en los componentes add y card

En ambos componentes ya no es necesario emitir eventos hacia arriba con un @Output() y el EventEmitter

En este caso se inyecta el servicio taskStore

Donde antes se emitía un evento (EventEmitter.next),
ahora se ejecuta un método del servicio, que a su vez emite un valor a través de su observable

Pos ejemplo, en el método handleAddTask del componente TaskAdd

```ts
// ELIMINADO this.addEvent.next(newTaskData);
this.tasksStore.addTask(newTaskData);
```

En realidad hemos pasado de

- emitir unos datos en el EventEmitter, que es una clase que extiende BehaviorSubject,
  que solo podían ser accedidos por el componente padre
- a emitir unas datos en un BehaviorSubject, encapsulado en una función de gestión de estado,
  de forma que los datos estarán disponibles para cualquier elemento de la aplicación que se haya suscrito al estado

De esta forma abstraemos el estado y controlamos quien pude modificarlo, aplicando el patrón Flux

### Test del servicio con estado

El método getState se testa suscribiéndose al resultado de ejecutarlo y comprobando que se reciben las valores iniciales de las propiedades del estado definidos en el servicio (initialState)

```ts
const result = service.getState();
result.data.subscribe((data) => expect(data).toEqual([]));
result.errors.subscribe((errors) => expect(errors).toEqual({}));
```

Los metodos que gestionan el estado se testan

- moqueando el método del repo implicado de modo que devuelva datos
- ejecutando el método que queremos testar
- accediendo al estado mediante getState pasa suscribirnos a los datos
- comprobando en la suscripción que los datos recibidos son los que proporciono el mock del repo

```ts
const mockTasks = [{ id: 1 }] as unknown as Task[];
spyOn(TasksApiRepoService.prototype, "getAll").and.returnValue(of(mockTasks));
service.loadTasks();
service.getState().data.subscribe((data) => {
  expect(data).toEqual(mockTasks);
});
```

En los casos de error el test es similar

- el método moqueado del repo lanza un error
- nos suscribimos a los errores

```ts
const mockErrorMessage = "Test error";
spyOn(TasksApiRepoService.prototype, "getAll").and.returnValue(throwError(() => new Error(mockErrorMessage)));
service.loadTasks();
service.getState().errors.subscribe((errors) => {
  expect(errors.load).toEqual(mockErrorMessage);
});
```

### Test de los componentes que utilizan el servicio

El test de TaskList, se reduce al mínimo al haber desaparecido los métodos que gestionaban los eventos emitidos por los hijos.

El test se limita a comprobar que al crear el componente, es llamado el método load tasks del servicio Store

```ts
  let service: TasksStoreService;
  ...
  providers: [TasksStoreService, provideHttpClient()],
  ...
  service = TestBed.inject(TasksStoreService);
  spyOn(service, 'loadTasks');
  ...
  expect(service.loadTasks).toHaveBeenCalled();
  ...
```

El test de TaskAdd, en lugar de espiar al EventEmitter del componente
ahora espía un método del servicioStore, en este caso addTask.
Donde antes era llamado el primero, ahora lo es el segundo.

```ts
spyOn(service, "addTask");
expect(service.addTask).toHaveBeenCalledWith(mockTaskData);
```

Lo mismo sucede en los tests de TaskCard

## Gestión de errores centralizada. Interceptores

Los interceptors son funciones que, como indica su nombre interceptan las operaciones del servicio httpClient

- cuando se envía la **request** al servidor
- cuando se recibe la **response** desde el servidor

Creamos un interceptor para el segundo de estos casos, que centralizará el manejo de errores en la respuesta del backend

```shell
  ng g interceptor interceptors/error-handler --project demo-rx --dry-run
```

En Angular 17 los interceptors no son clases sino **funciones** que reciben dos parámetros (desde Angular)

- la request que se va a enviar al back, de forma que pueda ser modificada en el interceptor, e.g. añadiendo una cabecera con el token de autenticación
- una función next, que permite continuar el flujo de operaciones, pasando la request al siguiente interceptor o enviándola al backend en el último.

Vemos que se esta aplicando el patrón middleware de forma similar a como hace Express, por lo que se pueden utilizar sucesivos interceptor

```ts
export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
```

Para usarlo, basta indicarlo en el provider de httpClient que tenemos definido en app.config

```ts
  provideHttpClient(withFetch(), withInterceptors([errorHandlerInterceptor])),
```

Solo queda darle funcionalidad al interceptor modificando el Observable de HttpEvent devuelto por el next.

Para ello usaremos un pipe que ejecutará el operador catchError de RsJx como hasta ahora hacía el servicio CoursesApiRepoService en cada uno de sus métodos

```ts
export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(catchError(handleError));
};
```

El código del errorHandler es el mismo que ya teníamos en los repos, que ahora retiraremos de tasks.api.repo y de courses.api.repo, con la evidente ventaja de compartirlo en ambos y en cualquier otro repo que podamos añadir

```ts
const handleError = (errorResponse: HttpErrorResponse) => {
  let errorMessage: string;
  if (errorResponse.status === 0) {
    errorMessage = `Se ha producido un error interno ${errorResponse.error}`;
  } else {
    errorMessage = `El Backend ha devuelto un código ${errorResponse.status} con el mensaje ${errorResponse.error}`;
  }
  return throwError(() => new Error(errorMessage));
};
```

### Test del interceptor de errores

Para testarlo de forma unitaria, tenemos que ejecutarlo pasándole los parámetros adecuados:

- la función next moqueada, utilizando **jasmine.createSpy()** [el equivalente a jest.fn()] para que lance una httpErrorResponse con código 0 o distinto de 0
- la request, real o moqueada con **jasmine.createSpyObj()**

```ts
const httpErrorResponse = new HttpErrorResponse({ status: (0)[400] });
const nextMock: HttpHandlerFn = jasmine.createSpy().and.returnValue(throwError(() => httpErrorResponse));

// const requestMock = new HttpRequest('GET', '/test'); ====> objeto real
const requestMock = jasmine.createSpyObj("HttpRequest", ["doesNotMatter"]);
```

Una vez ejecutado el interceptor, no suscribimos para hacer el assert en el handle del error, esperando un mensaje de error u otro

```ts
interceptor(requestMock, nextMock).subscribe({
  // En un caso
  error: (error: Error) => expect(error.message).toContain("interno"),
  // En el otro caso
  error: (error: Error) => expect(error.message).toContain("Backend"),
});
```

## Estados basados en Signals

### Concepto de signals en Angular

Angular 16 incorporó una nueva serie de elementos reactivos de carácter primitivo (**Reactive Primitivas**) nativos al framework,
por tanto independientes de la librería RxJs

Estos elementos son

- signals
- computed
- effects

- se crean utilizando signals para encapsular un valor inicial
- se cambia su valor utilizando su método set
- se pueden usar como dependencias en un effect, que se ejecutara siempre que cambie alguno de los signal en las dependencias

creamos un componente ejemplo de signals (SignalsComponent) u lo añadimos a la HomePage después de importarlo

```shell
  ng g c components/signals -t --project demo-rx
```

Vemos la similitud con el funcionamiento 'normal' de Angular.

- para acceder al valor siembre 'ejecutamos la signal'
- para modificarlo, de forma siembre inmutable, usamos el método update
  que recibe como parámetro el valor actual y devuelve uno nuevo, sin mutarlo
  Muy similar a como actúa el setState de lou useState en React

```ts
  list = signal<string[]>([]);

  addItem() {
    this.list.update((current) => [...current, '']);
  }
```

```html
<ol>
  @for (item of list(); track $index) {
  <li></li>
  }
</ol>
<button type="button" (click)="addItem()">Add item</button>
```

La principal diferencia no esta en el uso, sino en la forma en que se ejecuta,
con las importantes mejoras de performance que puede aportar
por sus mecanismos granulares de detección del cambio

### Uso de signal en un servicio con estado

## Formularios reactivos

- Validación
- Test de los formularios

## NEXT Schedule: aplicación demo.rx

### Autenticación

- Backend con Auth basada en JWT
- Añadiendo login
- Firmando con el token: Interceptores
- Protegiendo rutas: Guardas

### Librerías de componentes

- Presentando Angular Material
