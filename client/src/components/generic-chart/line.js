import React from "react";
import PropTypes from "prop-types";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart as RLineChart,
  Line,
} from "recharts";

const LineChart = ({ data, dataValues, dataKeys }) => {
  return (
    <RLineChart width={735} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      {dataKeys.map((key, index) => (
        <XAxis key={`${key}-${index}`} dataKey={key} />
      ))}
      <YAxis />
      <Tooltip />
      <Legend />
      {dataValues.map((value, index) => (
        <Line key={`${value}-${index}`} dataKey={value} />
      ))}
    </RLineChart>
  );
};

LineChart.propTypes = {
  data: PropTypes.array.isRequired,
  dataValues: PropTypes.array.isRequired,
  dataKeys: PropTypes.array.isRequired,
};

export default LineChart;
