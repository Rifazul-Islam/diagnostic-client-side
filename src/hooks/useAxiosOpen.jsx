import axios from "axios";

const useAxiosOpen = () => {
  const axiosOpen = axios.create({
    baseURL: "https://diagnostic-server-side.vercel.app",
  });
  return axiosOpen;
};

export default useAxiosOpen;
