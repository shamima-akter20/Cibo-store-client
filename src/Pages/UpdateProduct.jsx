/* eslint-disable react-hooks/exhaustive-deps */
import { useLoaderData, useParams } from "react-router-dom";
import Productcard from "./Productcard";
import { useEffect, useState } from "react";


const UpdateProduct = () => {

    const loadedProducts = useLoaderData();
    const [products, setProducts] = useState([])
    const params = useParams()
    
    // console.log(params.brandName, products[0].brand)
    useEffect(()=>{
        const remaining = loadedProducts.filter(product=> product?.brand.toLowerCase() == params.brandName.toLowerCase())
        setProducts(remaining)
    }, [])

    // console.log(params.brandName);


    return (
        <div className="mb-16">
            <h1 className=" text-center text-4xl md:text-5xl font-extrabold 
             py-8 md:py-14 text-[#8A3324]" >
            Varieties of Food  </h1>

               

<div className="flex justify-center ">
<div className="grid md:grid-cols-2 gap-8 lg:grid-cols-3">
   {
    products.map(productCard =><Productcard 
    key={productCard._id}  
    productCard={productCard}  >
    </Productcard> )
   }

</div>
</div>

</div>
    );
};

export default UpdateProduct;