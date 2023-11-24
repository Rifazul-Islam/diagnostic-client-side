import { useForm } from "react-hook-form"
import useAxiosOpen from "../../../hooks/useAxiosOpen";
import toast from "react-hot-toast";

const image_Hosting_key =  import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_Hosting_Api = `https://api.imgbb.com/1/upload?key=${image_Hosting_key}`
const AddBanner = () => {
  const axiosOpen = useAxiosOpen();
  
    const { register, handleSubmit,reset } = useForm()

    const onSubmit = async (data)=>{ 
        const imageFile = {image: data.image[0]}
        const res = await axiosOpen.post(image_Hosting_Api, imageFile, {
          headers:{
              'content-type': 'multipart/form-data'
          }
        });
        

        if(res.data.success){
         const bannerInfos = {
            title: data?.title,
            description: data?.description,
            coupon: data?.coupon,
            discount : data?.discount,
            image: res.data.data.display_url,
            status: 'false'
            
         }   

         console.log(bannerInfos);

        axiosOpen.post("/banners", bannerInfos)
          .then( res =>{
            if(res?.data?.insertedId){
                toast.success("Banner Information Insert DB")
                reset()
            }
          })

        }

    }


    return (
  <div className=" px-40 ">
<h2 className="text-center text-2xl font-bold"> Add Banner </h2>
<form onSubmit={handleSubmit(onSubmit)} className="border-2 p-4 mt-4"> 

<div className="flex gap-3 pt-5 ">

<div className="form-control w-1/2  ">
  <label className="label">
    <span className="label-text text-[16px] "> Banner Title </span>
  </label>
  <label className="input-group">
    <input type="text" {...register("title",{required: true})}  placeholder="Banner Title" className="input input-bordered w-full" required />
  </label>
</div>

<div className="form-control w-1/2">
  <label className="label">
    <span className="label-text text-[16px]"> Short Description</span>
  </label>
  <label className="input-group">
    <input type="text" {...register("description",{required: true})} placeholder="Short Description" className="input input-bordered w-full" required />
  </label>
</div>
</div>

<div className="flex gap-3 pt-5 ">

<div className="form-control w-1/2  ">
  <label className="label">
    <span className="label-text text-[16px]"> Banner Image </span>
  </label>
  <label className="input-group">
    <input type="file" {...register("image",{required: true})}  placeholder="Banner Image" className="input input-bordered w-full pt-2 cursor-pointer" required />
  </label>
</div>

<div className="form-control w-1/2">
  <label className="label">
    <span className="label-text text-[16px]"> Coupon code</span>
  </label>
  <label className="input-group">
    <input type="number" {...register("coupon",{required: true})} placeholder="Coupon code" className="input input-bordered w-full" required />
  </label>
</div>


</div>


<div className="form-control w-full">
  <label className="label">
    <span className="label-text text-[16px] "> Discount Rate</span>
  </label>
  <label className="input-group">
    <input type="number" {...register("discount",{required: true})} placeholder="Discount Rate" className="input input-bordered w-full" required />
  </label>
</div>


<input className="btn my-2 bg-orange-600 text-white" type="submit" value="Add Banner" />
</form> 
  
</div> 

   
    );
};

export default AddBanner;