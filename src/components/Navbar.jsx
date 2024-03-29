import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/logo.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWdith);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" className="nav-icon" />
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoCave</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        ></Button>
      </div>
      {activeMenu && (
        <Menu theme="transparent">
          <Menu.Item className="nav-links" icon={<HomeOutlined />}>
            <Link to="/" className="nav-links">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item className="nav-links" icon={<FundOutlined />}>
            <Link to="/Cryptocurrencies" className="nav-links">
              Cryptocurrencies
            </Link>
          </Menu.Item>
          {/* <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item> */}
          <Menu.Item className="nav-links" icon={<BulbOutlined />}>
            <Link to="/news" className="nav-links">
              News
            </Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
