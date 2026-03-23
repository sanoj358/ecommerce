import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  productDataMap: {},
  homePageMap: {},
  categoryProductsMap: {},
  wishlistData:{},
  cartData:{},
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProductDataById: (state, action) => {
      const productDataArray = action.payload;
      for(let i=0; i<productDataArray.length; i++){
        const productData=productDataArray[i]
      state.productDataMap[productData.id] = productData;
      }
    },
    addProductsArrayByPage :(state,action)=>{
       const pageNumber=action.payload.pageNumber;
       const  productArray=action.payload.productArray
       state.homePageMap[pageNumber]=productArray
    },
    addCategoryProducts:(state,action)=>{
      const productCategory=action.payload.catgeory;
      const productArray=action.payload.productArray;
      state.categoryProductsMap[productCategory]=productArray

    },

    addToWishList :(state,action)=>{
      const productData =action.payload;
      state.wishlistData[productData.id]= productData
    },
    removeFromWishList:(state,action)=>{
      const id=action.payload;
     delete state.wishlistData[id];
    },
    addToCart:(state,action)=>{
      const data=action.payload;
      const id=data?.id;
      const isProductInCart=state.cartData?.[id]
      if(isProductInCart){
        state.cartData[id].quantity +=1
      }else{
          state.cartData[id]={productData:data,quantity:1}
      }
    },
    removeFromCart:(state,action)=>{
      const id=action.payload;
      const isProductInCart=state.cartData?.[id]
      if(isProductInCart){
        delete state.cartData[id]
      }
    },
    decreaseQuantityProduct:(state,action)=>{
      const id=action.payload;
      const isProductInCart=state.cartData?.[id]
      if(isProductInCart){
        if(isProductInCart.quantity==1){
          delete state.cartData[id]
        }else{
          state.cartData[id].quantity -=1
        }
      }
    },
  },
});

export const { addProductDataById,addProductsArrayByPage, addCategoryProducts, addToWishList,removeFromWishList,addToCart,removeFromCart,decreaseQuantityProduct } = ProductSlice.actions;
export default ProductSlice.reducer;

