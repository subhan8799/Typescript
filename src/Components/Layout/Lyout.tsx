import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Student from '../Students/Student';
import { BrowserRouter } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const MainMenu: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <BrowserRouter>
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
        >
          <Menu.Item key="1">
            <span>Dashboard</span>
            <Link to="/dashboard" />
          </Menu.Item>
          <Menu.Item key="2">
            <span>student</span>
            <Link to="/student" />
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '9px 0px',
            padding: '0px',
            minHeight: 280,
          }}
        >
          <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/student" element={<Student />}></Route>
          </Routes>
        </Content>
      </Layout>
    </Layout>
    </BrowserRouter>
  );
};
export default MainMenu;
