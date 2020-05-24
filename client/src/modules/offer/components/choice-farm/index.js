import React from "react";
import { useHistory } from "react-router-dom";

import Layout from "../../../../components/layout";

const ChoiceFarm = () => {
  const history = useHistory();

  const handleToFarms = () => {
    history.push("/app/farms");
  };

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <div className="w-full text-center text-3xl font-bold font-sans px-8 pt-8 mt-4">
          Choice one farm
        </div>
        <button
          onClick={handleToFarms}
          className="w-1/6 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          View Farms
        </button>
      </div>
    </Layout>
  );
};

export default ChoiceFarm;
