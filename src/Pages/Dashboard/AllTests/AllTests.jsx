import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllTests = () => {
    const axiosSecure = useAxiosSecure();


    const{data:itemTests=[], refetch} = useQuery({
        queryKey: ['itemTests'],
        queryFn: async()=>{
            const res = await axiosSecure.get("/tests")
            return res.data
        }

       
    })

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
        itemTests?.map((item, idx) => <tr key={item?._id} className="border-2 border-green-500">
         
            <td>
              <label>
                {idx + 1}
              </label>
            </td>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>
             {item?.testName}
          
              
            </td>
            <td>
              
            <button   className="btn btn-sm hover:bg-purple-600 rounded bg-green-700 text-white"> Update</button>
            </td>

            <td>
              <button  className="btn btn-sm hover:bg-purple-600 rounded bg-red-700 text-white">Delete</button>
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

export default AllTests;