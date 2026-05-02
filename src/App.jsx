import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import './App.css';
import Login from './pages/Login';
import Navbar from './pages/Navbar';
import ProcessInformation from './pages/ProcessInformation';
import RequestsTypes from './pages/RequestsTypes';
import Home from './pages/Home/index.jsx';
import SidebarLayout from './pages/SidebarLayout';
import Requests from './pages/Requests';
import CreateRequest from './pages/Requests/Sections/CreateRequest';

const App = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
      <Box bg="var(--mainBackground)">
        <Navbar
          isOpen={openSidebar}
          onClose={() => setOpenSidebar(false)}
          onOpen={() => setOpenSidebar(true)}
        />
        <Routes>
          <>
            <Route
              path="/informacion-procesos"
              element={<ProcessInformation />}
            />
            <Route path="/tipos-tramites" element={<RequestsTypes />} />
            <Route path="/inicio-sesion" element={<Login />} />
            <Route
              path="/"
              element={
                <SidebarLayout
                  isOpen={openSidebar}
                  onClose={() => setOpenSidebar(false)}
                />
              }
            >
              <Route path="/" element={<Home />} />
              <Route path="/tramites" element={<Requests />} />
              <Route path="/crear-solicitud" element={<CreateRequest />} />
            </Route>
            <Route path="*" element={<Navigate to="/inicio-sesion" />} />
          </>
        </Routes>
      </Box>
    </>
  );
};

export default App;
