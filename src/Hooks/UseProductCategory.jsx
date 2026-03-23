import React, { useState, useEffect, } from "react";
import { useSelector , useDispatch } from "react-redux";
import { addCategoryProducts } from "../app/ProductSlice";

const UseGetProductCategory = (category) => {
    const   categoryProductsMap =useSelector((store)=> store.product.categoryProductsMap)
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch=useDispatch()

    
    
    async function getData() {
        try {
             console.log("Api caleld ", category);
            let apiData = await fetch(
                `https://dummyjson.com/products/category/${category}`,
            );
            let jsonData = await apiData.json();
            setProductData(jsonData.products);
            dispatch(addCategoryProducts({
                catgeory:category,
                productArray:jsonData.products
            }))
            
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const cacheData=categoryProductsMap[category]
        if(!cacheData){
            getData();
        }else{
            setLoading(false);
            setProductData(cacheData)
        }
    }, []);

    return { loading, productData, }
}
export default UseGetProductCategory