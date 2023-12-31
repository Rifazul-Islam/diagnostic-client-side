import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useAdmin = () => {
 const axiosSecure = useAxiosSecure();
 const {user,loading} = useAuth()

const {data: isAdmin } = useQuery({
enabled: !loading && Boolean(user?.email),

    queryKey: [user?.email, 'isAdmin'],
    queryFn : async()=>{
        const res = await axiosSecure.get(`/users/admin/${user?.email}`)
        console.log(res.data );
        return res.data.admin
    }
})
    

return [isAdmin]
};

export default useAdmin;