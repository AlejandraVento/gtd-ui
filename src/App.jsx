import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import './App.css';
import Login from './pages/Login';
import Navbar from './pages/Navbar';

const App = () => {
  return (
    <>
      <Box bg="var(--mainBackground)">
        <Navbar />
        <Routes>
          <>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        </Routes>
      </Box>
    </>
  );
};

export default App;
