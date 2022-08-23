
import React from 'react';
import 'antd/dist/antd.css';
import { UserOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu} from "antd";
import { NavLink } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom';
import Signup from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn'; 
import Student from '../Students/Student';
import SignUp from '../SignUp/SignUp';
const { Header, Content, Footer, Sider } =Layout;
const Mainmenu = () => {
    const navigate = useNavigate();
    const selectkey = useLocation().pathname;
    const hightlight = () => {
        if(selectkey==='/student'){
            return ['1'];
        }
        return ['2'];
    }
    return (
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
            <Menu
              theme="dark"
              mode="inline"
              selectedKeys={hightlight()}
              defaultSelectedKeys={['1']}
              items={[
                {key:'1', onClick: () => {navigate('/student')}},
              
              ]}
            />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['2']}
              items={[
                {key:'2', onClick: () => {navigate('/dashboard')}}
              ]}
            />
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
      <Routes>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/student" element={<Student />}></Route>
      </Routes>
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
      
}
export default Mainmenu;