import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";
import Swal from 'sweetalert2'


const Registration = () => {
   const {createUser, googleSignIn, updateName} = useContext(AuthContext);
   const [registerError , setRegisterError] = useState('');
   const [success, setSuccess] = useState('');
   const [showPassword, setShowPassword] = useState(false);
   const navigate = useNavigate();
   const location = useLocation();

   const handleGoogle = () =>{
   googleSignIn()
   .then(result =>{
    console.log(result.user);
    navigate(location?.state ? location.state : '/' );
    setSuccess(
      Swal.fire(
        'Registered!',
        'You registered successfully with Google!',
        'success'
      )
     )
   });
   
  };
  
   
  const handleRegister = e =>{
    e.preventDefault('');
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    
    const name = form.get('name');
    const email = form.get('email');
    const password = form.get('password');
    console.log(name, email, password);
    //reset error
    setRegisterError('');  
    setSuccess('');


    if(password.length < 6){
      setRegisterError('Password must have at least 6 characters');
      return;
    }
    else if(!/[A-Z]/.test(password) ) {
      setRegisterError('Password must have at least 1 uppercase');
      return;
    }
    else if(!/[#?!@$%^&*-]/.test(password)){
      setRegisterError('Password must have at least 1 special character');
      return;
    }


    //createUser
    createUser(email, password)
    .then(result =>{
      navigate(location?.state ? location.state : '/' );
       updateName(name)
       .then(() =>{

        console.log(result.user);
        setSuccess(
          Swal.fire(
            'Registered!',
            'You registered successfully!',
            'success'
          )
         )
       })
       .catch(err =>{
        console.log(err);
       })



    })
    .catch(error =>{
      console.error(error);
      setRegisterError("Already registered email or password");
    })
   
  }  


 return (
   <div>
       <div className="">
    <h1 className=" text-2xl  md:mt-12 md:text-5xl text-center  text-[#8A3324] 
     font-bold">Register Now</h1>
       <div className=" ">
        <div className=" mt-4 mx-auto flex-shrink-0 w-3/4 md:w-1/2 lg:w-1/3 
        border-2 border-rose-950 rounded-xl shadow-2xl bg-base-100">
      <form  onSubmit={handleRegister}   className="card-body ">

      <div className="form-control">
          <label className="label">
            <span className="label-text text-rose-950 font-semibold ">Name</span>
          </label>
          <input type="text" placeholder="Name" name="name"
           className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-rose-950 font-semibold ">Email</span>
          </label>
          <input 
          type="email" 
          name="email" 
          placeholder="email"
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
          <span className="absolute top-[45px] left-[300px]"
          onClick={() => setShowPassword(!showPassword) } >
           {
            showPassword ? 
              <i className="fa-solid fa-eye-slash"></i>
            :
            <i className="fa-solid fa-eye"></i> 
           }
          </span>
        </div>

         <p className="mt-3 text-sm" >Already have an Account? 
            <Link to="/login">
                <span className="text-rose-950 font-bold ">  LOG IN</span>
            </Link> 
         </p>

        <div className="form-control mt-6">
          <button className="btn hover:border-2 hover:border-rose-950
         bg-[#8A3324] font-bold hover:bg-[#d9988c] 
          hover:text-rose-950 text-white ">
            Register
            </button>

            {
        registerError && <p className="text-red-500 text-center font-bold">{registerError} </p>
      }
        </div>

      </form>
     
      {
        success && <p></p>
      }

      <div className="flex mb-4 justify-center">  
        <button onClick={handleGoogle}
          className="btn  font-bold ">
          <img className="h-8" src="https://i.ibb.co/tJMpW3j/icons8-google-48.png" alt="" />
           Register With Google
        </button>
      </div>

    
    </div>
  </div>
</div>      
   </div>
);
};

export default Registration;