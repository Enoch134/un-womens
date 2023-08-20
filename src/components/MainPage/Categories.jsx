import React from "react"
import './Cat.css'

const Categories = () => {
  const data = [
    {
      cateImg: "/assets/images/category/cat1.png",
      cateName: "Palm Oil shops",
    },
    {
      cateImg: "/assets/images/category/cat2.png",
      cateName: "Vegetables Shops",
    },
    {
      cateImg: "/assets/images/category/cat3.png",
      cateName: "Rice Shops",
    },
    {
      cateImg: "/assets/images/category/cat4.png",
      cateName: "Home & Garden",
    },
    {
      cateImg: "/assets/images/category/cat5.png",
      cateName: "Gifts",
    },
    {
      cateImg: "/assets/images/category/cat6.png",
      cateName: "Boutique Shops",
    },
    {
      cateImg: "/assets/images/category/cat7.png",
      cateName: "Utensils Shops",
    },
    {
      cateImg: "/assets/images/category/cat8.png",
      cateName: "Pets",
    },
    {
      cateImg: "/assets/images/category/cat9.png",
      cateName: "Baby Toys",
    },
    {
      cateImg: "/assets/images/category/cat10.png",
      cateName: "Groceries",
    },
    {
      cateImg: "/assets/images/category/cat11.png",
      cateName: "Books",
    },
  ]

  return (
    <>
      <div className='category col'>
      {data.map((value, index) => {
        return (
          <a key={index} href={`/category/${value.cateName}`} className='box f_flex '>
            <img src={value.cateImg} alt='' style={{ width: "10%" }} />
            <span>{value.cateName}</span>
          </a>
        );
      })}
    </div>
    </>
  )
}

export default Categories
