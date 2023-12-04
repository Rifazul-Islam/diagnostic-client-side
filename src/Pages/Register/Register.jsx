import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosOpen from "../../hooks/useAxiosOpen";

const image_Hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_Hosting_Api = `https://api.imgbb.com/1/upload?key=${image_Hosting_key}`;

const Register = () => {
  const [error, setError] = useState("");
  const { newUserCreate } = useAuth();
  const navigate = useNavigate();
  const axiosOpen = useAxiosOpen();
  const [totalUp, setTotalaUp] = useState([]);
  const [allDis, setAllDis] = useState([]);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    if (data?.bloodGroup === "Please Your Blood Group") {
      return setError("Please Your Blood Group");
    }

    if (data?.district === "Please select") {
      return setError("Please select Distract");
    }

    if (data?.upazila === "Please select") {
      return setError("Please select Upzalia");
    }

    if (data.password !== data?.confirmPass) {
      return toast.error("Please use the same password");
    } else setError("");

    const imageFile = { image: data.image[0] };
    const res = await axios.post(image_Hosting_Api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      newUserCreate(data?.email, data?.password)
        .then((result) => {
          console.log(result?.user);
          toast.success("New User Create Successfully");

          const userInfo = {
            name: data?.name,
            email: data?.email,
            bloodGroup: data?.bloodGroup,
            district: data?.district,
            upazila: data?.upazila,
            image: res.data.data.display_url,
            role: "active",
          };

          // mongoDb User Information Pass
          axiosOpen.post("/users", userInfo).then((res) => {
            if (res?.data.insertedId) {
              toast.success("User data inserted in mongodb Successfully");
              navigate("/");
              reset();
            }
          });
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  // get All Upzela
  useEffect(() => {
    fetch("/upzalas.json")
      .then((res) => res.json())
      .then((data) => setTotalaUp(data));
  }, [setTotalaUp]);

  // Gel All Distruc

  useEffect(() => {
    fetch("/distric.json")
      .then((res) => res.json())
      .then((data) => setAllDis(data));
  }, [setAllDis]);

  return (
    <>
      <div className=" bg-zinc-500  border-4 shadow-lg mt-10 w-3/4 rounded-md mx-auto my-10  p-8">
        <h2 className="text-center text-3xl font-bold text-white">
          {" "}
          Register Page
        </h2>
        <p className="text-red-500"> {error} </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-3 pt-5">
            <div className="form-control w-1/2  ">
              <label className="label">
                <span className="label-text text-[16px] ">Your name </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Product Name"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>

            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-[16px]">Your Email</span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Product Photo"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          <div className="flex gap-3 pt-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-[16px]">
                  {" "}
                  Your Blood Group
                </span>
              </label>
              <label className="input-group">
                <select
                  name="bloodGroup"
                  {...register("bloodGroup", { required: true })}
                  placeholder="Please Select"
                  className="select select-bordered w-full "
                  required
                >
                  <option defaultValue={"Please Your Blood Group"}>
                    Please Your Blood Group{" "}
                  </option>
                  <option>A+</option>
                  <option>B+</option>
                  <option>AB+</option>
                  <option>O+</option>
                  <option>O-</option>
                </select>
              </label>
            </div>

            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-[16px] ">
                  {" "}
                  Please Select district{" "}
                </span>
              </label>
              <label className="input-group">
                <select
                  name="district"
                  {...register("district", { required: true })}
                  placeholder="Please Select"
                  className="select select-bordered w-full "
                  required
                >
                  <option defaultValue={"Please select"}>Please select </option>
                  {allDis?.map((items) => (
                    <option key={items?.id}> {items?.name} </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <div className="flex gap-3 pt-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-[16px] ">
                  {" "}
                  Please Select Your Upazila{" "}
                </span>
              </label>
              <label className="input-group">
                <select
                  name="upazila"
                  {...register("upazila", { required: true })}
                  placeholder="Please Select"
                  className="select select-bordered w-full"
                  required
                >
                  <option defaultValue={"Please select"}>Please Select</option>

                  {totalUp?.map((item) => (
                    <option key={item?.id}> {item?.name} </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-[16px] ">
                  Your Image Upload
                </span>
              </label>
              <label className="input-group">
                <input
                  type="file"
                  {...register("image", { required: true })}
                  placeholder="Short Description"
                  className="input input-bordered w-full pt-2"
                  required
                />
              </label>
            </div>
          </div>

          <div className="flex gap-3 pt-5">
            <div className="form-control w-1/2 ">
              <label className="label">
                <span className="label-text text-[16px]">Your Password </span>
              </label>
              <label className="input-group">
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="Product Name"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>

            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-[16px]">
                  Your Confirm Password
                </span>
              </label>
              <label className="input-group">
                <input
                  type="Password"
                  {...register("confirmPass", { required: true })}
                  placeholder="Product Photo"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>

          <input
            className="btn w-full my-7 hover:bg-secondary capitalize"
            type="submit"
            value="Add Product"
          />
        </form>
        <p className="pb-10 pt-2 text-center text-2xl">
          {" "}
          Already User Please Go{" "}
          <Link className="text-orange-700 text-3xl font-bold" to="/login">
            Login
          </Link>{" "}
        </p>
      </div>
    </>
  );
};

export default Register;
