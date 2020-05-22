import React from "react";
import PropTypes from "prop-types";
import { Map, GeoJSON, TileLayer } from "react-leaflet";
import L from "leaflet";

const FarmMap = ({ geoJson }) => {
  const bounds = L.geoJson(geoJson).getBounds();

  return (
    <Map bounds={bounds} style={{ height: 420 }}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON data={geoJson} />
    </Map>
  );
};

FarmMap.propTypes = {
  geoJson: PropTypes.object,
};

export default FarmMap;
