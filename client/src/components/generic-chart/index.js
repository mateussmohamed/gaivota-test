import React, { useState } from "react";
import PropTypes from "prop-types";
import { Choose } from "react-extras";

import Select from "../select";

import BarChart from "./bar";
import LineChart from "./line";

import chartSelector from "../../data/chart_selector.json";

import { getFarmChartData } from "../../services/farms";

const GenericChart = ({ farm }) => {
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

  const chartProps = {
    data: getFarmChartData(selectedChart.name),
    dataValues: [`${selectedChart.name}_${farm.farm_id}`],
    dataKeys: ["date"],
    min: selectedChart.min_value,
    max: selectedChart.max_value,
  };

  return (
    <div className="w-full">
      <div className="w-1/5">
        <Select
          label={chartSelector.label}
          options={chartOptions}
          value={selectedChart.id}
          onChange={handleSelectOption}
        />
      </div>

      <Choose>
        <Choose.When condition={selectedChart.chart_type === "line"}>
          <LineChart {...chartProps} />
        </Choose.When>

        <Choose.When condition={selectedChart.chart_type === "bar"}>
          <BarChart {...chartProps} />
        </Choose.When>
      </Choose>
    </div>
  );
};

GenericChart.propTypes = {
  farm: PropTypes.object.isRequired,
  // chartSelector: PropTypes.object.isRequired,
  // data: PropTypes.array.isRequired,
  // dataValues: PropTypes.array.isRequired,
  // dataKeys: PropTypes.array.isRequired,
};

export default GenericChart;
