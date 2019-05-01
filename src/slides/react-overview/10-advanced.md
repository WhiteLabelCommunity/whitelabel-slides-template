---
title: "Advanced Topics"
---

# Advanced Topics

---

<div class="row">
<div class="col-6 align-self-center">

# Render Props

```javascript
<ProductData
  render={({ products }) => <ProductTable products={products} />}
/>
```

</div>
<div class="col-6 text-left">

* Utilizzate per riutilizzare il più possibile codice applicativo
* Consiste nell'implementare una proprietà il cui valore è una funzione

</div>
</div>

---

<div class="row">
<div class="col-6 align-self-center">

# Higher Order Components

```javascript
import React, { Component } from "react";

const withProductData = WrappedComponent =>
  class ProductData extends Component {
    state = {
      products: []
    };

    componentDidMount() {
      getProducts().then(products => {
        this.setState({
          products
        });
      });
    }

    render() {
      return <WrappedComponent products={this.state.products} />;
    }
  };

export { withProductData };
```

</div>
<div class="col-6 text-left">

* Permettono di riutilizzare le logiche di un componente
* Estendono le funzionalità di un componente applicando metodi e proprietà

</div>
</div>
