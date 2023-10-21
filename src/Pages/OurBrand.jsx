import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const OurBrand = () => {
    const [brand , setBrand] = useState([]);
  
useEffect(() =>{
   fetch("./brand.json")
     .then((res) =>res.json() )
     .then((data) => setBrand(data));
},[]);
console.log(brand);


{/* <div data-aos="fade-up"
     data-aos-anchor-placement="top-center">
</div> */}


    return (
        <div>
            <div className="mt-6 mb-8 ">
                <header className="text-center px-6 md:px-16 lg:px-48 ">
                    <h1 className="text-[#8A3324] text-3xl md:text-4xl font-extrabold ">Our Brand</h1>
                    <p className="text-[10px] md:text-sm mt-3">We are dedicated to delivering the finest culinary experiences. We believe in the power of taste to create unforgettable moments. 
                        Join us in celebrating the art of gastronomy.</p>
                </header>


            <div className="mx-auto mt-8 flex justify-center items-center">
            <div className="grid md:grid-cols-2 md:gap-20 
             lg:grid-cols-3 gap-10 justify-center mx-auto items-center" > 
                {
                    brand.map(brands =>(
                        <Link  key={brands.id} to="/branddetail">
                        <div className=" bg-[#fff6ec] card w-80 shadow-2xl ">
                           <figure><img className="h-[200px]  w-full"
                            src={brands.image} alt="Shoes" /></figure>
                            <div className="mb-6 px-4 justify-center ">
                               <h2 className="card-title justify-center  text-[#8A3324] font-bold ">
                                {brands.brand_name}
                                </h2>
                               <p className="justify-center text-center
                               text-sm " >{brands.short_detail}</p>
                           </div>
                        </div>
                        </Link>
                    ))
                }
                    {/* <Link to="/">
                    <div className=" card w-80 bg-base-100 shadow-xl">
                       <figure><img className="h-42" src="https://i.ibb.co/cL0bxQy/brown-car-1.png " alt="Shoes" /></figure>
                        <div className="">
                           <h2 className="card-title justify-center">
                             Shoes!
                            </h2>
                           <p>If a dog chews shoes whose shoes does he choose?</p>
                       </div>
                    </div>
                    </Link> */}
                </div>
            </div>



            </div>
        </div>
    );
};

export default OurBrand;
