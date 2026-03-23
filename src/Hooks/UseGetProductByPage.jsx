import React,{useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductDataById } from "../app/ProductSlice";
import { addProductsArrayByPage } from "../app/ProductSlice";

const UseGetProductByPage=(currentPage=1)=>{
    const homePageMap=useSelector((store)=>store.product.homePageMap)
    const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  const dispatch=useDispatch();

  async function getData() {
    try {
      let limit = 16;
      let skip = (currentPage - 1) * limit;
      console.log(" Api called for home page ", currentPage);
      let apiData = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
      );

      
      let jsonData = await apiData.json();
      setProductData(jsonData.products);
      dispatch(
        addProductsArrayByPage({
        pageNumber:currentPage,
        productArray:jsonData.products
      }),
    )
      dispatch(addProductDataById(jsonData.products))
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const cacheProductData=homePageMap[currentPage]
    if(!cacheProductData){
      getData()
    }else{
      setProductData(cacheProductData)
      setLoading(false)
    }
  }, [currentPage]);
return{loading,error,productData}


}
export default UseGetProductByPage