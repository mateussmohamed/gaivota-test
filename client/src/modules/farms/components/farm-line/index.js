import React, { memo } from "react";
import PropTypes from "prop-types";

const FarmLine = ({ label, value }) => (
  <div key={label} className="w-full flex flex-row">
    <span className="text-xl text-gray-500 pr-1 capitalize">{label}:</span>
    <span className="text-xl text-gray-700 font-bold">{value}</span>
  </div>
);

FarmLine.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default memo(FarmLine);
