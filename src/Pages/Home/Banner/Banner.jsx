import { useQuery } from '@tanstack/react-query';
import useAxiosOpen from '../../../hooks/useAxiosOpen';
import Dynamic from './Dynamic';

const Banner = () => {

const axiosOpen = useAxiosOpen()


const{data:banners = [] , isLoading} = useQuery({
    queryKey: ['banners'],
     queryFn : async()=>{
        const res = await axiosOpen.get("/banners")
        return res.data
     }
})

if(isLoading){
    return <div className=" text-center my-20 text-blue-700"> <span className="loading loading-spinner loading-lg"></span></div>
   }

// console.log(banners);
const originalBanner = banners.filter(items => items?.status === true);

    return (
     
     <div>
           {
            originalBanner?.map(item => <Dynamic key={item?._id} item={item} ></Dynamic>)
           }
     </div>
       
    );
};

export default Banner;