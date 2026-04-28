import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import './nav.scss';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Navigation = ({ onNavClick }) => (
  <div className="nav-bar">
    <div className="logo">
      <img
        src={`${window.location.origin}/images/pizza-logo.png`}
        alt="logo"
        id="pizza-logo"
      />
      <span className="logo-text">
        <strong>pizza</strong>CRM
      </span>
    </div>
    <Menu
      theme="light"
      id="main-menu"
      defaultSelectedKeys={[window.location.pathname]}
    >
      <Menu.Item key="/">
        <Link to="/" onClick={() => onNavClick('Dashboard')}>
          <Icon type="home" />
          <span className="nav-text">Dashboard</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="/accounts">
        <Link to="/accounts" onClick={() => onNavClick('Accounts')}>
          <Icon className="nav-icon" type="team" />
          <span className="nav-text">Accounts</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="/contacts">
        <Link to="/contacts" onClick={() => onNavClick('Contacts')}>
          <Icon className="nav-icon" type="contacts" />
          <span className="nav-text">Contacts</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="/opportunities">
        <Link to="/opportunities" onClick={() => onNavClick('Opportunities')}>
          <Icon className="nav-icon" type="folder-open" />
          <span className="nav-text">Opportunities</span>
        </Link>
      </Menu.Item>
      <Menu.Item
        key="/mobile"
        style={{
          bottom: '10px',
          position: 'absolute',
        }}
      >
        <Link to="/mobile" onClick={() => onNavClick('Mobile')}>
          <Icon type="mobile" />
          <span clas
