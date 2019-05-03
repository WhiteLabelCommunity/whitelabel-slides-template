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

## Step 1: Break The UI Into A Component Hierarchy

<img src="https://reactjs.org/static/thinking-in-react-components-eb8bda25806a89ebdc838813bdfa3601-82965.png">

* identificare i componenti -> single responsibility
* verificare che la struttura rispetti il data model

---

## Step 1: Break The UI Into A Component Hierarchy

<img src="https://reactjs.org/static/thinking-in-react-components-eb8bda25806a89ebdc838813bdfa3601-82965.png">

1. FilterableProductTable (orange): contains the entirety of the example
2. SearchBar (blue): receives all user input
3. ProductTable (green): displays and filters the data collection based on user input
4. ProductCategoryRow (turquoise): displays a heading for each category
5. ProductRow (red): displays a row for each product

---

## Step 1: Break The UI Into A Component Hierarchy

<img src="https://reactjs.org/static/thinking-in-react-components-eb8bda25806a89ebdc838813bdfa3601-82965.png">

Now that we’ve identified the components in our mock, let’s arrange them into a hierarchy. This is easy. Components that appear within another component in the mock should appear as a child in the hierarchy:

* FilterableProductTable
  * SearchBar
  * ProductTable
      * ProductCategoryRow
      * ProductRow

