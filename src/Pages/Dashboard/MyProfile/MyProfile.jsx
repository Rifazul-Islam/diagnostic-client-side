
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAxiosOpen from "../../../hooks/useAxiosOpen";
import { useState } from "react";
import toast from "react-hot-toast";

const image_Hosting_key =  import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_Hosting_Api = `https://api.imgbb.com/1/upload?key=${image_Hosting_key}`

const MyProfile = () => {

 const axiosSecure = useAxiosSecure();
 const axiosOpen = useAxiosOpen();
const {user} = useAuth();
const[userId, setUserId] = useState(null)

const {data:users = [], refetch} = useQuery({
    queryKey: ['users'],
    queryFn: async()=>{
      const res = await axiosSecure.get(`/users/${user?.email}`)
      return res.data
     
    }
  })



  
  const { register, handleSubmit} = useForm();

  const onSubmit = async (data)=>{

    const imageFile = {image: data.image[0]}
    const res = await axiosOpen.post(image_Hosting_Api, imageFile, {
      headers:{
          'content-type': 'multipart/form-data'
      }
    });
  
    if(res.data.success){
      
      const infoEdit = {
        name : data?.name,
        email: data?.email,
        bloodGroup: data?.bloodGroup,
        district: data?.district,
        upazila : data?.upazila,
        image: res.data.data.display_url,
        role : 'active'
      }
     
    
    axiosSecure.put(`/user/update/${userId}`, infoEdit)
    .then(res =>{
      console.log(res.data);
      if(res.data?.modifiedCount > 0){
        toast.success("Your Profile Edit SuccessFully")
        refetch()
    }
    })
     

    }
  }

  


    return (
        <div>
           <div className="bg-blue-500 h-40">

           </div>

           {
            users?.map(item => 
                
                <div key={item._id} className="mx-auto border-2 md:w-1/2 -mt-10 bg-base-100 shadow-lg rounded-lg ">
                <div className="avatar mx-auto flex justify-center  z-10 ">
                        <div className="w-24 h-24  border-4 text-white rounded-full ">
                            <img src={item?.image} />
                        </div>
                      
                        </div>
                        <h1 className="text-center pt-5 text-2xl text-blue-700"> Name : {item?.name}</h1>
                       <div className="text-center grid grid-cols-1 md:grid-cols-2 my-10 text-indigo-500  font-bold">
                       
                        <h1> {item?.email}</h1>
                        <h1> Distract : {item?.district} </h1>
                        <h1> Upozila : {item?.upazila}</h1>
                        <h1 > BloodGroup : {item?.bloodGroup} </h1>
                     </div>
    
                     <div className="py-4 pl-2">
                     <button className="btn bg-primary text-white">  <span  onClick={()=>document.getElementById('my_modal_3').showModal()}> Edit Profile</span></button>
                     </div>

            {/* model use */}

           {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal">
          <div className="modal-box">

            <form method="dialog">
               {/* if there is a button in form, it will close the modal */}
             <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

            </form>


        <form onSubmit={handleSubmit(onSubmit)} >
          
        
       <div className="flex gap-3 pt-5">

       <div className="form-control w-1/2  ">
         <label className="label">
           <span className="label-text text-[16px] ">Your name </span>
         </label>
         <label className="input-group">
           <input defaultValue={item?.name} type="text" {...register("name",{required: true})}  placeholder="Product Name" className="input input-bordered w-full" required />
         </label>
       </div>

       <div className="form-control w-1/2">
         <label className="label">
           <span className="label-text text-[16px] ">Your Email</span>
         </label>
         <label className="input-group">
           <input defaultValue={item?.email} type="email" {...register("email",{required: true})} placeholder="Product Photo" className="input input-bordered w-full" required />
         </label>
       </div>
       
 </div>  
 <div className="flex gap-3 pt-5">

       <div className="form-control w-1/2">
         <label className="label">
           <span className="label-text text-[16px]"> Your Blood Group</span>
         </label>
         <label className="input-group">

        <select defaultValue={item?.bloodGroup} name="bloodGroup" {...register("bloodGroup",{required: true})} placeholder="Please Select"  className="select select-bordered w-full " required >
     
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

     <select defaultValue={item?.district} name="district" {...register("district",{required: true})}placeholder="Please Select"  className="select select-bordered w-full " required >
      
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

     <select defaultValue={item?.upazila} name="upazila" {...register("upazila",{required: true})} placeholder="Please Select"  className="select select-bordered w-full " required >
       
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
           <input type="file" {...register('image',{required: true})} placeholder="Short Description" className="input input-bordered w-full pt-2" required />
         </label>
       </div>
       
    </div>  





        <input onClick={()=>setUserId(item?._id)} className="btn bg-blue-200  w-full my-7 hover:bg-secondary capitalize" type="submit" value="Profile Edit" />


                    
                    </form>
                
                  </div>

                </dialog>
         
         </div> 
                
          )
           }

        </div>
    );
};

export default MyProfile;
