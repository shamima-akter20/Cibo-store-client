import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";


const Navbar = () => {
  const { user,  logOut } = useContext(AuthContext);
  const [open , setOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light" );

  const handleToggle = (e) =>{
       if(e.target.checked ){
        setTheme("dark");
       }  else{
        setTheme("light");
       }  
  }

  useEffect(() => {
    localStorage.setItem("theme" , theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme );
  },[theme]);

  const handleSingOut = () =>{
       logOut()
         .then( () => console.log('user logged out') )
         .catch(error => console.error(error))
  }

    const navLinks = <>
    <li className="hover:bg-[#8A3324] hover:text-white px-2 md:px-8 py-2 rounded-xl text-xs md:text-lg font-bold text-[#8A3324]"><NavLink to="/">Home</NavLink></li>
    <li className="hover:bg-[#8A3324] hover:text-white px-2 md:px-8 py-2 rounded-xl text-xs md:text-lg font-bold text-[#8A3324]"><NavLink to="/addProduct">Add Products</NavLink></li>
    <li className="hover:bg-[#8A3324] hover:text-white px-2 md:px-8 py-2 rounded-xl text-xs md:text-lg font-bold text-[#8A3324]"><NavLink to="/mycart">My Cart</NavLink></li>
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
         <p className=" text-[12px] md:text-sm font-bold text-[#8A3324] ">{user.displayName} </p>
          <img className="rounded-full h-6 md:h-10" src={user.photoURL} />
         </div>
       <button onClick={handleSingOut} className="text-lg  py-2 px-2 rounded-xl font-bold bg-[#8A3324] 
        hover:text-[#8A3324] hover:bg-white  text-white" >
          <i className="fa-solid fa-right-from-bracket pr-2"></i>
       Log Out
       </button> 
       </div>

       :
        <Link  to="/login">
          <button className="text-lg  py-2 px-2 rounded-xl font-bold bg-[#8A3324] 
        hover:text-[#8A3324] hover:bg-white  text-white" >
          <i className="fa-solid fa-right-to-bracket  pr-2"></i>
       Log In
       </button>
       </Link>

      }

<div>
<label className="swap swap-rotate ml-2">
  
  {/* this hidden checkbox controls the state */}
  <input   onChange={handleToggle}    type="checkbox" />
  
  {/* sun icon */}
  <svg className=" text-[#8A3324] swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className=" text-[#8A3324] swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
</div>


 </div>
  </div>

</div>
        </div>
      


       </div>
     
 
    </div>
);
};

export default Navbar;