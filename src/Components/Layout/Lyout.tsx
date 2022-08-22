import React from 'react';
import 'antd/dist/antd.css';
// import '.style.css';
import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu} from "antd";
import { NavLink } from 'react-router-dom';
const { Header, Content, Footer, Sider } =Layout;
const Mainmenu = () => (
  <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <NavLink to="/Dashboard">
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['4']}
        items={[UserOutlined].map(
          (icon, index) => ({
            key: String(index + 1),
            icon: React.createElement(icon),
            label: `Dashboard`,
          }),
        )}
      />
      </NavLink>
      <NavLink to="/Student">
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['4']}
        items={[UserOutlined].map(
          (icon, index) => ({
            key: String(index + 1),
            icon: React.createElement(icon),
            label: `Students`,
          }),
        )}
      />
      </NavLink>
    </Sider>
    <Layout>
      <Header
        className="site-layout-sub-header-background"
        style={{
          padding: 0,
        }}
      />
      <Content
        style={{
          margin: '24px 16px 0',
        }}
      >
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 360,
          }}
        >
        </div>
      </Content>
     
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        
      </Footer>
    </Layout>
  </Layout>
);

export default Mainmenu;