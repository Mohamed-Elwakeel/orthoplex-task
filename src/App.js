import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/NavBar';
import { AuthProvider } from './context/AuthContext';
import './index.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavConditional />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

function NavConditional() {
  const location = useLocation();

  if (location.pathname === '/login') {
    return null;
  }

  return <Navbar />;
}

export default App;