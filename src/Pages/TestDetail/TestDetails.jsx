import { useLoaderData } from "react-router-dom";
import Payment from "../Payment/Payment";

const TestDetails = () => {
  const tests = useLoaderData();

  const { image, testName, price, date, description, slotsStart, slotsEnd } =
    tests;

  const handler = (e) => {
    e.preventDefault();
    const form = e.target;
    const digit = form.propr.value;
    const promoCode = parseInt(digit);

    console.log(promoCode);
    form.reset();
  };

  return (
    <div>
      <div className="rounded-lg">
        <img
          className="w-full pt-2 rounded-2xl "
          src="https://www.netsuite.com/portal/assets/img/business-articles/data-warehouse/bnr-diagnostic-analytics.jpg"
          alt=""
        />
      </div>

      <h1 className="text-4xl font-bold text-center my-10 text-blue-600 pt-20">
        {" "}
        Tests Details
      </h1>

      <div className="mt-10 border-2">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img className="w-[700px] p-1  h-[300px]" src={image} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{testName} </h2>
            <p>{description}</p>
            <h3 className="text-[17px] font-bold">Available date and Slots </h3>
            <div className="font-bold">
              <p>
                {" "}
                Slots: <span> {slotsStart}</span> - <span> {slotsEnd} </span>{" "}
              </p>
              <p> Date: {date}</p>
              <p> Price : {price} </p>
            </div>
            <div className="card-actions justify-end">
              <button
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className="btn btn-primary"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box ">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg my-5">Give Your PromoCode!</h3>
          <form onSubmit={handler}>
            <input
              type="text"
              placeholder="Give Your PromoCode"
              name="propr"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              className="btn btn-primary ml-4"
              type="submit"
              value="Submit"
            />
          </form>

          <div className="my-10">
            <h2 className="text-3xl text-green-600 my-5"> Please Payment</h2>

            <Payment tests={tests}></Payment>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default TestDetails;
