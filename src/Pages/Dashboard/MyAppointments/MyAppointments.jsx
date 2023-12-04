import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
const MyAppointments = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: appointments = [], refetch } = useQuery({
    queryKey: ["appointments"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/appointments/${user?.email}`);
      return res.data;
    },
  });

  // Delete System
  const handlerDelete = (id) => {
    axiosSecure.delete(`/appointments/${id}`).then((res) => {
      if (res?.data?.deletedCount > 0) {
        toast.success("Your AppointMent Delete Successfully");
        refetch();
      }
    });
  };

  return (
    <div className="">
      <div className="overflow-x-auto w-full px-2">
        <table className="table">
          {/* head */}
          <thead className="bg-zinc-500 text-white text-[18px] h-[70px] rounded-lg">
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Image</th>
              <th>TestName</th>
              <th>Date</th>
              <th>Time</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {appointments?.map((item, idx) => (
              <tr key={user?._id} className="border-2 border-green-500">
                <td>
                  <label>{idx + 1}</label>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>

                <td>{item?.testName}</td>
                <td>{item?.date}</td>
                <td>
                  <span> {item?.slotsStart}</span> -{" "}
                  <span> {item?.slotsEnd} </span>
                </td>

                <td>
                  <button
                    onClick={() => handlerDelete(item?._id)}
                    className=" hover:bg-red-800 "
                  >
                    {" "}
                    <MdDelete className="text-3xl text-red-600" />{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
