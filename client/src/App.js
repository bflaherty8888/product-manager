import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductDetails from "./componenets/ProductDetails";
import ProductForm from "./componenets/ProductForm";
import ProductList from "./componenets/ProductList";

function App() {
  return (
    <BrowserRouter>
      <div className="container my-3 text-center">
        <h1>Product Manager</h1>
        <Switch>
          <Route exact path="/">
            <ProductForm />
            <hr />
            <ProductList />
          </Route>
          <Route path="/:id">
            <ProductDetails />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
