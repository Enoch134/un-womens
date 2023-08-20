import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Products";
import { productData, responsive } from "./data";


export default function App() {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="App" style={{marginBottom:"70px"}}>
      <h1 style={{color:"blue"}}>Shops</h1>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
  </div>
  );
}
