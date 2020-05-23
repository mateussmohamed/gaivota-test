import React, { useState } from "react";
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
  const [price, setPrice] = useState("");

  const handlePrice = (event) => setPrice(event.target.value);

  const farm = getFarm(params.farm_id);
  const currentMapGeoJSON = getFarmGeoJSON(params.farm_id);

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

          <div className="w-full flex flex-row mb-1">
            <label
              htmlFor="price"
              className="text-xl text-gray-500 capitalize pr-1 py-2"
            >
              Price:
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-teal-700 rounded w-32 px-2 py-2 text-teal-500 font-bold focus:outline-none focus:bg-white focus:border-teal-500"
              id="price"
              type="number"
              value={price}
              onChange={handlePrice}
            />
          </div>

          <div className="mt-6">
            <button
              className="bg-teal-500 hover:bg-teal-700 text-teal-100 font-bold py-4 px-10 rounded"
              onClick={() => {
                history.push(`${params.farm_id}/buy`);
              }}
            >
              Buy now
            </button>

            <button
              className="bg-teal-500 hover:bg-teal-700 text-teal-100 font-bold py-4 px-10 ml-2 rounded"
              onClick={() => {
                history.push(`${params.farm_id}/offer`);
              }}
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
