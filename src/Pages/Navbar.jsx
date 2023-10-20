import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";


const Navbar = () => {
  const { user,  logOut } = useContext(AuthContext);

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
      <div className="mx-2 md:mx-14">
       <div className="navbar   ">
  <div className="flex-1 ">
    <img className="h-8 md:h-10" src="https://i.ibb.co/c2mFvV2/fast-food-5766043.png" alt="" />
    <a className="normal-case text-2xl md:text-4xl text-black font-bold ">
        Ci<span className="text-[#8A3324]">b</span>o</a>
  </div>
  <div className=" flex-none md:gap-8">
    {/* <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">9</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div> */}
    <div className="flex dropdown dropdown-end  items-center md:gap-8">
      {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-6 md:w-10 rounded-full">
          <img src="https://i.ibb.co/GpPzfBP/girl.webp" />
        </div>
      </label> */}

      <div className="justify-end">
        {
          user ?
          
          <div className="flex justify-center items-center gap-4  ">
           <div className="btn flex justify-center items-center gap-4 ">
           <p className="font-bold">{user.displayName} </p>
            <img className="rounded-full h-10" src={user.photoURL} />
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
 
       {/* navbar 2 -----------------------------------------------*/}
     <div>
        <div className="flex list-none justify-center gap-10 h-14 items-center shadow-xl">
            {navLinks}
        </div>
     </div>
    </div>
);
};

export default Navbar;