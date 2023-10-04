import "./App.css";
import { ShoppingMenu } from "./components/organisms/ShoppingMenu";
import { products } from "./constants/product";

export const App = () => {
  return (
    <div>
      <ShoppingMenu cartItems={products}/>
    </div>
  );
};
