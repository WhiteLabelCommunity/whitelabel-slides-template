---
title: "Componenti"
---

# Componenti

---

<div class="row">
<div class="col-6 align-self-center">

## Scopo
 ![thinking-in-react-components-eb8bda25806a89ebdc838813bdfa3601-82965](https://coggle-images.s3.amazonaws.com/5a881768218c15000116dc55-33d26435-b4ef-46ed-b5dc-2947bdabd151.png) 

</div>
<div class="col-6 text-left">

* Spezzare applicativo in piccole parti
  * containers - components
  * Single responsibility
* Riusabilità del codice
* Manutenzione del codice
* Scalabilità

</div>
</div>

---

## Tipologie di componenti

---

## Functional Components

```javascript
const Search = ({ value, onChange, children }) => <form>
      {children}
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
    </form>
```

---

## Class Components

```javascript
class Hello extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {property} = this.props
        return(
            <div>Hello {property}</div>
        )
    }
}
```

---

## Stateless components

* Non prevedono la gestione dello stato interno
* Possono essere sia Class che Functional Components

---

## Stateful Components

* Sono sempre Class Components (fino ad oggi)
* Gestiscono il loro stato internamente

---

## Presentational Components

* Ricevono proprietà dall'esterno
* Possono avere uno stato interno
* Non dialogano con le action o i reducers
* Potrebbero essere Functional Components

---

## Containers

* Contengono le logiche di funzionamento ed interfacciamento con action e reducers
* Passano le proprietà ai Presentational Components