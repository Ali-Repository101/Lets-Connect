import React from 'react';
import './App.css';
import Login from './components/users/Login';
import UserRoutes from './components/users/UserRoutes';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <UserRoutes />
    </>
  );
}

export default App;