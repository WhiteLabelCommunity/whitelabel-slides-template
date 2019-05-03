---
title: "Styling"
---

# Styling

---

<div class="row">
<div class="col-5 align-self-center">

# Styling
## CSS Modules

</div>
<div class="col-7 text-left">

* Traduce CSS in Js Objects
* Le classi vengono rinominate in modo univoco per ogni componente
* create-react-app 2 implementa Css-Modules out of the box
  
</div>
</div>

---

<div class="row">
<div class="col-5 align-self-center">

# Styling
## CSS Modules

</div>
<div class="col-7 text-left">

```javascript
import React, { Component } from 'react';
import styles from './App.module.css'; //import da CSS

class App extends Component {
  render() {
    const helloWorld = 'Hello World';
    return (
    <div className={styles.App}>
       <h2>{helloWorld}</h2>
    </div>);
  } 
}

export default App;
```
</div>
</div>

---

<div class="row">
<div class="col-5 align-self-center">

# Styling
## Inline Style

</div>
<div class="col-7 text-left">

```javascript
import React, { Component } from 'react';

const customStyle = {
  color: 'red',
  backgroundColor: 'green'
}

class App extends Component {
  render() {
    const helloWorld = 'Hello World';
    return (
    <div style={customStyle}>
       <h2>{helloWorld}</h2>
    </div>);
  } 
}

export default App;
```
</div>
</div>

---

<div class="row">
<div class="col-5 align-self-center">

# Styling
## Styled Components

</div>
<div class="col-7 text-left">

* Permette di scrivere Css into Js tradotto in style inline
* Consente di scrivere una libreria di componenti stilizzati
* Accetta proprietà e consente di utilizzare come controlli sullo stile
* Il risultato è uno style iniettato direttamente sul DOM
  
</div>
</div>

---

<div class="row">
<div class="col-5 align-self-center">

# Styling
## Styled Components

</div>
<div class="col-7 text-left">

```javascript
/* File di styling */
import styled from 'styled-components'

export const Wrapper = styled.div`
    background: red;
    color: ${props => props.inputColor || "violet"};
    .date {
        background: green;
        &.selected{
            color: blue;
        }
    }
`
/* Componente */
import {Wrapper} from './style'

render() {
    return <Wrapper>
        Contenuto stilizzato
    </Wrapper>
}

```
</div>
</div>
