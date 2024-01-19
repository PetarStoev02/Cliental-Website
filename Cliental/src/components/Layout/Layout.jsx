import './Layout.css';
import React from 'react';

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
  return (<div className="layout">{children}</div>);
};

export default Layout;
