import React from 'react';
import { Provider } from 'react-redux';
import { Layout } from 'antd';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Map from './components/Map';
import store from './redux/store';
import './styles/antd.css';
import './index.css';

const { Content } = Layout;

function App() {
  return (
    <Provider store={store}>
      <Layout>
          <Header />
        <Sidebar />
        <Layout>
          <Content style={{ padding: '20px' }}>
            <Map />
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </Provider>
  );
}

export default App;


