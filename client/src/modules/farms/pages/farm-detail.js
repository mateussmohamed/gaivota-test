import React from "react";
import { useParams, useHistory } from "react-router-dom";

import Layout from "../../../components/layout";
import GenericChart from "../../../components/generic-chart";

import { getFarm, getFarmGeoJSON } from "../../../services/farms";

import FarmMap from "../components/farm-map";
import FarmInformation from "../components/farm-information";

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
      <div className="bg-gray-200">
        <div className="flex mb-4">
          <div className="w-3/4 p-4">
            <FarmMap
              name={farm.name}
              geoJson={currentMapGeoJSON}
              height={330}
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
        <div className="w-full p-4">
          <GenericChart farm={farm} />
        </div>
      </div>
    </Layout>
  );
};

export default FarmDetail;
