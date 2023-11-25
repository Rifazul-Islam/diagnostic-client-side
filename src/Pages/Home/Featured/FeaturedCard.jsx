

const FeaturedCard = ({feature}) => {
  
    const {image,testName} = feature
    return (
        <div>
                <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img className='h-60 w-full' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title capitalize text-orange-700 text-2xl font-bold">{testName} !</h2>
                    
                   
                </div>
                </div>
        </div>
    );
};

export default FeaturedCard;