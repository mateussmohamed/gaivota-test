import React, { useState, memo } from "react";
import PropTypes from "prop-types";

import FarmLine from "../farm-line";

const FarmInformation = ({ farm }) => {
  const [price, setPrice] = useState("");

  const handlePrice = (event) => setPrice(event.target.value);

  return (
    <div>
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
        value={farm.total_area * farm.yield_estimation}
      />
      <div className="w-full flex flex-row mb-1">
        <label
          htmlFor="price"
          className="text-xl text-gray-500 capitalize pr-1"
        >
          Price:
        </label>
        <input
          className="bg-white appearance-none border-2 border-teal-700 rounded w-24 px-2 text-teal-500 focus:outline-none focus:bg-white focus:border-teal-500"
          id="price"
          type="text"
          value={price}
          onChange={handlePrice}
        />
      </div>

      <div className="mt-6">
        <button className="bg-teal-500 hover:bg-teal-700 text-teal-100 py-2 px-8 rounded">
          Buy now
        </button>

        <button className="bg-teal-500 hover:bg-teal-700 text-teal-100 py-2 px-8 ml-2 rounded">
          BID
        </button>
      </div>
    </div>
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
