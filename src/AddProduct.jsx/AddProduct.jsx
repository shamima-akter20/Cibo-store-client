import Swal from 'sweetalert2'

const AddProduct = () => {
    const handleAddProduct = event =>{
     event.preventDefault();

     const form = event.target;

     const name = form.name.value;
     const brand = form.brand.value;
     const type = form.type.value;
     const price = form.price.value;
     const rating = form.rate.value;
     const description = form.descrption.value;
     const image = form.image.value;
    
     const newProduct = {name,brand,type,price,rating, description,image};
     console.log(newProduct);

     //send data to the server
     fetch('https://cibo-store-server-33vmdc89i-shamima-akter.vercel.app/product',{
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
      body:JSON.stringify(newProduct)
     })
     .then(res=> res.json())
     .then(data =>{
        console.log(data);
        if(data.insertedId){
            Swal.fire(
                'Good job!',
                'Product Added Successfully!',
                'success'
              )
        }
     })

    }


    return (
        <div>
            <h1 className="text-center font-extrabold text-[#8A3324] 
            text-xl  md:text-4xl mt-7 " >Add Product</h1>
<div className="px-16 md:px-24 mt-24">
<form onSubmit={handleAddProduct} >
{/* ============================   1   ========================== */}
  <div className="grid md:grid-cols-2 md:gap-6">

    <div className="relative z-0 w-full mb-6 group">
        <input type="text" 
        name="name" id="_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
            Name</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" 
        name="brand" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer
        " placeholder=" " required />

        
        <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
            Band Name</label>
          
    </div>

  </div>
{/* ============================   2   ========================== */}
  <div className="grid md:grid-cols-2 md:gap-6">

    <div className="relative z-0 w-full mb-6 group">
        <input type="text" 
        name="type" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
            Type</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" 
        name="price" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
            Price</label>
    </div>

  </div>
{/* ============================   3   ========================== */}
  <div className="grid md:grid-cols-2 md:gap-6">

    <div className="relative z-0 w-full mb-6 group">
        <input type="text" 
        name="descrption" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
            Short Description</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" 
        name="rate" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
            Rating</label>
    </div>

  </div>


{/* ============================   URL of image   ========================== */}
<div className="">
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="image" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Image URL</label>
    </div>
</div>

{/* button */}
<div className="mt-16">
    <button className="btn w-full text-white bg-[#8A3324] font-bold hover:text-[#8A3324]  hover:bg-[#c7a380]  ">Add Product</button>
</div>

 
</form>
</div>            
</div>
    );
};

export default AddProduct;

// <select name="brandName" 
// className="select select-bordered select-accent">
// <option disabled="" value="pickOne" selected="">Pick one</option>
// <option value="Google">Google</option>
// <option value="Microsoft">Microsoft</option>
// <option value="Apple">Apple</option>
// <option value="Sony">Sony</option>
// <option value="Samsung">Samsung</option>
// <option value="Xiaomi">Xiaomi</option></select>