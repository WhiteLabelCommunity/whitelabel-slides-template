---
title: Sviluppare un videogioco
---

## Partiamo con un esempio!

Facciamo finta di dover creare un nostro videogioco:

![SuperMario](./super-mario.gif) ![SuperMario2](./super-mario2.gif)

Da dove partiamo?

---
# Il main loop

```cpp
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
# Il main loop

```cpp
Init();

while(!ExitCommandReceived())
{
    ProcessInput(); // Ottieni i comandi dal giocatore
    Update();       // Aggiorna gli attori
    Draw();         // Ridisegna la scena
}
```

---

# Update (sbagliato)
## Andiamo a calcolare il nuovo stato degli elementi di gioco
Ad esempio, immaginiamo un gioco di corse: vogliamo far muovere un'auto in moto rettilineo uniforme.
Dobbiamo cambiare la posizione della macchina, aggiungendo la velocità:

`posizione = posizione + velocità`

--- 

# Update (sbagliato)
## Risultato con velocità = 13 Km/h:

![Update sbagliato](./bad-update.gif)

---

# Bisogna tenere conto del tempo!
## Quanto tempo è passato dal frame precedente?

#Introduciamo il Delta Time

---

# Il main loop

```cpp
Init();

double lastTime = GetTime(); // In secondi
while(!ExitCommandReceived())
{
    double currentTime = GetTime(); // In secondi
    double deltaTime = lastTime - currentTime;

    ProcessInput();    // Ottieni i comandi dal giocatore
    Update(deltaTime); // Aggiorna gli attori
    Draw();            // Ridisegna la scena

    lastTime = currentTime;
}
```
---

# Update (corretto)

`posizione = posizione + velocità * deltaTime`

## Risultato con velocità = 13 Km/h:

![Update](./update.gif)