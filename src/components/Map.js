import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRegionInfo } from '../redux/mapSlice';
import FormInput from './FormInput';
import RegionInfo from './RegionInfo';
import OSMMap from './OSMMap';


const Map = () => {
  const dispatch = useDispatch();
  const selectedRegion = useSelector((state) => state.map.selectedRegion);
  const regionInfo = useSelector((state) => state.map.regionInfo);

  const handleRegionChange = (value) => {
    dispatch(setRegionInfo({ selectedRegion: value }));
  };

  const handleLoadData = () => {
    // Load data for the selected region
    // For demonstration purposes, we are using a hardcoded data object
    const regionData = {
      'United States': {
        currency: 'USD',
        speedUnit: 'mph',
        distanceUnit: 'miles',
        volumeUnit: 'gallons',
        timezone: 'America/New_York',
        coordinates: [37.0902, -95.7129], // Coordinates for the United States
      },
      India: {
        currency: 'INR',
        speedUnit: 'kmph',
        distanceUnit: 'kilometers',
        volumeUnit: 'liters',
        timezone: 'Asia/Kolkata',
        coordinates: [20.5937, 78.9629], // Coordinates for India
      },
      'United Kingdom': {
        currency: 'GBP',
        speedUnit: 'mph',
        distanceUnit: 'miles',
        volumeUnit: 'liters',
        timezone: 'Europe/London',
        coordinates: [55.3781, -3.4360], // Coordinates for the United Kingdom
      },
    };

    // Display the region info in a card
    dispatch(setRegionInfo({ regionInfo: regionData[selectedRegion] }));
  };

  return (
    <>
      <FormInput selectedRegion={selectedRegion} handleRegionChange={handleRegionChange} handleLoadData={handleLoadData} />
      <OSMMap />
      {regionInfo && <RegionInfo regionInfo={regionInfo} />}
    </>
  );
};

export default Map;
