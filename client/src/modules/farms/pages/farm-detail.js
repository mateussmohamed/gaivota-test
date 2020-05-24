import React from "react";
import { useParams, useHistory } from "react-router-dom";

import Layout from "../../../components/layout";
import GenericChart from "../../../components/generic-chart";

import { getFarm, getFarmGeoJSON } from "../../../services/farms";

import chartSelector from "../../../data/chart_selector.json";
import chartData from "../../../data/farms_ndvi.json";

import FarmMap from "../components/farm-map";
import FarmInformation from "../components/farm-information";

const parseValue = (value) => {
  if (typeof value === "string") {
    return parseFloat(value.replace(",", "."));
  }

  return value;
};

const parsedChartData = chartData.map((value) => ({
  date: new Date(value.date).toLocaleDateString("pt-BR", {
    dateStyle: "short",
  }),
  ndvi_221: parseValue(value.ndvi_221),
  ndvi_231: parseValue(value.ndvi_231),
  ndvi_271: parseValue(value.ndvi_271),
}));

const FarmDetail = () => {
  const params = useParams();
  const history = useHistory();

  const farm = getFarm(params.farm_id);
  const currentMapGeoJSON = getFarmGeoJSON(params.farm_id);

  const handleTo = (route) => () => {
    history.push(route, { farm });
  };

  return (
    <Layout>
      <div className="flex mb-4 bg-gray-200">
        <div className="w-3/4 p-4">
          <FarmMap geoJson={currentMapGeoJSON} height={330} />

          <div className="mt-4" />

          <GenericChart
            data={parsedChartData}
            dataValues={["ndvi_231"]}
            dataKeys={["date"]}
            chartSelector={chartSelector}
          />
        </div>
        <div className="w-1/2 p-4">
          <FarmInformation farm={farm} />

          <div className="mt-6">
            <button
              className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
              onClick={handleTo("/app/payment")}
            >
              Buy now
            </button>

            <button
              className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleTo("/app/offer")}
            >
              BID
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FarmDetail;
