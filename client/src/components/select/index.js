import React, { memo } from "react";
import PropTypes from "prop-types";

const Select = ({ label, options, value, onChange }) => {
  return (
    <div className="w-full mb-6 ">
      <label
        className="block tracking-wide text-gray-700 text-xl font-bold mb-2"
        htmlFor="select"
      >
        {label}
      </label>
      <div className=" relative">
        <select
          value={value.id ? value.id : value}
          onChange={onChange}
          className="block appearance-none w-full bg-white border border-teal-700 text-teal-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
          id="select"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-teal-700">
          <svg
            className="fill-current h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default memo(Select);
