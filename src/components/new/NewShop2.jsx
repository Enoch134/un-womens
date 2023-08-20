import "./NewShops.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";


export default function NewShop2() {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="App" style={{marginBottom:"30px"}}>
      <h1 style={{color:"blue"}}>New Shops</h1>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
  </div>
  );
}
