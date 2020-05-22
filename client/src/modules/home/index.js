import React, { useState } from "react";

import Layout from "../../components/layout";
import LoginButton from "./components/login-button";
import FarmMap from "./components/farm-map";
import FarmInformation from "./components/farm-information";
import FarmSelect from "./components/farm-select";

import farmsData from "../../data/farms.json";
import farmsGeoJSON from "../../data/farmsGeoJSON.json";

const Home = () => {
  const [selectedFarm, setFarm] = useState(farmsData[0].farm_id);

  const farmOptions = farmsData.map((farm) => ({
    label: farm.name,
    value: farm.farm_id,
  }));

  const findFarm = (farm) =>
    farm.farm_id.toString() === selectedFarm.toString();

  const currentFarm = farmsData.find(findFarm);
  const currentMap = farmsGeoJSON.find(findFarm);

  const handleSelectFarm = (event) => {
    setFarm(event.target.value);
  };

  return (
    <Layout headerActions={<LoginButton />}>
      <div className="flex mb-4 bg-gray-200">
        <div className="w-3/4 p-4">
          <FarmMap geoJson={currentMap.data} />
        </div>
        <div className="w-1/2 p-4">
          <FarmSelect
            options={farmOptions}
            value={selectedFarm}
            onChange={handleSelectFarm}
          />
          <FarmInformation farm={currentFarm} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
