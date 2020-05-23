import React from "react";
import PropTypes from "prop-types";
import { Map, GeoJSON, TileLayer } from "react-leaflet";
import L from "leaflet";

const FarmMap = ({ geoJson, height }) => {
  const bounds = L.geoJson(geoJson).getBounds();

  return (
    <Map bounds={bounds} style={{ height }}>
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
  height: PropTypes.number,
};

FarmMap.defaultProps = {
  height: 420,
};

export default FarmMap;
