
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import useAxiosOpen from '../../../hooks/useAxiosOpen';
import { useQuery } from '@tanstack/react-query';

const Recommendation = () => {

const axiosOpen = useAxiosOpen();
const{data:items =[] , isLoading} = useQuery({
    queryKey: ['items'],
    queryFn: async()=>{
        const res = await axiosOpen.get("/recommendation")
        return res.data
    }
})


if(isLoading){
  return <div className=" text-center my-20 text-blue-700"> <span className="loading loading-spinner loading-lg"></span></div>
 }

    return (
        <div className='my-24 cursor-pointer '>
       <h2 className='text-4xl font-bold text-blue-700 text-center py-10'> Our Recommendation</h2>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper "
      >
       {
        items?.map( item =>  <SwiperSlide  key={item?._id}> <img className=' h-[200px] md:h-[500px]  rounded-lg' src={item?.img}  alt="" /></SwiperSlide>)
       }
        
      </Swiper>
    </div>
    );
};

export default Recommendation;