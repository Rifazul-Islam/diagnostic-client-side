import { useForm } from "react-hook-form";
import useAxiosOpen from "../../../hooks/useAxiosOpen";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const image_Hosting_key =  import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_Hosting_Api = `https://api.imgbb.com/1/upload?key=${image_Hosting_key}`
const AddTest = () => {
    const axiosOpen = useAxiosOpen();
   const axiosSecure = useAxiosSecure();
    const { register, handleSubmit,reset } = useForm()

    const onSubmit = async (data)=>{ 

     console.log(data);

        const imageFile = {image: data.image[0]}
        const res = await axiosOpen.post(image_Hosting_Api, imageFile, {
          headers:{
              'content-type': 'multipart/form-data'
          }
        });
        

        if(res.data.success){

          const tests = {
            testName: data?.title,
            description: data?.description,
            date : data?.date,
            time: data?.time,
            slots: data?.slots,
            image: res.data.data.display_url,
          }

          axiosSecure.post("/tests", tests)
          .then(res =>{
            console.log(res?.data);
            if(res?.data.insertedId){
                toast.success("New Test Insert The Mongodb")
                reset()
            }
          })
        } 
    
    }



    return (
        <div className=" px-40 ">
        <h2 className="text-center text-2xl font-bold"> Add Test</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="border-2 p-4 mt-4"> 
        
        <div className="flex gap-3 pt-5 ">
        
        <div className="form-control w-1/2  ">
          <label className="label">
            <span className="label-text text-[16px] "> Test Name </span>
          </label>
          <label className="input-group">
            <input type="text" {...register("title",{required: true})}  placeholder="Test Name" className="input input-bordered w-full" required />
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
            <span className="label-text text-[16px]"> Test Image </span>
          </label>
          <label className="input-group">
            <input type="file" {...register("image",{required: true})}  placeholder="Banner Image" className="input input-bordered w-full pt-2 cursor-pointer" required />
          </label>
        </div>
        
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text text-[16px]"> Price </span>
          </label>
          <label className="input-group">
            <input type="number" {...register("price",{required: true})} placeholder=" Test Price" className="input input-bordered w-full" required />
          </label>
        </div>
        
        
        </div>
        
        <div className="flex gap-3 pt-5 ">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-[16px]"> Test Date </span>
          </label>
          <label className="input-group">
            <input type="date" {...register("date",{required: true})} placeholder="Discount Rate" className="input input-bordered w-full" required />
          </label>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-[16px]"> Slots Time</span>
          </label>
          <label className="input-group">
            <input type="text" {...register("time",{required: true})} placeholder="Please write slots time" className="input input-bordered w-full" required />
          </label>
        </div>
        
        </div>
        
        
        <input className="btn my-4 bg-orange-600 text-white" type="submit" value="Add Test" />
        </form> 
          
        </div> 
    );
};

export default AddTest;