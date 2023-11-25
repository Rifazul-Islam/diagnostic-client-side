import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import AllTestCard from "./AllTestCard";



const AllTest = () => {
    const axiosSecure = useAxiosSecure();


    const{data:allTests=[]} = useQuery({
        queryKey: ['allTests'],
        queryFn: async()=>{
            const res = await axiosSecure.get("/tests")
            return res.data
        }

       
    })

    console.log(allTests);
    return (
        <div>
           
            <div className='bg-blue-500 w-full h-60 rounded-lg flex justify-center items-center'>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>

           <div className="my-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
             {
                allTests?.map(test => <AllTestCard key={test?._id} test={test} ></AllTestCard>)
             }

          </div>


        </div>
    );
};

export default AllTest;