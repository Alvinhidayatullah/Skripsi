import { Link } from "react-router-dom";
import {
  RiDashboardFill,
  RiBarChartFill,
  RiFundsBoxFill,
} from "react-icons/ri";
import { MdPeopleAlt, MdDocumentScanner, MdWarehouse } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";

const LinkItem = [
  {
    id: "/",
    icon: <RiDashboardFill />,
    name: "Dashboard",
  },
  {
    id: "/produksi",
    icon: <RiBarChartFill />,
    name: "Produksi Harian",
  },
  {
    id: "/syahbandar",
    icon: <MdPeopleAlt />,
    name: "Syahbandar",
  },
  {
    id: "/overview",
    icon: <RiFundsBoxFill />,
    name: "PNBP",
  },
  {
    id: "/umum",
    icon: <MdDocumentScanner />,
    name: "Bagian Umum",
  },
  {
    id: "/tkpu",
    icon: <FaProjectDiagram />,
    name: "TKPU",
  },
  {
    id: "/fasilitas",
    icon: <MdWarehouse />,
    name: "Fasilitas",
  },
];

const AdminPage = ({ isOpen, children }) => {
  return (
    <div className="mainPage">
      {/* <Header toggleSidebar={toggleSidebar} /> */}
      <div className={`sidebar ${isOpen ? "active" : ""}`}>
        <ul>
          {LinkItem.map((item, index) => (
            <li key={index}>
              <Link to={item.id}>
                <div style={{ fontSize: "22px" }}>{item.icon}</div>
                <div>{item.name}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="pages">{children}</div>
    </div>
  );
};

export default AdminPage;
