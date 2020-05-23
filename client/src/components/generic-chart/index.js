import React, { useState } from "react";
import PropTypes from "prop-types";

import Select from "../select";

import BarChart from "./bar";
import LineChart from "./line";

const GenericChart = ({ chartSelector, data, dataValues, dataKeys }) => {
  const [selectedChart, setChart] = useState(chartSelector.options[0]);

  const chartOptions = chartSelector.options.map((opt) => ({
    label: opt.name,
    value: opt.id,
  }));

  const handleSelectOption = (event) => {
    setChart(
      chartSelector.options.find(
        (opt) => opt.id.toString() === event.target.value.toString()
      )
    );
  };

  const chartProps = { data, dataValues, dataKeys };

  return (
    <div className="container">
      <Select
        label={chartSelector.label}
        options={chartOptions}
        value={selectedChart.id}
        onChange={handleSelectOption}
      />

      {selectedChart.chart_type === "line" && <LineChart {...chartProps} />}
      {selectedChart.chart_type === "bar" && <BarChart {...chartProps} />}
    </div>
  );
};

GenericChart.propTypes = {
  chartSelector: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  dataValues: PropTypes.array.isRequired,
  dataKeys: PropTypes.array.isRequired,
};

export default GenericChart;
