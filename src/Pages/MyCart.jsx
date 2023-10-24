/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";


const MyCart = () => {
    const {user} = useContext(AuthContext);
    const haiku = useLoaderData();
    const [myCart, setMyCart] = useState([]);

    useEffect( () =>{
        const piku = haiku.filter(item => item.email === user.email );
        setMyCart(piku);
            
    },[])
    console.log(myCart);

   const handleDelete = id =>{
     //make sure user is confirmed to delete
     fetch(`https://cibo-store-server-33vmdc89i-shamima-akter.vercel.app/cart/${id}`,{
        method:'DELETE'
     })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0){
                console.log('deleted successfully');

                //remove the cart from the UI
                const reaminingCart = myCart.filter(cartu => cartu._id !==  id);
                setMyCart(reaminingCart);
            }
          })
   }

return (
    <div>
        <h1 className=" text-center text-4xl md:text-5xl font-extrabold 
             py-8 md:py-14 text-[#8A3324]" >
            My Added Food  </h1>

        
         <div>
            <div className="overflow-x-auto mx-6 mt-8">
                 <table className="table">
                
                 <thead>
                     <tr className="text-black font-extrabold text-base">
                        <th>Email</th>
                        <th>Food Name</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Delete</th>
                     </tr>
                  </thead>
                   <tbody>
                  
                        {
                            myCart.map(cartData =>
                            <tr key={cartData.email}>

                                <td>{cartData.email}</td>
                                <td>{cartData.name}</td>
                                <td>{cartData.brand}</td>
                                <td>{cartData.price}</td>
                                <td>
                                    <button  onClick={ () => handleDelete(cartData._id)} className="btn">
                                    <i className="fa-solid fa-trash"></i>
                                    </button>
                                </td>
                            </tr> )
                        }  
                    
                   </tbody>
                </table>
            </div>
        </div> 
   </div>
    );
};

export default MyCart;