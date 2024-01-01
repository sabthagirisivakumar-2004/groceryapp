import React from "react";
import ProductList from "./cartlist";
import Heading from './carthead';
const App = () => {
  const products = [
    {
      id: 1,
      name: "Nescafe Coffee",
      price: 20.99,
      image:
        "https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img21/Grocery/GroceryNewLook/grocery_sbc_coffee_440x460.jpg",
      rating: "4.5",
    },
    {
      id: 2,
      name: "A-one Chocolate Clone",
      price: 15.49,
      image:
        "https://www.jiomart.com/images/product/original/rvjqakhvob/a-one-grocery-chocolate-cone-tasty-crunchy-wafer-rolls-500-g-product-images-orvjqakhvob-p604200978-0-202308300052.jpg?im=Resize=(420,420)",
      rating: "3.5",
    },
    {
      id: 3,
      name: "Tata Salt",
      price: 30.99,
      image: "https://m.media-amazon.com/images/I/5136Y63Lq4L._SL500_.jpg",
      rating: "2.5",
    },
  ];
  const products1 = [
    {
      id: 1,
      name: "Red Label Tea",
      price: 20.99,
      image:
        "https://eu.dookan.com/cdn/shop/products/Red-Label-Tea-1kg-Ziplock-Pouch_2ea7dc3e-5e8e-4efd-920e-81e485829766.png?v=1614937569&width=533",
      rating: "4.5",
    },
    {
      id: 2,
      name: "Orea Biscuit",
      price: 15.49,
      image:
        "https://www.eatthis.com/wp-content/uploads/sites/4/2019/10/oreo.jpg",
      rating: "3.5",
    },
    {
      id: 3,
      name: "Corn Flakes",
      price: 30.99,
      image:
        "https://addtocart.ae/cdn/shop/products/GGFTKelloggs-CornFlakes720G_512x512.jpg?v=1599075468",
      rating: "2.5",
    },
  ];
  const products2 = [
    {
      id: 1,
      name: "Detol Antibiotic",
      price: 20.99,
      image: "https://cdn.somahar.xyz/product/y7yDN39oZbvMZa3DEypR2655.jpg",
      rating: "4.5",
    },
    {
      id: 2,
      name: "Joy Bathroom Cleaning",
      price: 15.49,
      image: "https://cf.shopee.ph/file/13e9162e86370ab9736ffb7f2b5a9045",
      rating: "3.5",
    },
    {
      id: 3,
      name: "Mr Muscle Bathroom Cleaner",
      price: 30.99,
      image:
        "https://ph-live-01.slatic.net/p/ffe437ea33cda5ce348c960d0302a9c2.jpg",
      rating: "2.5",
    },
  ];

  return (
    <div>
    <Heading/>
      <br></br>
      <br></br>
      <h1 style={{ position: "absolute", left: "20px" }}>
        added items
      </h1>
      <br></br>
      <br></br>
      <ProductList products={products} />
      <ProductList products={products1} />
      <ProductList products={products2} />
    </div>
  );
};

export default App;
