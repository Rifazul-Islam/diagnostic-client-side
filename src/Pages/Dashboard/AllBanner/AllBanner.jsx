import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import toast from "react-hot-toast";

const AllBanner = () => {
    const axiosSecure = useAxiosSecure();


    const{data:allBanner=[], refetch} = useQuery({
        queryKey: ['allBanner'],
        queryFn: async()=>{
            const res = await axiosSecure.get("/banners")
            return res.data
        }
    })
    


// banner System Piliment
 
const handlerDelete =  (id)=>{

 axiosSecure.delete(`/banners/${id}`)
 .then(res =>{
 if(res.data.deletedCount > 0){
     toast.success("Banner Delete Successfully")

     refetch()
 }
 })
   
}










    return (
        <>
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="bg-zinc-500 text-white text-[18px] h-[70px] rounded-lg">
      <tr>
        <th>
          <label>
           #
          </label>
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Status</th>
        <th>Action</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        allBanner?.map((banner, idx) => <tr key={banner?._id} className="border-2 border-green-500">
            <td>
              <label>
                {idx + 1}
              </label>
            </td>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={banner?.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>
             {banner?.title}
          
              
            </td>
            <td>
            <button  className="btn hover:bg-purple-600 rounded bg-green-700 text-white "> {banner?.status} </button>
            </td>

            <td>
              <button onClick={()=>handlerDelete(banner?._id)} className="btn hover:bg-purple-600 rounded bg-red-700 text-white">Delete</button>
            </td>
          </tr>
            
            
            
            )
      }
      
    
  

    </tbody>
  
    
  </table>
</div>
        </>
    );
};

export default AllBanner;