import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const TestDetails = () => {
  const tests = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { image, testName, price, date, description, slotsStart, slotsEnd } =
    tests;

  const handlerAppointMent = () => {
    const appointment = {
      userEmail: user?.email,
      image,
      testName,
      price,
      date,
      description,
      slotsStart,
      slotsEnd,
    };

    axiosSecure.post("/appointments", appointment).then((res) => {
      console.log(res?.data);
      if (res.data.insertedId) {
        toast.success("Your Appointment Insert MongoDB Successfully");
      }
    });
  };

  return (
    <div>
      <div className="rounded-lg">
        <img
          className="w-full pt-2 rounded-2xl "
          src="https://www.netsuite.com/portal/assets/img/business-articles/data-warehouse/bnr-diagnostic-analytics.jpg"
          alt=""
        />
      </div>

      <h1 className="text-4xl font-bold text-center my-10 text-blue-600 pt-20">
        {" "}
        Tests Details
      </h1>

      <div className="mt-10 border-2">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img className="w-[700px] p-1  h-[300px]" src={image} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{testName} </h2>
            <p>{description}</p>
            <h3 className="text-[17px] font-bold">Available date and Slots </h3>
            <div className="font-bold">
              <p>
                {" "}
                Slots: <span> {slotsStart}</span> - <span> {slotsEnd} </span>{" "}
              </p>
              <p> Date: {date}</p>
              <p> Price : {price} </p>
            </div>
            <div className="card-actions justify-end">
              <button onClick={handlerAppointMent} className="btn btn-primary">
                AppointMent{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDetails;
