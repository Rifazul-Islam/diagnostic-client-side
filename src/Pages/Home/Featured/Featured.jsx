import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import FeaturedCard from "./FeaturedCard";


const Featured = () => {
    const axiosSecure = useAxiosSecure();


    const{data:allFeature=[]} = useQuery({
        queryKey: ['allFeature'],
        queryFn: async()=>{
            const res = await axiosSecure.get("/tests")
            return res.data
        }

       
    })
    return (
        <div className="mt-20">
                 <h2 className="text-center text-3xl font-bold text-blue-600"> Our All Featured</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">

             {
                allFeature?.map( feature => <FeaturedCard key={feature._id} feature={feature} ></FeaturedCard> )
             }
              
              </div>
       
        </div>
    );
};

export default Featured;