import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";



const MyProfile = () => {

 const axiosSecure = useAxiosSecure()
const {user} = useAuth();



    return (
        <div>
           <div className="bg-blue-500 h-28  ">

           </div>

           <div className="mx-auto border-2 md:w-1/2 -mt-10 bg-base-100 shadow-lg rounded-lg ">
            <div className="avatar mx-auto flex justify-center  z-10 ">
                    <div className="w-24 h-24  border-4 text-white rounded-full ">
                        <img src="https://i.ibb.co/fkfWKg2/my-profile.png" />
                    </div>
                  
                    </div>
                    <h1 className="text-center pt-5 text-2xl text-blue-700"> Name : Rifazul Islam</h1>
                   <div className="text-center grid grid-cols-1 md:grid-cols-2 my-10 text-indigo-500  font-bold">
                   
                    <h1>  rifazul60@gmail.com</h1>
                    <h1> Distract : Dinajpur</h1>
                    <h1> Upozila : Parbotipur</h1>
                    <h1 > BloodGroup : B+ </h1>
                 </div>

                 <div className="py-4 pl-2">
                 <button className="btn bg-primary text-white"> Edit Profile</button>
                 </div>
                 
           </div>

        </div>
    );
};

export default MyProfile;