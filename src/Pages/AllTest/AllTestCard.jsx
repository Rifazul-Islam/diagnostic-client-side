import { split } from "postcss/lib/list";


const AllTestCard = ({test}) => {
    const{image,testName, price,slots,date,description } = test
    return (
        <>
            <div className="card card-compact w-96 h-[500px] bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{testName}!</h2>
                    <p>{ description?.length > 50 ? (`${description.slice(0, 50)}...`)  : description}</p>
                     <h3 className="text-[17px] font-bold">Available date and Slots </h3>
                    <div className="font-bold">
                    <p> Slots:  {slots} </p>
                     <p> Date: {date}</p>
                      <p> Price : {price} </p>
                    </div>
                    <div className="card-actions justify-end">
                    <button className="btn bg-success">Details</button>
                    </div>
                </div>
                </div>
        </>
    );
};

export default AllTestCard;