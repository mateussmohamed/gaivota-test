import farmsData from "../data/farms.json";
import farmsGeoJSON from "../data/farmsGeoJSON.json";
import ndviData from "../data/farms_ndvi.json";
import precipitationData from "../data/farms_precipitation.json";

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

export const getFarmNdvi = () => {
  return parsedData(ndviData);
};

export const getFarmPrecipitation = () => {
  return parsedData(precipitationData);
};
