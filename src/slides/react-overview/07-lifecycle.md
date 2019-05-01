---
title: "Lifecycle dei Componenti"
---

# Lifecycle dei Componenti

---

<div class="row">
<div class="col-6 align-self-center">

### constructor()

</div>
<div class="col-6 text-left">

* Chiamata quando viene inizializzato il componente
* Utilizzata per settare uno stato iniziale del componente ed eventuali variabili interne

</div>
</div>

---

<div class="row">
<div class="col-6 align-self-center">

### componentWillMount()

</div>
<div class="col-6 text-left">

* Chiamata prima del metodo render()
* Può essere utilizzata per settare lo stato interno iniziale del componente
* E' raccomandato usare constructor() per l'inizializzazione dello stato
* Non è raccomandato per eseguire chiamate asincrone ad API esterne

</div>
</div>

---

<div class="row">
<div class="col-6 align-self-center">

### render()

</div>
<div class="col-6 text-left">

* Metodo Obbligatorio
* Ritorna l'output del componente
* Non deve contenere modifiche allo stato
* Riceve in input lo stato e le proprietà del componente, e ritorna un elemento DOM

</div>
</div>

---

<div class="row">
<div class="col-6 align-self-center">

### componentDidMount()

</div>
<div class="col-6 text-left">

* Chiamata una sola volta, dopo il rendering iniziale del componente, definito "mounting"
* Viene solitamente utilizzato per eseguire chiamate asincrone alle API

</div>
</div>

---

<div class="row">
<div class="col-6 align-self-center">

### componentWillReceiveProps(nextProps)  - *Deprecated*

</div>
<div class="col-6 text-left">

* Chiamato durante l'aggiornamento dati
* Riceve in input le proprietà che stanno per essere ricevute dal componente (***nextProps***)
* Viene utilizzato per modificare lo stato del componente in funzione della differenza tra le proprietà attuali e quelle che vengono ricevute (***nextProps***)

</div>
</div>

---

<div class="row">
<div class="col-6 align-self-center">

### getDerivedStateFromProps()

</div>
<div class="col-6 text-left">

* Sostituisce **componentWillReceiveProps(nextProps)**
* Da usare in combinazione con **componentDidUpdate()**
* restituisce un update dello stato del componente
  
</div>
</div>

---

<div class="row">
<div class="col-6 align-self-center">

### shouldComponentUpdate(nextProps, nextState) 

</div>
<div class="col-6 text-left">

* Utilizzata per ottimizzare le performance
* Chiamata ad ogni update del componente
* Utilizzata per evitare che il componente si renderizzi quando non necessario
  
</div>
</div>

---

<div class="row">
<div class="col-6 align-self-center">

### getSnapshotBeforeUpdate

</div>
<div class="col-6 text-left">

* Viene invocata prima di ogni nuovo rendering
* Permette di catturare informazioni dal DOM (come la posizione dello scroll) prima che venga effettuato effettivamente il cambiamento
* Ogni valore restituito da questo metodo viene passato al metodo **componentDidUdpdate()**
  
</div>
</div>

---

<div class="row">
<div class="col-6 align-self-center">

### componentDidUpdate(prevProps, prevState, snapshot)

</div>
<div class="col-6 text-left">

* Chiamata immediatamente dopo render()
* Non viene invocato nel rendering iniziale
* Utilizzata per effettuare ulteriori operazioni al DOM
* Utilizzata per effettuare ulteriori operazioni asincrone
  
</div>
</div>

---

<div class="row">
<div class="col-6 align-self-center">

### componentWillUnmount()

</div>
<div class="col-6 text-left">

* Chiamata prima che il componente venga distrutto
* Utilizzato per effettuare operazioni di "pulizia"
  
</div>
</div>

---

<div class="row">
<div class="col-6 align-self-center">

### componentDidCatch(error, info)

</div>
<div class="col-6 text-left">

* Chiamata in tutti i casi in cui il componente crea un'eccezione
* Utilizzata per segnalare messaggi di errore e memorizzare l'errore nello storage
  
</div>
</div>