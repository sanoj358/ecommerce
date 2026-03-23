import React from "react";
import Navbar from "../Components/Navbar";
import ProductCard from "../Components/ProductCard"
import {useSelector} from "react-redux"


const Wishlist = () => {
  const wishlistData= useSelector((store)=>store.product.wishlistData)
  const data=Object.values(wishlistData)
  return (
    <div>
      <Navbar />
      <div className="flex justify-evenly w-screen min-h-screen flex-wrap gap-5 mt-7 z-10">
        {data.map((pObj) => (
          <ProductCard key={pObj.id} data={pObj} />
        ))}
        
      </div>
</div>

    
  );
};

export default Wishlist;