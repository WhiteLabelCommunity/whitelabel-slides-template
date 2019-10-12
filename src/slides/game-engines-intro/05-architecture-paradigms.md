---
title: Introduzione ai Game Engines 2 
---

# Gerarchia delle classi
 ## per creare la logica di gioco bisogna creare una struttura di classi che vadano a comporre la logica di gioco

---

## Esempio: 
![Inheritance 1](./inheritance1.jpg)

---

## Esempio: 
![Inheritance 2](./inheritance2.jpg)

E se volessimo creare un uomo pesce, che nuota e lavora?

---

# Problema del Diamond of Death

![Inheritance 3](./inheritance3.jpg)

---

# DRY principle
# Problema del gorilla e della banana
## Don't Repeat Yourself!

![Inheritance 3](./inheritance3.jpg)

---

# composition over inheritance
## La differenza è tra quello che che un oggetto di gioco è e tra quello che possiede o sa fare

![Inheritance 4](./inheritance4.jpg)

---

# Benefici della composition

* Il codice è più facile da mantenere
* Oggetti componibili, molte più combimazioni
* Disaccoppiamento

---

# Siamo felici con la composition, quando, ad un certo punto... 

![oop dead1](./oop-dead1.jpg)

![oop dead2](./oop-dead2.jpg)

![oop dead3](./oop-dead3.jpg)

---

# Ottimizzazione della memoria
## La programmazione ad oggetti non è cache friendly

![Processor caches](./processor-caches.jpg)

---

# Soluzione: data oriented programming
## La logica è separata dai dati
## I dati sono memorizzati sequenziamente in memoria, in modo da diminuire le cache miss

![ECS](./ecs.jpg)

---

# Paradigma architetturale: ECS
## Entity component system

* Ogni dato dei component viene memorizzato in una struct apposita
* Ogni oggetto di gioco è un'entita: un semplice indice!
* La logica è all'interno dei system, che effettuano delle operazioni su entità che possiedono determinati component

---

# Implementazione di ECS di Unity: DOTS
## Il Data Oriented Technology Stack di Unity implementa ECS basandosi su tre pilastri:
* Layout della memoria
* Job system
* Compilatore ad hoc ad alta efficienza per le operazioni più eseguite: BURST

---

# Altri benefici dell'ECS
* Codice disaccoppiato al massimo
* Facile da modificare
* Performance! 

---

# OOP VS ECS
* Nonostante i benefici di ECS, non è un silver bullet! 
* Non è detto che ECS sia sempre migliore, dipende dal progetto. 
