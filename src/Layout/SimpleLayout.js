import React from 'react';
import { Outlet } from 'react-router-dom';
import SimpleNavbar from '../features/Navbar/SimpleNavbar';

const SimpleLayout = () => {
  return (
    <div>
      <SimpleNavbar />
      <Outlet />
    </div>
  );
};

export default SimpleLayout;