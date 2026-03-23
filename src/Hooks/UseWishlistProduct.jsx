 import React from "react";
import { useDispatch } from "react-redux";
import UseIsProductInWishlist from "./UseIsProductInWishList";
import { addToWishList,removeFromWishList } from "../app/ProductSlice";
 const UseWishlistProduct=(productData)=>{
    console.log(productData)

    const id=productData?.id
    const dispatch=useDispatch();
    const isProductInWishlist=UseIsProductInWishlist(id)
    
function handleWishlist(){
    if(isProductInWishlist){
        dispatch(removeFromWishList(id))
    }else{
        dispatch(addToWishList(productData))
    }
}

    return {handleWishlist,isProductInWishlist}
 }
 export default UseWishlistProduct