import { Link, useLoaderData } from "react-router-dom";


const NewUpPro = () => {
  
    const productCard = useLoaderData();
    const {_id, name,brand,type,price,rating, description,image} = productCard;

    return (
        <div className=" flex md:mx-16 lg:mx-40 my-16 md:my-36 lg:my-52 " >

             <div className="flex justify-center
                items-center flex-col md:flex-row ">
                <div className="flex flex-1 ">
                    <img className="h-56 md:h-80 w-80 md:w-96 rounded-3xl" src={image} alt="" />
                </div>

                <div className="flex flex-1  md:px-4  ">
                <div className="px-20 md:px-4">
                    <h1 className="text-4xl font-extrabold"> {name}</h1>
                    <h1 className="text-3xl font-bold">{brand}</h1>
                    <h2 className="text-base font-semibold">{type} </h2>
                    <p className="my-2">{description}</p>
                    <div className="flex my-3">
                         <p className="font-semibold pr-3">{rating}/10 </p>
                         <div className="rating rating-md">
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-yellow-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-yellow-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-yellow-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-yellow-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-yellow-400" />
</div>
                    </div>
                    <h3 className="py-2 text-xl font-bold">Price : {price} $</h3>
                    <div className="">
                        <Link to={`/productDetails/${_id}`} >
                            <button className="btn w-full text-white bg-[#8A3324] font-bold
           hover:text-[#8A3324]  hover:bg-[#c7a380]">
            <i className="fa-solid fa-cart-shopping"></i>Add to Cart</button>
                        </Link>
                    </div>
                </div>
                </div>
             </div>

        </div>
    );
};

export default NewUpPro;