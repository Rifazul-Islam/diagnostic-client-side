import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const CheckoutForm = ({ tests }) => {
  const { image, testName, price, date, description, slotsStart, slotsEnd } =
    tests;

  const stripe = useStripe();
  const [clientSecret, setClientSecret] = useState("");
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const paymentPrice = parseFloat(price);
  const [error, setError] = useState("");
  const [transitionId, setTransitionId] = useState("");

  const { user } = useAuth();

  useEffect(() => {
    if (paymentPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: paymentPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, []);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error check", error);
      setError(error.message);
    } else {
      console.log("PaymentMethod success", paymentMethod);
      setError("");
    }

    // Confirm Payment System
    // it search confirmcardpayment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("Confirm Error", confirmError);
    } else {
      // console.log("payment Intent", paymentIntent);
      if (paymentIntent?.status === "succeeded") {
        // toast.success("Your Payment SuccessFully");

        const appointment = {
          userEmail: user?.email,
          image,
          testName,
          price,
          date,
          description,
          slotsStart,
          slotsEnd,
          status: "pending",
        };
        axiosSecure.post("/appointments", appointment).then((res) => {
          console.log(res?.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Payment Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      } else {
        setTransitionId(" ");
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-sm btn-primary my-6 mt-28"
        type="submit"
        disabled={!stripe}
      >
        Pay
      </button>

      <p className="text-red-500 font-bold"> {error} </p>
      {transitionId && (
        <p className="text-green-400 font-bold">
          {" "}
          Your Transition Id : {transitionId}{" "}
        </p>
      )}
    </form>
  );
};

export default CheckoutForm;
