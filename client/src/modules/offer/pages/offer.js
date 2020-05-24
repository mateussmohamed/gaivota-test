import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm, FormContext } from "react-hook-form";
import { toast } from "react-toastify";

import Layout from "../../../components/layout";
import Input from "../../../components/input";

import PaymentForm from "../components/payment-form";
import ChoiceFarm from "../components/choice-farm";

const Offer = ({ history }) => {
  const {
    location: { state },
  } = history;

  const [paymentType, setPaymentType] = useState("card");
  const formMethods = useForm();

  const fields = formMethods.watch(["price", "yield"]);
  const total = fields.price && fields.yield ? fields.price * fields.yield : 0;

  const handlePaymentType = (type) => () => {
    setPaymentType(type);
  };

  const handleOffer = () => {
    toast.success("Offer sent.");

    history.push("/app/farms");
  };

  if (!state) {
    return <ChoiceFarm />;
  }

  return (
    <FormContext {...formMethods}>
      <Layout>
        <div className="flex flex-col">
          <div className="w-full text-3xl font-bold font-sans px-8 pt-8">
            {state.farm.name} - Offer BID
          </div>
          <form
            className="flex"
            onSubmit={formMethods.handleSubmit(handleOffer)}
          >
            <div className="w-1/2 pt-4 px-8">
              <Input
                name="price"
                type="number"
                label="Price"
                placeholder="$/sac"
                validate={{ required: "Required field." }}
              />
              <Input
                name="yield"
                type="number"
                label="Yield"
                placeholder="sac"
                validate={{ required: "Required field." }}
              />

              <div className="w-full text-xl font-bold font-sans mb-4">
                Total ${total}
              </div>
              <hr />

              <div className="flex flex-row">
                <button
                  onClick={handlePaymentType("paypal")}
                  className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Paypal
                </button>
                <button
                  onClick={handlePaymentType("card")}
                  className="flex-1 ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Credit Card
                </button>
              </div>
            </div>
            <div className="w-1/2 pt-4 px-8">
              <PaymentForm paymentType={paymentType} />

              <button
                className="w-full bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Pay
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </FormContext>
  );
};

Offer.propTypes = {
  history: PropTypes.object,
};

export default Offer;
