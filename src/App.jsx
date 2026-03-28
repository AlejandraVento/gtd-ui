import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import './App.css';
import Login from './pages/Login';
import Navbar from './pages/Navbar';
import InformacionProcesos from './pages/InformacionProcesos';
import TiposTramites from './pages/TiposTramites';

const App = () => {
  return (
    <>
      <Box bg="var(--mainBackground)">
        <Navbar />
        <Routes>
          <>
            <Route
              path="/informacion-procesos"
              element={<InformacionProcesos />}
            />
            <Route path="/tipos-tramites" element={<TiposTramites />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        </Routes>
      </Box>
    </>
  );
};

export default App;
