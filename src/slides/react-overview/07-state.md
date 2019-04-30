---
title: "Gestione dello stato"
---

# Gestione dello stato
## this.setState()

---

<div class="row">
<div class="col-6 align-self-center">

# Gestione dello stato
## this.setState()

</div>
<div class="col-6 text-left">

* Un componente può avere uno stato interno
  ```javascript
  class App extends Component {
    state = {
      field: 'value',
      anotherField: 'anotherValue'
    }
  }
  ```
* lo stato è immutabile
* può essere variato solo tramite l'istruzione `this.setState()`
* `this.setState()` accetta come parametro un oggetto che contiene le proprietà da modificare sullo stato:
  ```javascript
  this.setState({field: 'sampleValue'})
  ```
</div>
</div>

---

<div class="row">
<div class="col-6 align-self-center">

# Gestione dello stato nei Componenti

</div>
<div class="col-6 text-left">

* Stateless Components
  * Non gestiscono il loro stato interno
* Stateful Components
  * Implementano tutti i metodi necessari per gestire il proprio stato
</div>
</div>

---
