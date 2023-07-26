import React from 'react';
import { useSelector } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const OSMMap = () => {
  const mapData = useSelector((state) => state.map);

  return (
    <MapContainer
      center={mapData.coordinates}
      zoom={5}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={mapData.coordinates}>
        <Popup>{mapData.selectedRegion}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default OSMMap;
