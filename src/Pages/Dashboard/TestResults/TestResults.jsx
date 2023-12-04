import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const TestResults = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: reports = [] } = useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/appointments/${user?.email}`);
      return res.data;
    },
  });
  return (
    <div className="">
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
                <th>Report</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {reports?.map((item, idx) => (
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
                    <button className="btn btn-sm hover:bg-purple-600 rounded bg-primary text-white">
                      {" "}
                      Pending{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TestResults;
