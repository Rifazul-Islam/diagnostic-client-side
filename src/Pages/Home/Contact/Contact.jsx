import { useForm } from "react-hook-form";
import toast from "react-hot-toast";


const Contact = () => {

    
    const { register, handleSubmit,reset } = useForm()

    const onSubmit = async (data)=>{

     if(data){
        toast.success("Thank you, for Contact")
     }
      

          reset()
    }
    return (
        <div className="bg-blue-300 min-h-screen">
             
              <div className="hero min-h-screen  ">
      
      <div className="hero-content flex-col w-[500px]">
        <div className="text-center ">
        <h2 className="text-3xl text-center pt-4 font-bold">Contact Us</h2>
        
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" {...register("name",{required: true})} placeholder="Name" className="input input-bordered" required />
    </div>
    
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" {...register("email",{required: true})} placeholder="Email" className="input input-bordered" required />
    </div>
  
    
    <div className="form-control mt-6">
      <button className="btn btn-success capitalize">Contact info</button>
    </div>
    </form>
     
      
 
 
        </div>
     
 
      </div>
    </div>

        </div>
    );
};

export default Contact;