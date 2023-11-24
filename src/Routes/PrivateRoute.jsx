
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
const PrivateRoute = ({children}) => {
  const{user, loading} = useAuth();
  const location = useLocation()
  if(loading){
    return <div className='text-2xl text-center my-20'> Loading ..... </div>
  }

  if(user?.email){
    return children
  }
   
 return <Navigate  to="/login" state={{from: location}} replace />
};

export default PrivateRoute;