import { useState } from "react";


const Register = () => {
    const[error,setError] = useState("")

    const handlerRegister = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const bloodGroup = form.bloodGroup.value;
        const district = form.district.value;
        const upazila = form.upazila.value;
        const password = form.password.value;
        const confirmPass = form.confirmPass.value;
        const photo = form.photo.value;
      
      
       
           
        if(bloodGroup === "Please Your Blood Group"){
            return setError("Please Your Blood Group")
          } 

         if(district === "Please select"){
           return setError("Please select Distract")
         }
         
           if(upazila === "Please select"){
            return setError("Please select Upzalia")
          }
       
         else(
            setError("")
         )




         const  userInfo = {name,email,bloodGroup,district,upazila,password,confirmPass,photo};
         console.log(userInfo);
    }      

    return (
<>

<div className="bg-blue-400 shadow-lg mt-10 w-3/4 rounded-md mx-auto my-10  p-8">
<h2 className="text-center text-3xl font-bold text-white "> Register Page</h2>
  <p className="text-red-500"> {error} </p>
 <form onSubmit={handlerRegister}> 

 <div className="flex gap-3 pt-5">

       <div className="form-control w-1/2  ">
         <label className="label">
           <span className="label-text text-[16px] ">Your name </span>
         </label>
         <label className="input-group">
           <input type="text" name="name"  placeholder="Product Name" className="input input-bordered w-full" required />
         </label>
       </div>

       <div className="form-control w-1/2">
         <label className="label">
           <span className="label-text text-[16px] ">Your Email</span>
         </label>
         <label className="input-group">
           <input type="email" name="email" placeholder="Product Photo" className="input input-bordered w-full" required />
         </label>
       </div>
       
 </div>  
 <div className="flex gap-3 pt-5">

       <div className="form-control w-1/2 ">
         <label className="label">
           <span className="label-text text-[16px] "> Your Blood Group</span>
         </label>
         <label className="input-group">

        <select name="bloodGroup" placeholder="Please Select"  className="select select-bordered w-full " required >
         <option defaultValue={"Please Your Blood Group"}>Please Your Blood Group </option>
         <option>A+</option>
         <option>B+</option>
         <option>AB+</option>
         <option>O+</option>
         <option>O-</option>
       </select>

        
         </label>
       </div>

       <div className="form-control w-1/2">
         <label className="label">
           <span className="label-text text-[16px] "> Please Select district </span>
         </label>
         <label className="input-group">

     <select name="district" placeholder="Please Select"  className="select select-bordered w-full " required >
       <option defaultValue={"Please select"}>Please select </option>
       <option>Dhaka</option>
      <option> Faridpur</option>
      <option>Dinajpur</option>
      <option>Mymensingh</option>
      <option>Other</option>
     </select>
         
         
 </label>
     </div>
       
 </div> 


 <div className="flex gap-3 pt-5">

 <div className="form-control w-1/2">
         <label className="label">
           <span className="label-text text-[16px] "> Please Select Your Upazila </span>
         </label>
         <label className="input-group">

     <select name="upazila" placeholder="Please Select"  className="select select-bordered w-full " required >
       <option defaultValue={"Please select"}>Please Select</option>
       <option>Rangamati</option>
      <option> Sadar</option>
      <option>Parbotipur</option>
      <option>Birgonj</option>
      <option>Other</option>
     </select>
         
         
 </label>
     </div>

       <div className="form-control w-1/2">
         <label className="label">
           <span className="label-text text-[16px] ">Your Image Upload</span>
         </label>
         <label className="input-group">
           <input type="photo" name="photo" placeholder="Short Description" className="input input-bordered w-full" required />
         </label>
       </div>
       
 </div>  


<div className="flex gap-3 pt-5">

       <div className="form-control w-1/2 ">
         <label className="label">
           <span className="label-text text-[16px]">Your Password </span>
         </label>
         <label className="input-group">
           <input type="password" name="password"  placeholder="Product Name" className="input input-bordered w-full" required />
         </label>
       </div>

       <div className="form-control w-1/2">
         <label className="label">
           <span className="label-text text-[16px]">Your Confirm Password</span>
         </label>
         <label className="input-group">
           <input type="Password" name="confirmPass" placeholder="Product Photo" className="input input-bordered w-full" required />
         </label>
       </div>
       
 </div> 


<input className="btn  w-full my-7 hover:bg-secondary capitalize" type="submit" value="Add Product" />

</form>  
                                  
</div>                                     
</>
 );
};

export default Register;