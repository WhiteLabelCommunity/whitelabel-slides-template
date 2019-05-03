---
title: "Componenti"
---

# Componenti

Concettualmente, i componenti sono come funzioni Javascript.

Accettano valori in input, definiti **props**, e restituiscono elementi DOM che descrivono cosa deve comparire sullo schermo.

Lo **stato** di un componente, è un oggetto che determina come esso si renderizza e si comporta.
In altre parole, è ciò che permette di creare componenti dinamici ed interattivi.

---

## Scopo

* Spezzare applicativo in piccole parti
  * containers - components
  * Single responsibility
* Riusabilità del codice
* Manutenzione del codice
* Scalabilità

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