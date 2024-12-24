import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar';
import { AuthProvider } from './context/AuthContext';
import './index.css';
import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
