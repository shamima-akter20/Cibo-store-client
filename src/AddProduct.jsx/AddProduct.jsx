

const AddProduct = () => {
    return (
        <div>
            <h1 className="text-center font-extrabold text-[#8A3324] 
            text-xl md:text-4xl mt-7 " >Add Product</h1>
            <div className="bg-[#f5e3db] pb-6 px-3 md:px-12 ">
                <form className=" py-10 ">
                    <div className="lg:flex gap-6 lg:py-4 justify-center ">

                    <div className="flex mb-4 h-12 text-sm md:text-lg font-bold text-center ">
                        <p className="flex items-center pr-6 ">Name : </p>
                        <input type="text" placeholder="  Product Name" 
                        className="bg-slate-100 w-96 "
                        name="" id="" />
                    </div>
                    <div className="flex mb-4  h-12 text-sm md:text-lg font-bold text-center ">
                        <p className="flex items-center pr-6 ">Brand : </p>
                        <input type="text" placeholder="  Product Brand  " 
                        className="bg-slate-100 w-96 "
                        name="" id="" />
                    </div>
                   </div>



                   <div className="lg:flex gap-6 lg:py-4 justify-center ">

                    <div className="flex mb-4  h-12  text-sm md:text-lg font-bold text-center ">
                        <p className="flex items-center pr-6 "> Description: </p>
                        <input type="text" placeholder="  Product Description" 
                        className="bg-slate-100  w-96 "
                        name="" id="" />
                    </div>
                    <div className="flex mb-4  h-12  text-sm md:text-lg font-bold text-center ">
                        <p className="flex items-center pr-6 ">Price : </p>
                        <input type="text" placeholder="  Product Price" 
                        className="bg-slate-100 w-96 "
                        name="" id="" />
                    </div>
                   </div>




                   <div className="lg:flex  gap-6  lg:py-4 justify-center ">

                    <div className="flex mb-4  h-12  text-sm md:text-lg font-bold text-center ">
                        <p className="flex items-center pr-6 ">Type : </p>
                        <input type="text" placeholder="  Product Type" 
                        className="bg-slate-100 w-96 "
                        name="" id="" />
                    </div>
                    <div className="flex mb-4  h-12  text-sm md:text-lg font-bold text-center ">
                        <p className="flex items-center pr-6 ">Rating : </p>
                        <input type="text" placeholder="  Product Rating " 
                        className="bg-slate-100 w-96 "
                        name="" id="" />
                    </div>
                   </div>


                   <div className="flex gap-6 lg:py-4 justify-center ">

                    <div className="flex mb-4  h-12  text-sm md:text-lg font-bold text-center ">
                        <p className="flex items-center pr-6 ">Image : </p>
                        <input type="text" placeholder="  Product Image" 
                        className="bg-slate-100 w-auto md:w-96 "
                        name="" id="" />
                    </div>
                    
                   </div>
   
                </form>
                <div className="justify-center items-center text-center ">
                    <button className="btn bg-[#8A3324] text-white w-full">
                        Add Product
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;