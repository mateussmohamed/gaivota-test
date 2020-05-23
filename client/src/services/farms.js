import farmsData from "../data/farms.json";
import farmsGeoJSON from "../data/farmsGeoJSON.json";

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
