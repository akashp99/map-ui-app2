import React from 'react';
import { Select, Button } from 'antd';


const { Option } = Select;


const FormInput = ({ selectedRegion, handleRegionChange, handleLoadData }) => {
  return (
    <div>
      <Select
        value={selectedRegion}
        style={{ width: 200, marginBottom: '8px'  }}
        onChange={handleRegionChange}
      >
        <Option value="United States">United States</Option>
        <Option value="India">India</Option>
        <Option value="United Kingdom">United Kingdom</Option>
      </Select>
      <Button type="primary" onClick={handleLoadData}>
        Load
      </Button>
    </div>
  );
};

export default FormInput;
