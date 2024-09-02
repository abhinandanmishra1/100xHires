import {
  Auth,
  Dashboard,
  ErrorBoundary,
  Navbar,
  NotFound,
} from "@app/components";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Home } from "@app/pages";
import React from "react";
import { useAuth } from "@app/context";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useAuth();
  return user ? (
    <>{children}</>
  ) : (
    <h1 className="text-red-500">Unauthorized: Please log in.</h1>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
