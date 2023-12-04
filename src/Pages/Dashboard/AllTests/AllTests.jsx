import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const AllTests = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const { data: itemTests = [], refetch } = useQuery({
    queryKey: ["itemTests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/tests");
      return res.data;
    },
  });

  // banner System Specific delete

  const handlerTestDelete = (id) => {
    if (user && user?.email) {
      axiosSecure.delete(`/tests/${id}`).then((res) => {
        if (res.data.deletedCount > 0) {
          toast.success("Test Delete Successfully");

          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Login?",
        text: "Please Login and Add to Test !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <>
      <div className="overflow-x-auto w-full px-2">
        <table className="table">
          {/* head */}
          <thead className="bg-zinc-500 text-white text-[18px] h-[70px] rounded-lg">
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Status</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {itemTests?.map((item, idx) => (
              <tr key={item?._id} className="border-2 border-green-500">
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
                <td>
                  <Link to={`/updateTest/${item?._id}`}>
                    {" "}
                    <button className="btn btn-sm hover:bg-purple-600 rounded bg-green-700 text-white">
                      {" "}
                      Update{" "}
                    </button>{" "}
                  </Link>
                </td>

                <td>
                  <button
                    onClick={() => handlerTestDelete(item?._id)}
                    className="btn btn-sm hover:bg-purple-600 rounded bg-red-700 text-white"
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllTests;
