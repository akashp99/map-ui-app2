// src/components/Sidebar.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Menu, Switch } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons';
import { toggleNightMode } from '../redux/nightModeSlice'; // Import the toggleNightMode action

const Sidebar = () => {
  const dispatch = useDispatch();
  const isNightMode = useSelector((state) => state.nightMode.isNightMode);

  const toggleCollapse = () => {
    // ... Your existing code for collapsing the sidebar
  };

  const handleNightModeToggle = (checked) => {
    dispatch(toggleNightMode()); // Dispatch the action to toggle night mode
  };

  return (
    <nav style={{ width: '200px', height: '100vh', background: isNightMode ? '#001529' : '#fff' }}>
      {isNightMode ? (
        <MenuUnfoldOutlined onClick={toggleCollapse} style={{ fontSize: '24px', color: 'white', margin: '20px' }} />
      ) : (
        <MenuFoldOutlined onClick={toggleCollapse} style={{ fontSize: '24px', color: 'black', margin: '20px' }} />
      )}

      <Menu theme={isNightMode ? 'dark' : 'light'} mode="vertical" defaultSelectedKeys={['1']} style={{ marginTop: '20px' }}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          Profile
        </Menu.Item>
        {/* Add more sidebar items here */}
      </Menu>

      <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
        <span style={{ color: isNightMode ? 'white' : 'black', marginRight: '8px' }}>Night Mode</span>
        <Switch checked={isNightMode} onChange={handleNightModeToggle} />
      </div>
    </nav>
  );
};

export default Sidebar;
