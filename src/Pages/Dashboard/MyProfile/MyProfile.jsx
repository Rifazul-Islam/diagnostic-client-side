
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";



const MyProfile = () => {

 const axiosSecure = useAxiosSecure()
const {user} = useAuth();

const {data:users = [], refetch} = useQuery({
    queryKey: ['users'],
    queryFn: async()=>{
      const res = await axiosSecure.get(`/users/${user?.email}`)
      return res.data
    }
  })

  
// console.log(users);

    return (
        <div>
           <div className="bg-blue-500 h-28  ">

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
                     <button className="btn bg-primary text-white"> Edit Profile</button>
                     </div>
                     
               </div> 
                
                )
           }

        </div>
    );
};

export default MyProfile;