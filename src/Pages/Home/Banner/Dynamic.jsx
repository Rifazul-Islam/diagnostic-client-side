import { Link } from "react-router-dom";

const Dynamic = ({ banner }) => {
  const { title, image, description, coupon, discount } = banner;
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold"> {title}</h1>
            <p className="mb-5 text-[20px]"> {description} </p>
            <button className="text-3xl text-white font-bold btn bg-pink-700 border-none">
              {" "}
              CouponCode : {coupon}{" "}
            </button>
            <p className="text-5xl font-bold my-2 text-white">
              {" "}
              {discount} % Discount{" "}
            </p>

            <Link to="/allTest">
              {" "}
              <button className="btn btn-primary mt-10">All Test </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dynamic;
