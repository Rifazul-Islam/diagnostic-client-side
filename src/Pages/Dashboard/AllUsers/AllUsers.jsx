import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
  const [specific, setSpecific] = useState({})

    const{data:allUsers=[]} = useQuery({
        queryKey: ['allUsers'],
        queryFn: async()=>{
            const res = await axiosSecure.get("/users")
            return res.data
        }

       
    })


const handlerUserLoad = (id)=>{
   axiosSecure.get(`/users/specific/${id}`)
   .then(res =>{
    console.log(res?.data);
    setSpecific(res.data)
   })


}


   
    return (
        <>
 <div className="overflow-x-auto w-full px-2">
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
        allUsers?.map((user, idx) => <tr key={user?._id} className="border-2 border-green-500">
         
            <td>
              <label>
                {idx + 1}
              </label>
            </td>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={user?.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>
             {user?.name}
          
              
            </td>
            <td>
              
            <button  className="btn btn-sm hover:bg-purple-600 rounded bg-green-700 text-white"> User </button>
            </td>

            <td>
              <button onClick={()=>handlerUserLoad(user?._id)} className="btn btn-sm hover:bg-purple-600 rounded bg-primary text-white"> <span  onClick={()=>document.getElementById('my_modal_3').showModal()}> See Info</span> </button>
            </td>
          </tr>
            
            
            
            )
      }
      
    
  

    </tbody>
  
    
  </table>
  </div>





{/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>

    <div className="avatar mx-auto flex justify-center  z-10 ">
                        <div className="w-24 h-24  border-4 text-white rounded-full ">
                            <img src={specific?.image} />
                        </div>
                      
                        </div>
                        <h1 className="text-center pt-5 text-2xl text-blue-700"> Name : {specific?.name}</h1>
                       <div className="text-center grid grid-cols-1 md:grid-cols-2 my-10 text-indigo-500  font-bold">
                       
                        <h1> {specific?.email}</h1>
                        <h1> Distract : {specific?.district} </h1>
                        <h1> Upozila : {specific?.upazila}</h1>
                        <h1 > BloodGroup : {specific?.bloodGroup} </h1>
                     </div>
    
                     <div className="py-4 pl-2 flex justify-around">
                     <button className="btn  bg-indigo-700 hover:bg-success text-white"> {specific?.role} </button>
                     <button className="btn  bg-indigo-700 hover:bg-success text-white"> Status Change Admin </button>
                     </div>
                     </div>

</dialog>





















        </>
    );
};

export default AllUsers;
