
import useAxiosSecure from "../../hooks/useAxiosSecure";
import AllTestCard from "./AllTestCard";
import { useEffect, useState } from "react";
import  './AllTest.css'


const AllTest = () => {
    const axiosSecure = useAxiosSecure();
    const[count ,setCount] = useState(0)
    const[itemsPerPage,setItemsPerPage] = useState(4)
    const[currentPage,setCurrentPage] = useState(0)
    const[allTests,setAllTests] = useState([])

   const numberOfPages = Math.ceil(count / itemsPerPage)
    const pages = [...Array(numberOfPages).keys()]

  



   const handlerItemsPerPage = (e)=>{
          const val = parseInt(e.target.value);
          setItemsPerPage(val)
          setCurrentPage(0)
    } 

    const handlerPrevPage = ()=>{
      if(currentPage > 0){
        setCurrentPage(currentPage - 1)
      }
    }

   const handlerNextPage = () =>{
      if(currentPage < pages.length -1){
        setCurrentPage(currentPage + 1)
      }
   }


   useEffect( ()=>{
    axiosSecure.get(`/tests/pagination?page=${currentPage}&size=${itemsPerPage}`)
    .then(res =>{
      setAllTests(res?.data)
    })
   },[currentPage,itemsPerPage])

   useEffect( ()=>{
    axiosSecure.get("/testCount")
    .then(res =>{
      setCount(res?.data?.count)
    })
   },[ axiosSecure])



// Search Field Value Get 
const handlerSearch =(e)=>{
  e.preventDefault();
  const form = e.target;
  const title = form.date.value;
   console.log(title);
  form.reset()
 
}

    return (
        <div>
           
            <div className='bg-blue-500 w-full h-60 rounded-lg flex justify-center items-center'>
            
            <form onSubmit={handlerSearch} className="w-full mx-auto flex justify-center"> 
            <input type="text" name="date" placeholder="Please Date Search demo,2023-12-27" className="input input-bordered w-full max-w-xs" />
             <button className="btn ml-2 cursor-pointer"><input type="submit" value="Search" /></button>
           </form>
            </div>

           <div className="my-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
             {
                allTests?.map(test => <AllTestCard key={test?._id} test={test} ></AllTestCard>)
             }

          </div>



          {/* pagination  */}
          <div className='pagination my-24'>
          <p className="text-3xl font-bold pb-10"> <span className="text-orange-600"> Pagination page Count</span> {currentPage} </p>
          <button className="pr-10" onClick={handlerPrevPage}> Prev </button>
         {
            pages?.map(page => <button
                
                className={ `${currentPage === page ? 'selected' : 'def' } btn rounded-full`} 

                onClick={()=>setCurrentPage(page)}  key={page}>{page}</button>)
         }
         <button className="pl-10"  onClick={handlerNextPage}>Next</button>
         <select value={itemsPerPage} onChange={handlerItemsPerPage} name="" id="">
            <option  value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            
         </select>
         </div>


        </div>
    );
};

export default AllTest;