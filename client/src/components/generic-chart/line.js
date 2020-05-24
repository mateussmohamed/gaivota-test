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

const LineChart = ({ data, dataValues, dataKeys, min, max }) => {
  return (
    <RLineChart width={735} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      {dataKeys.map((key, index) => (
        <XAxis key={`${key}-${index}`} dataKey={key} domain={[min, max]} />
      ))}
      <YAxis />
      <Tooltip />
      <Legend />
      {dataValues.map((value, index) => (
        <Line key={`${value}-${index}`} stroke="#82ca9d" dataKey={value} />
      ))}
    </RLineChart>
  );
};

LineChart.propTypes = {
  data: PropTypes.array.isRequired,
  dataValues: PropTypes.array.isRequired,
  dataKeys: PropTypes.array.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default LineChart;
