import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";


const Navbar = () => {
  const { user,  logOut } = useContext(AuthContext);
  const [open , setOpen] = useState(false);

  const handleSingOut = () =>{
       logOut()
         .then( () => console.log('user logged out') )
         .catch(error => console.error(error))
  }

    const navLinks = <>
    <li className="hover:bg-[#8A3324] hover:text-white px-2 md:px-8 py-2 rounded-xl text-xs md:text-lg font-bold text-[#8A3324]"><NavLink to="/">Home</NavLink></li>
    <li className="hover:bg-[#8A3324] hover:text-white px-2 md:px-8 py-2 rounded-xl text-xs md:text-lg font-bold text-[#8A3324]"><NavLink to="/addProduct">Add Products</NavLink></li>
    <li className="hover:bg-[#8A3324] hover:text-white px-2 md:px-8 py-2 rounded-xl text-xs md:text-lg font-bold text-[#8A3324]"><NavLink to="/">About</NavLink></li>
  </>


return (
    <div className="">
{/*------------------------------------ navbar 1 -----------------------------------------------*/}
      <div className="  bg-[#C4A484]  ">
        <div className="mx-2 md:mx-14  ">
        <div className="navbar justify-between">
       
       <div className="flex ">
           <img className="h-8 md:h-10" src="https://i.ibb.co/c2mFvV2/fast-food-5766043.png" alt="" />
           <a className="normal-case text-2xl md:text-4xl text-black font-bold ">
            Ci<span className="text-[#8A3324]">b</span>o</a>
      </div>


      <div className=" justify-center">
      <div  onClick={() => setOpen(!open)}    className="flex items-end justify-end ">
      {
        open === true ?
        <i className="fa-solid fa-xmark text-2xl md:text-4xl lg:hidden"></i>
        :
        <i className="fa-solid fa-bars text-2xl md:text-4xl lg:hidden"></i>
      }
      </div>
      <div className={`absolute bg-[#C4A484] mt-36 md:mt-48  rounded-lg lg:rounded-none  p-3 lg:p-0
       ${open ? '' : 'hidden' } lg:mt-0 lg:flex list-none z-10`} >
        {navLinks}
      </div>
      </div>

 


  <div className="flex  gap-2 justify-end md:gap-4">

    <div className="flex justify-end">
      {
        user ?
        
        <div className="flex justify-center items-center gap-4  ">
         <div className="flex justify-center items-center gap-2 ">
         <p className=" text-[12px] md:text-sm font-bold">{user.displayName} </p>
          <img className="rounded-full h-6 md:h-10" src={user.photoURL} />
         </div>
       <button onClick={handleSingOut} className="text-lg  py-2 px-2 rounded-xl font-bold bg-[#8A3324] 
        hover:text-[#8A3324] hover:bg-white  text-white" >
       Log Out
       </button> 
       </div>

       :
        <Link  to="/login">
          <button className="text-lg  py-2 px-2 rounded-xl font-bold bg-[#8A3324] 
        hover:text-[#8A3324] hover:bg-white  text-white" >
       Log In
       </button>
       </Link>

      }
 </div>
  </div>

</div>
        </div>
      


       </div>
     
 
    </div>
);
};

export default Navbar;