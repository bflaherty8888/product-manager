import { BrowserRouter } from "react-router-dom";
import ProductForm from "./componenets/ProductForm";

function App() {
  return (
    <BrowserRouter>
      <div className="container my-3 text-center">
        <h1>Product Manager</h1>
        <ProductForm />
      </div>
    </BrowserRouter>
  );
}

export default App;
