import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import './App.css';
import Login from './pages/Login';
import Navbar from './pages/Navbar';
import InformacionProcesos from './pages/InformacionProcesos';
import TiposTramites from './pages/TiposTramites';
import Inicio from './pages/Inicio/index.jsx';
import SidebarLayout from './pages/SidebarLayout';

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
              element={<InformacionProcesos />}
            />
            <Route path="/tipos-tramites" element={<TiposTramites />} />
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
              <Route path="/" element={<Inicio />} />
            </Route>
            <Route path="*" element={<Navigate to="/inicio-sesion" />} />
          </>
        </Routes>
      </Box>
    </>
  );
};

export default App;
