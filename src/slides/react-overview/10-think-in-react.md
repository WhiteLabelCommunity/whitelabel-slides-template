---
title: "Pensare in React"
---

# Pensare in React

---

## Inizia con un Mock

Immaginiamo di avere una API JSON e un mock grafico da un designer.

Il mock grafico risulta qualcosa di simile:

<img src="https://reactjs.org/static/thinking-in-react-mock-1071fbcc9eed01fddc115b41e193ec11-4dd91.png">

---

## Inizia con un Mock

L'API ritorna un dato in JSON formattato in questo modo:

```json
[
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
```
---

## Step 1: Spezzare la UI in una gerarchia di Componenti

<img src="https://reactjs.org/static/thinking-in-react-components-eb8bda25806a89ebdc838813bdfa3601-82965.png">

* identificare i componenti -> single responsibility
* verificare che la struttura rispetti il data model

---

<div class="row">
<div class="col-6 align-self-center">

## Step 1: Spezzare la UI in una gerarchia di Componenti

<img src="https://reactjs.org/static/thinking-in-react-components-eb8bda25806a89ebdc838813bdfa3601-82965.png">

</div>
<div class="col-6 text-left">

* **FilterableProductTable (giallo)**: contiene l'intero esempio
* **SearchBar (blue)**: riceve input dall'utente
* **ProductTable (verde)**: visualizza e filtra i dati in base agli input dell'utente
* **ProductCategoryRow (azzurro)**: visualizza l'intestazione di ogni categoria
* **ProductRow (rosso)**: visualizza una riga per ogni prodotto

</div>
</div>

---

<div class="row">
<div class="col-6 align-self-center">

## Step 1: Spezzare la UI in una gerarchia di Componenti

<img src="https://reactjs.org/static/thinking-in-react-components-eb8bda25806a89ebdc838813bdfa3601-82965.png">

</div>
<div class="col-6 text-left">

Dopo aver identificato i componenti, devono essere organizzati secondo una gerarchia.
I componenti che visivamente risultano interni ad un altro, sono figli a livello gerarchico:

* FilterableProductTable
  * SearchBar
  * ProductTable
      * ProductCategoryRow
      * ProductRow

</div>
</div>

---

## Step 2: Creare una versione statica in React

* partendo dal data model creare i componenti
* non implementare interazioni in questa fase
* tralasciare la gestione dello Stato
* passare i dati usando solo **props**
* scopo: avere una libreria di componenti riutilizzabili

---

## Step 3: Identificare la rappresentazione minima (ma completa) dello Stato

Per far diventare la UI interattiva, è necessario scatenare cambiamenti sul data model (one-way dataflow).
E' necessario identificare ciò che è strettamente necessario mantenere nello stato, e calcolare tutto il resto on-demand.

**DRY: Don’t Repeat Yourself.**

---

## Step 3: Identificare la rappresentazione minima (ma completa) dello Stato

Nell'applicazione abbiamo:

* La lista dei prodotti;
* Il testo cercato dall'utente
* Il valore del checkbox
* La lista filtrata dei prodotti

Per ognuno di questi, chiediamoci:

* E' un valore passato da un parent come **prop**? Se si, allora non è un valore dello state.
* Rimane invariato nel tempo? Se si, allora non è un valore dello state.
* Puoi calcolarlo in base ad altre props o elementi dello state del componente? Se si, allora non è un valore dello state.

---

## Step 3: Identificare la rappresentazione minima (ma completa) dello Stato

La lista dei prodotti è passata tramite prop, per cui non fa parte dello state;
Il testo di ricerca ed il valore del checkbox cambiano nel tempo e non possono essere calcolati, per cui sono parte dello state;
La lista filtrata dei prodotti non fa parte dello state perchè può essere calcolata in base al valore del testo di ricerca e del checkbox sulla lista originale dei prodotti.

Quindi, il nostro stato sarà composto da:
* il testo di ricerca
* il valore del checkbox

---

## Step 4: Identificare dove lo State deve risiedere

Considerando che:

* **ProductTable** deve poter filtrare i prodotti in base al valore di ricerca
* **SearchBar** deve visualizzare il testo di ricerca ed il valore del checkbox,

Il componente in comune è **FilterableProductTable**, in cui verrà settato lo stato.

* Inizializziamo quindi `this.state = {filterText: '', inStockOnly: false}` nel constructor() di **FilterableProductTable**  come stato iniziale dell'applicazione.
* Passiamo **filterText** e **inStockOnly** come props a **ProductTable** e **SearchBar**

---

## Step 5: Gestire il flusso inverso dei dati

Vogliamo essere sicuri che ogni volta che l'utente modifichi la form, aggiorniamo lo state in modo che rifletta l'input dello user (lo stato è immutabile).

FilterableProductTable deve passare a SearchBar una callback che verrà invocata ogni volta che lo stato necessita di essere modificato.

* **SearchBar** può usare il metodo onChange
* **FilterableProductTable** chiamerà **setState()** per aggiornare lo stato

---

# GRAZIE A TUTTI!