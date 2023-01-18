import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Errorpage from './Components/404/Errorpage';
import Billing from './Components/Billing/Billing';
import Header from './Components/Home/Components/Header';
import Home from './Components/Home/Index';
import Login from './Components/Login/Login';
import Reports from './Components/Reports/Reports';
import Stocks from './Components/Stocks/Stocks';



function App() {
  const token = useSelector((state) => state.token)
  return (
    <>

      {token ? <>
        <Header />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/billing' element={<Billing />} />
        <Route path='/stocks' element={<Stocks />} />
          <Route path='/reports' element={<Reports />} />
          <Route path="*" element={<Errorpage />} />
        </Routes></> : <><Routes>

          <Route path='/' element={<Navigate replace to="/login" />} />
          <Route path='/login' element={<Login />} />

        </Routes></>}

    </>
  );
}

export default App;
