import farmsData from "../data/farms.json";
import farmsGeoJSON from "../data/farmsGeoJSON.json";
import ndviData from "../data/farms_ndvi.json";
import precipitationData from "../data/farms_precipitation.json";
import exampleData from "../data/farms_example.json";

const CHARTS_DATA = {
  ndvi: ndviData,
  precipitation: precipitationData,
  example: exampleData,
};

const parseValue = (value) => {
  if (typeof value === "string") {
    return parseFloat(value.replace(",", "."));
  }

  return value;
};

const parsedData = (data) => {
  return data.map((value) => {
    return Object.keys(value).reduce((acc, curr) => {
      return {
        ...acc,
        date: value.date,
        [curr]: parseValue(value[curr]),
      };
    }, {});
  });
};

export const getFarms = () => {
  return farmsData;
};

export const getFarm = (farm_id) => {
  return farmsData.find(
    (farm) => farm.farm_id.toString() === farm_id.toString()
  );
};

export const getFarmGeoJSON = (farm_id) => {
  return farmsGeoJSON.find(
    (farm) => farm.farm_id.toString() === farm_id.toString()
  ).data;
};

export const getFarmChartData = (name) => {
  return parsedData(CHARTS_DATA[name]);
};
