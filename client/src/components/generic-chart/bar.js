import React from "react";
import PropTypes from "prop-types";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart as RBarChart,
  Bar,
} from "recharts";

const BarChart = ({ data, dataValues, dataKeys }) => {
  return (
    <RBarChart width={735} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      {dataKeys.map((key, index) => (
        <XAxis key={`${key}-${index}`} dataKey={key} />
      ))}
      <YAxis />
      <Tooltip />
      <Legend />
      {dataValues.map((value, index) => (
        <Bar key={`${value}-${index}`} dataKey={value} />
      ))}
    </RBarChart>
  );
};

BarChart.propTypes = {
  data: PropTypes.array.isRequired,
  dataValues: PropTypes.array.isRequired,
  dataKeys: PropTypes.array.isRequired,
};

export default BarChart;
