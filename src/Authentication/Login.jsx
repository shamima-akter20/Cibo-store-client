import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";
import Swal from 'sweetalert2'


const Login = () => {
  const {signIn, googleSignIn} = useContext(AuthContext);
  const [registerError , setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLogIn = () =>{
    googleSignIn()
    .then(result =>{
     console.log(result.user);
     navigate(location?.state ? location.state : '/' );
     setSuccess(
       Swal.fire(
         'Logged In!',
         'You logged in successfully with Google!',
         'success'
       )
      )
    });
    
   };
   


  const handleLogin = e =>{
    e.preventDefault('');
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    
    const email = form.get('email');
    const password = form.get('password');
    console.log( email, password);

    //reset error
    setRegisterError(''); 
    setSuccess('');

    // log in user
    signIn(email, password)
    .then(result =>{ 
      navigate(location?.state ? location.state : '/' );
      console.log(result.user)
      //navigate after login
     
      setSuccess(
        Swal.fire(
          'Logged In!',
          'You logged in successfully!',
          'success'
        )
       )
    })
    .catch(error =>{
      console.error(error)
      setRegisterError("Wrong Email or Password");
    })

  }  


return (
   <div className="">
    <h1 className=" text-2xl mt-6 md:mt-12 md:text-5xl text-center 
         text-[#8A3324]   font-bold">Login now!</h1>
       <div className=" ">
        <div className=" mt-6 mx-auto flex-shrink-0 w-3/4 md:w-1/2 lg:w-1/3 
        border-2 border-rose-950 rounded-xl shadow-2xl bg-base-100">
      <form  onSubmit={handleLogin}   className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-rose-950 font-semibold ">Email</span>
          </label>
          <input type="email" placeholder="email" name="email"
           className="input input-bordered" required />
        </div>

        <div className="relative form-control">
          <label className="label">
            <span className="label-text text-rose-950 font-semibold ">Password</span>
          </label>
          <input 
          type={showPassword ? "text" : "password" }
          name="password"
          placeholder="password" 
          className="input input-bordered" required />
          <span className="absolute top-[45px] right-4 "
          onClick={() => setShowPassword(!showPassword) } >
           {
            showPassword ? 
            <i className="fa-solid fa-eye-slash"></i>
            :
            <i className="fa-solid fa-eye"></i> 
           }
          </span>
        </div>


         <p className="mt-3 text-sm" >Don't have an Account? 
            <Link to="/registration">
                <span className="text-rose-950 font-bold ">  SIGN IN</span>
            </Link> 
         </p>

        <div className="form-control mt-6">
          <button className="btn hover:border-2 hover:border-rose-950
         bg-[#8A3324] font-bold hover:bg-[#d9988c] 
          hover:text-rose-950 text-white ">
            Login
            </button>


            {
        registerError && <p className="text-red-500 mt-2 text-center font-bold">{registerError} </p>
      }


        </div>

      </form>

      {
        success && <p></p>
      }


      <div className="flex mb-6 justify-center">  
        <button onClick={handleGoogleLogIn}
          className="btn  font-bold ">
          <img className="h-8" src="https://i.ibb.co/tJMpW3j/icons8-google-48.png" alt="" />
           Login With Google
        </button>

      

      </div>


    </div>
  </div>
</div>
  
);
};

export default Login;