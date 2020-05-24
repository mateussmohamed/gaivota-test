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

const BarChart = ({ data, dataValues, dataKeys, min, max }) => {
  return (
    <RBarChart width={735} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      {dataKeys.map((key, index) => (
        <XAxis key={`${key}-${index}`} dataKey={key} domain={[min, max]} />
      ))}
      <YAxis />
      <Tooltip />
      <Legend />
      {dataValues.map((value, index) => (
        <Bar key={`${value}-${index}`} fill="#8884d8" dataKey={value} />
      ))}
    </RBarChart>
  );
};

BarChart.propTypes = {
  data: PropTypes.array.isRequired,
  dataValues: PropTypes.array.isRequired,
  dataKeys: PropTypes.array.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default BarChart;
