import React from 'react';
import { Card } from 'antd';

const RegionInfo = ({ regionInfo }) => {
  return (
    <Card style={{ width: 300, marginTop: '8px' }}>
      <p>Currency: {regionInfo.currency}</p>
      <p>Speed Unit: {regionInfo.speedUnit}</p>
      <p>Distance Unit: {regionInfo.distanceUnit}</p>
      <p>Volume Unit: {regionInfo.volumeUnit}</p>
      <p>Timezone: {regionInfo.timezone}</p>
    </Card>
  );
};

export default RegionInfo;
