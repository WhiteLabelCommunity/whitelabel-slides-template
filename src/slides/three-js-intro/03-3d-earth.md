---
title: Terra in 3D
---

## Creiamo la Terra in 3D!

Partendo dal progetto in *01 materials*, effettuiamo le seguenti modifiche:

- Sostituiamo il cubo con una [sfera](https://threejs.org/docs/index.html#api/en/geometries/SphereGeometry) bianca, 32x32 segmenti
- Sostituiamo la luce con una [luce direzionale](https://threejs.org/docs/index.html#api/en/lights/DirectionalLight)
- Posizioniamo la luce in (6,0,5)
- Facciamo puntare la luce verso la sfera (utilizzate l'attributo *target*) 
- Fare in modo che la sfera ruoti attorno l'asse Z nella funzione di update
- Fare in modo che la rotazione attorno l'asse X sia sempre di 23, come l'inclinazione dell'asse terrestre. Attenzione, bisogna [convertire in radianti](https://threejs.org/docs/index.html#api/en/math/Math.degToRad)!

---

## Creiamo la terra in 3D!

![firstTexture](./02texture01.jpg)

Abbiamo creato una una sfera che è influenzata dalla luce.
Per farla somigliare un po' di più alla terra, abbiamo bisogno di applicare una [texture](https://threejs.org/docs/index.html#api/en/textures/Texture)!

Nella cartella *img* del progetto sono presenti 3 immagini, che utilizzeremo come textures.
Fonte: [http://planetpixelemporium.com/earth.html](http://planetpixelemporium.com/earth.html)

---

## Creiamo la terra in 3D!

Per caricare assets (modelli 3d, textures, audio ecc...) in Three.js, abbiamo bisogno di un Loader che si occupi di caricare il tipo di asset a cui siamo interessati.

Quello che interessa a noi si chiama, indovinate un po', [TextureLoader](https://threejs.org/docs/#api/en/loaders/TextureLoader):

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

e altro, vedi [questa pagina](https://www.reallusion.com/iClone/help/iclone3/15_Multiple_Channel_Texture_Mapping/Types_of_maps.htm) per avere un'idea dei possibili effetti che è possibile ottenere con le texture.

---

## Creiamo la terra in 3D!

Abbiamo a disposizione una *Bump Map* ed una *Specular map*. Utilizziamole!

- Carichiamo ed aggiungiamo al materiale la *Bump Map* (consiglio: provate a modificare il *bumpScale*).
- Carichiamo ed aggiungiamo al material la *Specular Map*.

Per assegnare il materiale alle texture, utilizziamo la documentazione del [MeshPhongMaterial](https://threejs.org/docs/index.html#api/en/materials/MeshPhongMaterial).

---

## La terra in 3D!!

![earth2](./finished-earth.jpg)
