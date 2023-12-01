import { Link } from "react-router-dom";



const AllTestCard = ({test}) => {
    const{image,testName, price,slots,date,description,slotsStart,slotsEnd,_id } = test
    return (
        <>
            <div className="card card-compact  h-[500px] bg-base-100 shadow-xl">
                <figure><img className="w-full p-1  h-60" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title  text-orange-500 font-bold text-[20px]">{testName}!</h2>
                    <p>{ description?.length > 50 ? (`${description.slice(0, 50)}...`)  : description}</p>
                     <h3 className="text-[17px] font-bold">Available date and Slots </h3>
                    <div className="font-bold">
                    <p> Slots:  <span> {slotsStart}</span> - <span> {slotsEnd} </span> </p>
                     <p> Date: {date}</p>
                      <p> Price : {price} </p>
                    </div>
                    <div className="card-actions justify-end">
                  <Link to={`/testDetail/${_id}`}>  <button className="btn bg-success">Details</button> </Link> 
                    </div>
                </div>
                </div>
        </>
    );
};

export default AllTestCard;