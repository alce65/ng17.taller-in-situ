# Taller de Angular 17 para React developers

La nueva versión de Angular ya está aquí.
Vamos a dedicar 2 jornadas a practicar con ella, aprovechando todo lo que ya sabemos de React para sacarle todo el partido.

Antes que nada las diferencias, que en nuestro caso no son tantas:

- En Angular todo se basa en **clases** de ES6, frente a las funciones de React. Todo lo que sabemos de ellas y su uso en nuestro backend nos ayuda a entender como trabaja Angular
- Angular está completamente ligado a **typeScript** desde sus inicios; en eso no hay diferencia con la forma de trabajar con en React que nosotros venimos aplicando en todo el Bootcamp
- La clases usan **decoradores** de typeScript para convertirse en los distintos elementos de Angular: Componentes, Directivas, Servicios...
- Tenemos un **router** que permite el **lazy loading**, bastante similar al que añadimos a nuestros proyectos de React gracias a la librería React Router.
- Los componentes usan un **template** en html ampliado con directivas y operadores de angular, que entre otras cosas permite interpolar expresiones de ES, asociar atributos html a variables y definir manejadores de eventos. En general, bastante similar a lo que hacemos en React gracias a JSX.
- En los templates disponemos de elementos de **control de flujo**, antes directivas estructurales, que permiten el renderizado condicional o iterativo, igual que hacemos en JSX con las estructuras propias de ES
- Los componentes utilizan **estilos SCSS** que por defecto esta vinculado y restringido a cada uno de ellos. Algo similar a lo que conseguimos añadiendo a React el uso de Module CSS.
- En los componentes disponemos de **proyección de contenido**, incluso de varios contenidos, identificables por cualquier selector. Muy similar, incluso más potente que los 'children' en React. En ambos entornos es habitual usarlo para la composición de componentes
- Los **servicios** permiten abstraer la lógica fuera de los componentes, de forma muy similar a lo que hacemos en los Custom Hooks
- En el caso de Angular, los disponemos de un sistema de **inyección de dependencias**, que prove a los componentes y otros servicios de una instancia única de cualquier servicio que necesiten. Una combinación de dos patrones que ya conocemos: la inyección de dependencias, como la que utilizamos en nuestro backend y el patron singleton, similar al que emplea React en useCallback y useMemo
- Los componentes tienen una serie de fases en su **ciclo de vida** a los que están asociados métodos específicos, lo que suele denominarse hooks.
- El más utilizado de estos hooks, **onInit**,  se ejecuta cuando se monta el componente, después de haber sido instanciado, algo muy similar a lo que sucede con useEffects, especialmente si no hay nada en su array de dependencias.
- En Angular, especialmente en los servicios gracias a su carácter singleton, podemos usar **Observables**, entre otras cosas para representar el estado de la aplicación.
- Al **suscribirnos** a los observables desde los componentes, tenemos la garantía de que estos se actualizan cada vez que hay un cambio de estado.
- Si gestionamos los cambios de estado solo desde el servicio responsable de él, estaremos implementando de forma muy simple el **patron FLux**, de forma muy similar a como en React encapsulamos en el custom hook todas las operaciones que implican al useReducer.
- Si nuestro proyecto exige un gestión de estados más compleja, podemos implementar en Angular el **patrón Redux**, bien con Redux nativo, o mejor aun, utilizando la librería [NgRx](https://ngrx.io/) y su store ("a global state management for Angular applications, inspired by Redux"), que no veremos en nuestro taller
- Para las conexiones al backend, Angular proporciona un servicio **httpClient**, que encapsula fetch, pero en lugar de promesas, trabaja con **observables**
- Los servicios sigue siendo responsables de **encapsular** operaciones de bajo nivel. En el caso de httpClient, empleamos el **patrón repository**, que ya usábamos con React, concentrando en un servicio todas las operaciones relativas al backend que implementaremos con httpClient
- Angular es un **framework**, que nos pauta las formas de actuar y la disposición de los elementos, al tiempo que nos proporciona la herramienta para conseguirlo fácilmente, el **Angular CLI**
- Gracias a el CLI se simplifica la creación de **proyecto inicial**, que puede incluir una o más **aplicaciones** junto con **librerías** para el código compartido entre las aplicaciones. Algo mucho más potente que las herramientas proporcionadas por vite o por el desaparecido create-react-app
- Para ir añadiendo al proyecto nuevos elementos (componentes, servicios...) disponemos de comandos específicos del CLI configurables con gran cantidad de parámetros.
- La incorporación del ESLint al proyecto y su configuración es posible con una sola instrucción del CLI
- Y por último, como no podía faltar tenemos un entrono de testing unitario ya instalado y configurado, basado en **Jasmine** y las **herramientas de testing de Angular**
- Cada vez que creamos un elemento (componente, servicio...) el CLI puede crear por nosotros el **fichero de testing** correspondiente, con un test "de humo" básico, que nos será de gran ayuda para completar el test en cada caso y para ir haciéndolo a medida que creamos o modificamos los distintos elementos del proyecto.
- Aunque disponemos de Jasmine configurado y listo para su uso, podríamos redefinir nuestro proyecto para usar Jest y la testing/library. En lugar de ello, podemos re-configurar el entorno de test para que tenga un aspecto muy similar al de Jest (basado en **istanbul**) con el informe de **coverage** por consola al que estamos acostumbrados. El equipo de Angular ya trabaja en incorporar Jest desde el inicio, pero tendremos que esperar a próximas versiones

Y todo ello sin hacer referencia a los **módulos** de Angular, un sistema de espacios de nombres que por lo general dificultaba bastante el aprendizaje del framework. Ahi es donde entra en juego el nuevo enfoque del equipo de Angular, que de momento se refleja en los cambios de la **versión 17**

- El modo **'standalone'** permite prescindir completamente de los módulos, trasladando su funcionalidad principalmente a los componentes.
- Las configuraciones del módulo principal son ahora responsabilidad de un **fichero de configuración** independiente
- El **router** continua usando **lazy loading**, vinculando cara ruta con su componente principal, en vez de hacerlo con un módulo
- La aplicación, gracias al fichero de configuración o los componentes actúan de **providers** de los servicios, como antes hacían los módulos
- La reactivad frente a los cambios en las variables puede basarse en **signals**, en lugar de utilizar observables, reduciendo la complejidad de la gestión del estado
- En los templates de los componente ha cambiado la sintaxis de las directivas estructurales ng-For, ng-If y ng-Switch, que ahora utilizan la forma @for, @if y @shift mas declarativos, lo que les acerca a la sintaxis de JSX, y con un importante incremento de performance
- Las vistas pueden cargarse en **modo 'defer'** para aumentar el proceso de lazy loading
- Internamente Angular ha sufrido una completa evolución a lo largo de sucesivas versiones, siempre buscando mejorar el rendimiento de las aplicaciones y del proceso de desarrollo. En esta versión **vite** y **esbuild** sustituyen a Webpack con notables resultados en este sentido
- Reflejo de su nueva vitalidad, una web completamente re-diseñada: [angular.dev](https://angular.dev/)
- No lo veremos, pero también hay grandes mejoras en el uso del SSR y la hidratación de los componentes.

Como ves, Angular y React se parecen mucho más de lo que uno podría pensar. Si lo tienes en cuenta, seguro que mejorara la temida curva de aprendizaje con Angular

## Resumen de contenidos previstos

- Instalación del Angular CLI
- Creación de proyectos: aplicaciones y librerías
- Incorporación del ESLint
- Scaffolding inicial
- Componentes standalone. Creación de nuevos componentes
- Elementos del componente: clase, template y estilos
- Componente 'saludos': eventos y doble binding (Directiva de atributo ngModel)
- Pipes. Built-in pipes
- Testing del componente
- Routing y lazy loading
- Librerías y componentes compartidos: Header y Footer
- Proyección de contenido: componente Layout
- Página TODO. Entity Task
- Componente 'TODO List' unitario
- Directivas estructurales (Built-in control flow): @for / @if
- Directivas de atributo y CSS: ngClass (y ngStyle)
- Refactoring del TODO list: List / Cards
- Comunicación entre componentes
- Testing de los componentes
- Componente añadir: formularios reactivos. Validación
- Testing del formulario
- Repositorio: servicio storage (localStore)
- Testing del servicio
- Página Notas. Entity Note
- Backend simulado: JSONServer
- Repositorio: servicio APIRepo encapsulando HttpClient
- Test del servicio con HttpClient
- Flux: Servicio con estado para el Store. BehaviorSubject y Observables
- Uso desde los componentes listNotes, CardNote y AddNote
- Test de los componentes
- Backend con Auth0
- Añadiendo login
- Firmando con el token: Interceptores
- Protegiendo rutas: Guardas
- Presentando Angular Material
