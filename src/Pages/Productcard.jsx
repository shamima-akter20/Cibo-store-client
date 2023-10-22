import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const Productcard = ({productCard}) => {

    const {_id, name,brand,type,price,rating, description,image} = productCard;

    const handleDelete = _id =>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

            fetch(`http://localhost:5000/product/${_id}`,{
                method: 'DELETE',
            })
               .then(res => res.json())
               .then(data =>{
                    console.log(data);
                    if(data.deletedCount > 0 ){
                      Swal.fire(
                        'Deleted!',
                        'Your Product has been deleted.',
                        'success'
            )
                    }
               })
            }
          })
    }

return (
<div>
{/* card-body */}
<div className="flex max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border shadow-2xl">
     <div className=" overflow-hidden rounded-t-xl">
         <img className="w-full h-52" src={image} alt=""/>
     </div>

     <div className=" px-6 py-2">
          <div className="flex justify-between items-center">
             <h1 className="text-3xl font-bold">{name}</h1>
             <div className="flex ">
                 <img className="h-6 " 
                 src="https://i.ibb.co/TwHb2Yr/ti.png" alt="" />
                 <p className="font-semibold pl-2">{rating}/10</p>
             </div>
          </div>
          <div className="">
          <h1 className="text-xl font-bold">{brand}</h1>
          <p className="text-xs mb-2 font-bold">({type}) </p>
          </div>
         <p className=" text-sm text-gray-700">
          {description}
        </p>
        <h1 className="py-2 font-bold">Price : {price} $</h1>
    </div>  
<div className="px-6 flex mb-6">

    
    <Link to={`/edit/${_id}`} >
       <button className="btn  text-white bg-[#8A3324] 
         font-bold hover:text-[#8A3324]  hover:bg-[#c7a380]  ">
            Update
        </button>
    </Link>
   
   <Link  to={`/newUpProduct/${_id}`} >
        <button className="btn  text-white bg-[#8A3324] font-bold
           hover:text-[#8A3324]  hover:bg-[#c7a380]  ">
            Detail
         </button>
   </Link>
   
   <button  onClick={() => handleDelete(_id)}
   className="btn  text-white bg-[#8A3324] font-bold
    hover:text-[#8A3324]  hover:bg-[#c7a380]  ">
    Delete</button>
   

</div>

</div>
        </div>
    );
};

export default Productcard;