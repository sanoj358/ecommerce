import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../app/ProductSlice";
import UseGetProductById from "./UseGetProductById";

const UseCartProduct = (id) => {
    const dispatch = useDispatch()
    const cartData = useSelector((store) => store.product.cartData)
    const {productData}=UseGetProductById(id)
    const isProductInCart=cartData[id]

    function handleCartData(){
        if(isProductInCart){
            dispatch(removeFromCart(id))
        }else{
      dispatch(addToCart(productData))
        }
    }
    return {isProductInCart,handleCartData}
        
    
}

export default UseCartProduct;