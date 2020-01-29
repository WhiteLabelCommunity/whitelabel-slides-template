---
title: three.js
---

## Cos'è three.js?

![three-logo](three-logo.png)

La definizione che possiamo trovare sul sito:

> Three.js è una libreria JavaScript e un API cross-browser utilizzata
> per creare e visualizzare grafica computerizzata 3D animata in un browser Web.

---

## Ok, ma cosa possiamo fare?

![three-logo](three-logo.png)

- Creare una scena in cui posizionare oggetti 3D (è uno scene graph)
- Posizionare luci e telecamere
- Applicare materiali ad oggetti 3D
- Caricare assets (immagini, modelli, font, ecc...)
- Animare gli oggetti in scena
- Fare calcoli matematici con vettori, matrici, quaternioni ecc...

---

## Che tipo di tool è Three.js?

- Utilizza WebGL per renderizzare
- Non è un game engine, infatti permette "solo" di renderizzare oggetti 3D
- Non esiste il concetto di "attori" e "componenti"

[Full size](./engine-arch.jpg)

![game-engine-semplificato](./engine-arch.jpg)

---

## Differenze con un game engine

[Full size](./engine-arch-complete.png)

![game-engine](./engine-arch-complete.png)

---

## Rendering Engines

Cosa fa un rendering engine?

### ** Disegna cose. **

Astrae a vari livelli le richieste alla scheda video di disegnare primitive o modelli 3D con effetti complessi.

---

## Come funziona il processo di rendering?

Tutto quello che è presente in scena e non visto dalla telecamera viene scartato.
Quello che è visibile, viene inserito in un cubo, in questo modo si ha un input facilme

![frustum](./frustum2.png)

---

## Come funziona il processo di rendering?

![pipeline](./pipeline.png)

Le schede video implementano una pipeline per aumentare la velocità.
La pipeline grafica conta numerosi blocchi, di cui alcuni programmabili tramite gli *shader*
Il risultato dei calcoli viene scritto sul *frame buffer*, che si trova sulla memoria video.

---

## Matematica 3D

![intro-math](./intro-math.gif)

---

## Sistemi di riferimento

Per poter "piazzare" oggetti in una scena, abbiamo bisogno di rappresentare la loro posizione.
In computer grafica, si rappresenta uno spazio 3D tramite un origine e 3 assi orientati perpendicolari
tra di loro, chiamati *x*, *y* e *z*.

Ogni posizione nello spazio sarà rappresentata da un vettore con tre componenti.

![3D-space.png](./3D-space.png)


---

## Sistemi di riferimento 2

- Local space e world space
- Sistema di coordinate (left handed, right handed)

---

## Trasformazioni 3D

Sono principalmente:

- Traslazione
- Scalamento
- Rotazione

Ogni oggetto in scena possiede queste tre proprietà.

---

## Traslazione

Nel caso in cui volessimo spostare un oggetto nello spazio, possiamo utilizzare la somma vettoriale:

Per trovare la distanza tra due oggetti, la differenza:

---

## Scalamento

Per ingrandire o rimpicciolire un oggetto andiamo a settare la sua scala tramite un vettore a tre componenti.
Se vogliamo scalare un oggetto in maniera omogenea (stesso valore per tutti gli assi) posso moltiplicare la scala per uno scalare.

---

## Rotazione

- Angoli di Eulero, più intuitivi ma soffrono del problema del gimbal lock
- Quaternioni

---

## Matrice di trasformazione

Per rappresentare una serie di trasformazioni nello spazio 3D è possibile utilizzare una matrice 4x4.

![matrice-trasformazione](./transform-matrix.jpg)

---

## Altre risorse per la matematica 3D

![math](./confused-math-girl.gif)

TODO: link a sito

---

Ora che sappiamo come funziona il rendering, vediamo come funziona Three.js!

---

## Three.js quickstart

Progetto d'esempio del tutorial di Three.js ![link](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>My first three.js app</title>
		<style>
			body { margin: 0; }
			canvas { width: 100%; height: 100% }
		</style>
	</head>
	<body>
		<script src="js/three.js"></script>
        <!-- possiamo anche usare un CDN: 
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/58/three.min.js"></script>
         -->
		<script>
			// Our Javascript will go here.
		</script>
	</body>
</html>

```


---

## Three.js kickstart

```javascript
//Inizializziamo Three.js
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Aggiungiamo qualcosa da vedere
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

//Riposizioniamo la camera
camera.position.z = 5;

```

---

## Three.js kickstart

Ed ora, l'equivalente del *Game Loop*

```javascript
function animate() {
    requestAnimationFrame( animate );
    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}
animate();
```

---

## La scena

```javascript
var scene = new THREE.Scene();

```

In Three.js la scena è la radice dell'albero degli oggetti in scena.
Da questo oggetto è possibile impostare il colore di sfondo.

---

## La telecamera

```javascript
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

```

è l'oggetto che ci permette di "vedere" la scena. Ha le seguenti proprietà:

- Posizione e Rotazione
- FOV (field of view)
- Proiezione (ortografica o prospettica)

---

## La telecamera

![camera-prosp](./cameras-graphic.jpg) 
![camera-ortho](./cameras-example.jpg)

---

## In Node.js

### Telecamera prospettica:
[DOC](https://threejs.org/docs/#api/en/cameras/PerspectiveCamera)

```javascript
var camera = new THREE.PerspectiveCamera( FOV, ASPECT_RATIO, NEAR_PLANE, FAR_PLANE );
```

### Telecamera ortografica:
[DOC](https://threejs.org/docs/#api/en/cameras/OrthographicCamera)

```javascript
var camera = new THREE.OrthographicCamera( FOV, ASPECT_RATIO, NEAR_PLANE, FAR_PLANE );
```

---

## Renderer

```javascript
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

```

Il renderer è l'oggetto che si occupa di ottenere le informazioni dall'oggetto scena, trasformare gli oggetti in primitive e disegnarli con l'aiuto di *WebGL*.

Ha bisogno di conoscere la risoluzione a cui renderizzare. Per vedere il risultato ci basta aggiungere la proprietà *domElement* al *DOM* della nostra pagina.

---

## luci

- Ambient light
- Point light
- Directional light
- Rect area light
- Spot light
- Hemisphere light

---

## Modelli di illuminazione

- Lambert
- Phong
- Raytracing
TODO

---

## Shaders

Sono dei programmi che vengono eseguiti sulla scheda video.
Ne esistono di più tipi e si riferiscono a fasi specifiche della pipeline di rendering.
Geometry shader e fragment shader

todo

---

## Animare gli oggetti in scena

Facciamo finta di dover creare un nostro videogioco:

![SuperMario](./super-mario.gif) ![SuperMario2](./super-mario2.gif)

Da dove partiamo?

---
# Il main loop

```javascript
Init();

while(true)
{
    ProcessInput(); // Ottieni i comandi dal giocatore
    Update();       // Aggiorna gli attori
    Draw();         // Ridisegna la scena
}
```
---

# ProcessInput()

## Registriamo gli input del giocatore

Ad esempio:
- Pulsanti della tastiera e spostamento del mouse
- Pulsanti di un joypad
- Posizione nello spazio del device, nel caso di un'applicazione AR
- Posizione nello spazio del visore HMD e dei joypad
- Dati da accelerometro, bussola, GPS...

---

# Update()

## Andiamo ad aggiornare gli elementi in scena

Quanto tempo è passato?

---

Ad ogni step della simulazione cambiamo leggermente lo stato degli oggetti.
(è molto simile al concetto degli integrali!)