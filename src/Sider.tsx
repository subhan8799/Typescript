import React from "react";
/* @ts-ignore */
import { Menu, Layout, Icon } from "antd";

const { SubMenu } = Menu;

export default function Sider(props:any) {
  const { handleClick } = props;
  return (
    <Layout.Sider>
      {/* @ts-ignore */}
      <Menu theme="dark" mode="inline" openKeys={"sub1"}>
      {/* @ts-ignore */}
        <SubMenu
          key="sub1"
          title={
            <span>
      {/* @ts-ignore */}
              <Icon type="mail" />
              <span>Navigation One</span>
            </span>
          }
        >
          <Menu.Item key="1" onClick={handleClick}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" onClick={handleClick}>
            Option 2
          </Menu.Item>
          <Menu.Item key="3" onClick={handleClick}>
            Option 3
          </Menu.Item>
          <Menu.Item key="4" onClick={handleClick}>
            Option 4
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Layout.Sider>
  );
}
