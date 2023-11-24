import React from 'react';

const Dynamic = ({item}) => {
    const {title,image,description,coupon,discount} = item
    return (
    <>
      <div className="hero min-h-screen" style={{backgroundImage: `url(${image})`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold"> {title}</h1>
                <p className="mb-5 text-[17px]"> {description} </p>
                <p className='text-3xl text-black font-bold'> CouponCode : {coupon} </p>
                <p className='text-5xl font-bold my-1'> {discount} % Discount  </p>


                <button className="btn btn-primary mt-10">All Test </button>
                </div>
            </div>
            </div>
        </>
    );
};

export default Dynamic;