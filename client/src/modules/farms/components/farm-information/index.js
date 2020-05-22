import React, { memo } from "react";
import PropTypes from "prop-types";

import FarmLine from "../farm-line";

const FarmInformation = ({ farm }) => {
  return (
    <>
      <FarmLine label="Name" value={farm.name} />
      <FarmLine label="Culture" value={farm.culture} />
      <FarmLine label="Variety" value={farm.variety} />
      <FarmLine label="Area" value={`${farm.total_area} ha`} />
      <FarmLine
        label="Yield estimation"
        value={`${farm.yield_estimation} ton/ha`}
      />
      <FarmLine
        label="Total area"
        value={`${farm.total_area * farm.yield_estimation} ha`}
      />
    </>
  );
};

FarmInformation.propTypes = {
  farm: PropTypes.shape({
    name: PropTypes.string,
    culture: PropTypes.string,
    variety: PropTypes.string,
    yield_estimation: PropTypes.number,
    total_area: PropTypes.number,
  }).isRequired,
};

export default memo(FarmInformation);
