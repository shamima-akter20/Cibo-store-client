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


            <div>
            <div className="carousel w-full h-56 md:h-96">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/rQVPMyj/ttt.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/4g9DnSf/k-bg.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/YQFV5vp/baku.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/MSV6z7P/mc.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
            </div>

               

<div className="flex justify-center mt-12 ">
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