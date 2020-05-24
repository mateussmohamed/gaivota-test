import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage, useFormContext } from "react-hook-form";

import { classNames } from "react-extras";

const Input = ({ label, name, placeholder, type, validate, autoComplete }) => {
  const { register, errors } = useFormContext();

  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="email"
      >
        {label}
      </label>
      <input
        className={classNames(
          "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
          {
            "border-red-500": errors[name],
          }
        )}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        ref={register({ ...validate })}
      />

      <ErrorMessage errors={errors} name={name}>
        {({ message }) => (
          <p className="text-red-500 text-xs italic mt-2">{message}</p>
        )}
      </ErrorMessage>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  autoComplete: PropTypes.string,
  placeholder: PropTypes.string,
  validate: PropTypes.object,
};

Input.defaultProps = {
  type: "text",
};

export default Input;
