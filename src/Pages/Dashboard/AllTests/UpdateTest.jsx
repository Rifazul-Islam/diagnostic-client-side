import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const UpdateTest = () => {
    const tests = useLoaderData();
    const axiosSecure = useAxiosSecure();
    const{image,testName,price,date,description,slotsStart,slotsEnd,_id} = tests
    const { register, handleSubmit,reset } = useForm()
   
    const onSubmit = async (data)=>{ 
      console.log(data);
      const update = {
        testName: data?.title,
        description: data?.description,
        date : data?.date,
        price: data?.price,
        slotsStart: data?.slotsStart,
        slotsEnd: data?.slotsEnd,
        image: data?.image,
      }

      axiosSecure.put(`/test/update/${_id}`, update)
      .then(res =>{
        console.log(res.data);
        if(res.data?.modifiedCount > 0){
            toast.success("Test Update SuccessFully")
        }
      })


    }
 
    return (
       <div>

        <div>
            <img className="w-full h-[300px] object-cover rounded-2xl" src={image} alt="" />
        </div>

     <div className=" px-2 lg:px-40 pt-20">
        <h2 className="text-center text-4xl font-bold pb-4 text-blue-600"> Update Test</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="border-2 border-blue-500 p-4 mt-4"> 
        
        <div className="flex gap-3 pt-5 ">
        
        <div className="form-control w-1/2  ">
          <label className="label">
            <span className="label-text text-[16px] "> Test Name </span>
          </label>
          <label className="input-group border-2 border-blue-400">
            <input defaultValue={testName} type="text" {...register("title",{required: true})}  placeholder="Test Name" className="input input-bordered w-full" required />
          </label>
        </div>
        
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text text-[16px]"> Short Description</span>
          </label>
          <label className="input-group border-2 border-blue-400">
            <input defaultValue={description} type="text" {...register("description",{required: true})} placeholder="Short Description" className="input input-bordered w-full" required />
          </label>
        </div>
        </div>
        
        <div className="flex gap-3 pt-5 ">
        
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text text-[16px]"> Test Image </span>
          </label>
          <label className="input-group border-2 border-blue-400">
            <input defaultValue={image}  type="text" {...register("image",{required: true})}  placeholder="Banner Image" className="input input-bordered w-full pt-2 cursor-pointer" required />
          </label>
        </div>
        
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text text-[16px]"> Price </span>
          </label>
          <label className="input-group border-2 border-blue-400">
            <input defaultValue={price}  type="number" {...register("price",{required: true})} placeholder=" Test Price" className="input input-bordered w-full" required />
          </label>
        </div>
        
        
        </div>
        
        <div className="flex gap-3 pt-5 ">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-[16px]"> Slots Start</span>
          </label>
          <label className="input-group border-2 border-blue-400">
            <input defaultValue={slotsStart}  type="text" {...register("slotsStart",{required: true})} placeholder="Please write slots time" className="input input-bordered w-full" required />
          </label>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-[16px]"> Slots End</span>
          </label>
          <label className="input-group border-2 border-blue-400">
            <input defaultValue={slotsEnd} type="text" {...register("slotsEnd",{required: true})} placeholder="Please write slots time" className="input input-bordered w-full" required />
          </label>
        </div>
        
        </div>

        

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-[16px]"> Test Date </span>
          </label>
          <label className="input-group border-2 border-blue-400">
            <input defaultValue={date} type="date" {...register("date",{required: true})} placeholder="Discount Rate" className="input input-bordered w-full" required />
          </label>
        </div>

        
        
        <input className="btn my-4 bg-orange-600 text-white" type="submit" value="Add Test" />
        </form> 
          
        </div> 
       </div>
    );
};

export default UpdateTest;