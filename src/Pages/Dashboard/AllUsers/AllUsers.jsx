import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();


    const{data:allUsers=[], refetch} = useQuery({
        queryKey: ['allUsers'],
        queryFn: async()=>{
            const res = await axiosSecure.get("/users")
            return res.data
        }

       
    })
   
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
              
            <button   className="btn btn-sm hover:bg-purple-600 rounded bg-green-700 text-white"> User </button>
            </td>

            <td>
              <button  className="btn btn-sm hover:bg-purple-600 rounded bg-primary text-white">See Info</button>
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

export default AllUsers;
