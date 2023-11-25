import { useQuery } from '@tanstack/react-query';
import useAxiosOpen from '../../../hooks/useAxiosOpen';
import Dynamic from './Dynamic';

const Banner = () => {

const axiosOpen = useAxiosOpen()


const{data:banners = []} = useQuery({
    queryKey: ['banners'],
     queryFn : async()=>{
        const res = await axiosOpen.get("/banners")
        return res.data
     }
})

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