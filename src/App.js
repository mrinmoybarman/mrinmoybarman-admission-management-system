import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Homepage from './Pages/Homepage'
import LoginPage from './Pages/LoginPage';
import MyStepPage from './Pages/MyStepPage';
import NotFound from './Pages/NotFound';
import SignUpPage from './Pages/SignUpPage';

export default function App() {
  const [isloggedIn,SetIsLoggedIn] = useState(false);
  return (
    <>
      {isloggedIn  && (
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      )}

      {!isloggedIn && (
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      )
      }

    </>
  )
}
