import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_GetWay_PK);
const Payment = ({ tests }) => {
  return (
    <div className="w-96 h-56 border-2 p-3 border-blue-500">
      <Elements stripe={stripePromise}>
        <CheckoutForm tests={tests}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
