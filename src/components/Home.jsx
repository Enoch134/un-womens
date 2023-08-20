import React from "react";
import Product from "./Product";
import Homes from "./MainPage/Homes";
import App from "./cors/App";
import NewShop2 from "./new/NewShop2";
import TopCategory from "./topCategories/TopCategory";






const Home = () => {
  return (
    <div style={{marginTop:"30px"}}>
      <Homes/>
      <App/>
      <NewShop2/>
      <TopCategory/>
    </div>
  );
};

export default Home;
