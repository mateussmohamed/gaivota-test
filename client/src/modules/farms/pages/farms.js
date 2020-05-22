import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Layout from "../../../components/layout";

import FarmMap from "../components/farm-map";
import FarmInformation from "../components/farm-information";
import FarmSelect from "../components/farm-select";

import { getFarms, getFarm, getFarmGeoJSON } from "../../../services/farms";

const Farms = () => {
  const farms = getFarms();

  const history = useHistory();
  const [selectedFarm, setFarm] = useState(farms[1].farm_id);

  const farmOptions = farms.map((farm) => ({
    label: farm.name,
    value: farm.farm_id,
  }));

  const currentFarm = getFarm(selectedFarm);
  const currentMapGeoJSON = getFarmGeoJSON(selectedFarm);

  const handleSelectFarm = (event) => {
    setFarm(event.target.value);
  };

  return (
    <Layout>
      <div className="flex mb-4 bg-gray-200">
        <div className="w-3/4 p-4">
          <FarmMap geoJson={currentMapGeoJSON} />
        </div>
        <div className="w-1/2 p-4">
          <FarmSelect
            options={farmOptions}
            value={selectedFarm}
            onChange={handleSelectFarm}
          />

          <FarmInformation farm={currentFarm} />

          <div className="mt-6">
            <button
              className="bg-teal-500 hover:bg-teal-700 text-teal-100 font-bold py-4 px-10 rounded"
              onClick={() => history.push(`farm/${selectedFarm}`)}
            >
              View Farm
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Farms;
