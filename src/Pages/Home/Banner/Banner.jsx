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


    return (
     
     <div>
           {
            banners?.map(item => <Dynamic key={item?._id} item={item} ></Dynamic>)
           }
     </div>
       
    );
};

export default Banner;