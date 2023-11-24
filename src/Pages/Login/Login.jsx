import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";


const Login = () => {
    const {userLogin} = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit,reset } = useForm()

    const onSubmit = async (data)=>{

        userLogin(data?.email, data?.password)
        .then(result =>{
          console.log(result.user);
          toast.success("User Login Successfully")
          navigate('/')
        })
        .catch(error =>{
           toast.error(error.message)
        })

          reset()
    }

    return (
        <div className="hero min-h-screen bg-base-200">
      
     <div className="hero-content flex-col w-[500px]">
       <div className="text-center ">
         <h1 className="text-4xl font-bold text-green-600">Login Now !</h1>
       
       </div>
       <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
       <form onSubmit={handleSubmit(onSubmit)} className="card-body">
   
   
   <div className="form-control">
     <label className="label">
       <span className="label-text">Email</span>
     </label>
     <input type="email" {...register("email",{required: true})} placeholder="Email" className="input input-bordered" required />
   </div>
   
   <div className="form-control">
     <label className="label">
       <span className="label-text">Password</span>
     </label>
     <input type="password" {...register("password",{required: true})} placeholder="Password" className="input input-bordered" required />
   
   </div>
   
   <div className="form-control mt-6">
     <button className="btn btn-success capitalize">Login</button>
   </div>
   </form>
    
       <p className="pb-10 pt-2 text-center text-indigo-600"> Are you New Please <Link className="text-orange-500" to="/register">Register</Link> </p>


       </div>
    

     </div>
   </div>
    );
};

export default Login;