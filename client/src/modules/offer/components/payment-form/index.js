import React from "react";
import PropTypes from "prop-types";
import { Choose } from "react-extras";

import Input from "../../../../components/input";

const PaymentForm = ({ paymentType }) => {
  return (
    <Choose>
      <Choose.When condition={paymentType === "paypal"}>
        <Input
          key="username"
          name="username"
          type="text"
          label="Paypal Username"
          placeholder="gaivota"
          validate={{ required: "Required field." }}
        />
        <Input
          key="password"
          name="password"
          type="password"
          label="Paypal Password"
          placeholder="******"
          validate={{ required: "Required field." }}
        />
      </Choose.When>
      <Choose.When condition={paymentType === "card"}>
        <Input
          key="cardNumber"
          name="cardNumber"
          type="number"
          label="Card Number"
          placeholder="5191365593217206"
          autoComplete="off"
          validate={{ required: "Required field." }}
        />
        <Input
          key="name"
          name="name"
          type="text"
          label="Name"
          placeholder="Gaivota Test LTDA"
          validate={{ required: "Required field." }}
        />
      </Choose.When>
    </Choose>
  );
};

PaymentForm.propTypes = {
  paymentType: PropTypes.string,
};

PaymentForm.defaultProps = {
  paymentType: "card",
};

export default PaymentForm;
