import FeaturedCard from "./FeaturedCard";


const Featured = () => {
    return (
        <div className="mt-20">
                 <h2 className="text-center text-3xl font-bold text-blue-600"> Our All Featured</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">

              <FeaturedCard></FeaturedCard>
              <FeaturedCard></FeaturedCard>
              <FeaturedCard></FeaturedCard>
              </div>
       
        </div>
    );
};

export default Featured;