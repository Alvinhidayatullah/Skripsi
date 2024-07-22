import "./style.scss";
import Register from "./pages/register";
import { useState } from "react";
import Login from "./pages/login";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Syahbandar from "./pages/Syahbandar/Syahbandar";
import Overview from "./pages/Overview/overview";
import Produksi from "./pages/Produksi/Produksi";
import Umum from "./pages/Umum/umum";
import TKPU from "./pages/TKPU/tkpu";
import Fasilitas from "./pages/Fasilitas/fasilitas";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // useNavigate,
} from "react-router-dom";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/produksi" element={<Produksi />} />
          <Route path="/syahbandar" element={<Syahbandar />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/umum" element={<Umum />} />
          <Route path="/tkpu" element={<TKPU />} />
          <Route path="/fasilitas" element={<Fasilitas />} />
        </Routes>
      </Sidebar>
    </Router>
  );
};

export default App;
