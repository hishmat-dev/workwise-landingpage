import React, { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import LoadingComponent from './components/ui/LoadingComponent.jsx'; 

const Landing = lazy(() => import('./Landing.jsx'));
const ForgotPassword = lazy(() => import('./components/Forgot/ForgotPassword.jsx'));
const Register = lazy(() => import('./components/Register/Register.jsx'));

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Suspense fallback={<LoadingComponent />}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
