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

Scaricate il progetto da:
[https://www.github.com/andxet/three-lab](https://www.github.com/andxet/three-lab)

Aprite la cartella *quickstart*

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

## Three.js quickstart

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

## Three.js quickstart

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

## Mesh

```javascript
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

```

---

## Mesh

Una mesh è un oggetto 3D che è possibile visualizzare all'interno di una scena di Three.js, ed è composta da:

- Una geometria
- Un materiale (vedremo dopo cosa sono)

Una mesh è un *Object3D*, una classe generica di Three.js che rappresenta un oggetto piazzabile in scena.
Ogni object 3D può essere inserito come si preferisce all'interno dell'albero della scena.
Una mesh ha una matrice che rappresenta la sua posizione secondo il sistema di riferimento del padre,
ossia l'origine del nodo padre (coordinate locali).

Per ottenere le coordinate globali, Three.js moltiplica tutte le matrici, dai nodi foglia al nodo padre.

---

## Geometrie

Le geometrie sono insiemi di vertici e triangoli che vanno a comporre la forma di un oggetto 3D in scena.
Ci sono delle primitive fornite da Three.js. in forma normale o con la parola *Buffer* nel nome.
I primi sono meno efficienti della versione *buffered*, ma permettono di inserire e rimuovere vertici in maniera dinamica.
Le versioni *Buffered* sono solitamente da preferire.

A questo [link](https://threejsfundamentals.org/threejs/lessons/threejs-primitives.html) si possono vedere tutte le primitive disponibili.

---

## Qual'è la struttura di un'applicazione 3D real time, come un videogioco?

![struttura](./struttura.gif)

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

---

## Più realismo!!

Il nostro cubo è un po' piatto, sebra quasi che non sia illuminato correttamente...

Il problema è che il *materiale* assegnato (```MeshBasicMaterial```) implementa un modello di illuminazione basico.

Proviamo a migliorare le cose!

---

## Più realismo!!

Cambiamo il materiale da ```MeshBasicMaterial``` a:

```javascript
var material = new THREE.MeshPhongMaterial({color: 0x00ff00});
```

ed aggiorniamo...

---

## Le luci

**Non si vede niente!**

Questo perchè abbiamo applicato un materiale che reagisce alla luce.
*MeshPhongMaterial*, come dice il nome, utilizza il modello di illuminazione di Phong.

Un modello di illuminazione definisce come ogni pixel di un oggetto 3D reagisce alla luce.
Solitamente sono delle approssimazioni della realtà, siccome il modello di illuminazione reale è molto complicato e non utilizzabile in realtime sui computer che utilizziamo quotidianamente.

---

## Le luci

Aggiungiamo una luce alla scena:

```javascript
var light = new THREE.HemisphereLight( 0xffffff, 0.5 );
	scene.add(light );
```

---

## Le luci

I tipi di luci supportati da Three.js:

- Ambient 
- Point
- Directional
- Spot
- Rect Area
- Hemisphere

Possono essere viste tutte [qui](https://threejsfundamentals.org/threejs/lessons/threejs-lights.html).

---

## Fine della prima esercitazione!

Potete trovare l'esercizio finito nella cartella *01 materials*.

---

## Break?

---

## Creiamo la Terra in 3D!

Partendo dal progetto in *01 materials*, effettuiamo le seguenti modifiche:

![firstTexture](./02texture01.jpg)

- Sostituiamo il cubo con una [sfera](https://threejs.org/docs/index.html#api/en/geometries/SphereGeometry) bianca, 32x32 segmenti
- Sostituiamo la luce con una [luce direzionale](https://threejs.org/docs/index.html#api/en/lights/DirectionalLight)
- Posizioniamo la luce in (6,0,5)
- Facciamo puntare la luce verso la sfera (utilizzate l'attributo *target*) 
- Fare in modo che la sfera ruoti attorno l'asse Z nella funzione di update
- Fare in modo che la rotazione attorno l'asse X sia sempre di 23, come l'inclinazione dell'asse terrestre. Attenzione, bisogna [convertire in radianti](https://threejs.org/docs/index.html#api/en/math/Math.degToRad)!

---

## Creiamo la terra in 3D!

Abbiamo creato una una sfera che è influenzata dalla luce.
Per farla somigliare un po' di più alla terra, abbiamo bisogno di applicare una [texture](https://threejs.org/docs/index.html#api/en/textures/Texture)!

Nella cartella *img* del progetto sono presenti 3 immagini, che utilizzeremo come textures.
Fonte: [http://planetpixelemporium.com/earth.html](http://planetpixelemporium.com/earth.html)

---

## Creiamo la terra in 3D!

Per caricare assets (modelli 3d, textures, audio ecc...) in Three.js, abbiamo bisogno di un Loader che si occupi di caricare il tipo di asset a cui siamo interessati.

Quello che interessa a noi si chiama, casualmente, [TextureLoader](https://threejs.org/docs/#api/en/loaders/TextureLoader):

```javascript
var texture = new THREE.TextureLoader().load( 'img/earth.jpg' );
```

Poi assegnamo la texture al materiale:

```javascript
var material = new THREE.MeshPhongMaterial( { map: texture } );
```

---

## Textures

Esistono altri tipi di textures, dette anche *mappe*, che danno effetti differenti alla superficie dei modelli 3D:
- Diffuse (Quella che abbiamo utilizzato ora)
- Emission
- Bump map
- Normal map
- Specular map

e altro, vedi [questa pagina](https://www.reallusion.com/iClone/help/iclone3/15_Multiple_Channel_Texture_Mapping/Types_of_maps.htm)

---

## Creiamo la terra in 3D!

Abbiamo a disposizione una *Bump Map* ed una *Specular map*. Utilizziamole!

- Carichiamo ed aggiungiamo al materiale la *Bump Map* (consiglio: provate a modificare il *bumpScale*).
- Carichiamo ed aggiungiamo al material la *Specular Map*.

Per assegnare il materiale alle texture, utilizziamo la documentazione del [MeshPhongMaterial](https://threejs.org/docs/index.html#api/en/materials/MeshPhongMaterial).

---

## La terra in 3D!!

![terra finita](./02texture02.jpg)

---

## BONUS

Three.js offre anche un editor di scena online, all'indirizzo [https://threejs.org/editor/](https://threejs.org/editor/).

Provate a ricreare lo stesso risultato che avete ottenuto con il codice, ma:

- Se volete, usate texture più grandi, sono nella cartella *03 editor/img*
- Create la luna, applicategli le texture, e fatela ruotare attorno la terra
- Create il sole, applicategli la texture, fate in modo che funga da luce per illuminare la terra e la luna
- Attivate le ombre per proiettare dei fantastici eclissi pixellosi sulla terra
- Cambiate lo sfondo, fate in modo che non sia a tinta unica, usate la texture della via lattea

Il mio progetto lo trovate in 05 solarsystem.

---

## BONUS DEL BONUS

Sbizzarritevi, provate a pensare ad una funzionalità e provate ad implementarla. Ad esempio:

- Fate ruotare la terra attorno il sole
- Fate ruotare un satellite artificiale attorno la terra. Cercate su internet il modello!
- Mettete altri pianeti. Come si possono fare gli anelli di Saturno?
