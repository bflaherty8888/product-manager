import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductDetails from "./componenets/ProductDetails";
import NewProductForm from "./componenets/NewProductForm";
import ProductList from "./componenets/ProductList";
import UpdateProductForm from "./componenets/UpdateProductForm";

function App() {
  return (
    <BrowserRouter>
      <div className="container my-3 text-center">
        <h1>Product Manager</h1>
        <Switch>
          <Route exact path="/">
            <NewProductForm />
            <hr />
            <ProductList />
          </Route>
          <Route exact path="/:id">
            <ProductDetails />
          </Route>
          <Route path="/:id/edit">
            <UpdateProductForm />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
