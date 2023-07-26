// src/components/Header.js
import React from 'react';
import { Button } from 'antd';

const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px', background: '#001529' }}>
      <Button type="link" style={{ color: 'white', fontSize:'18px', marginRight: '16px' }}>
        Login
      </Button>
      <Button type="link" style={{ color: 'white',fontSize:'18px' }}>
        Profile
      </Button>
    </header>
  );
};

export default Header;
