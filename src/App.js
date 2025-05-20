import { Routes, Route } from "react-router-dom";
import Home from './HomePage/home';
import Login from '../src/components/login';
import Register from '../src/components/register';
import Electronics from '../src/components/categories/Electronics';
import Help from '../src/components/Help'; // <-- Import the Help page

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/electronics" element={<Electronics />} />
      <Route path="/contact" element={<Help />} /> {/* <-- Added Help route */}
    </Routes>
  );
}

export default App;
