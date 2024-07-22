import Informasi from "../../components/dashboard/informasi";
import Item from "../../components/dashboard/item";

const Dashboard = () => {
  return (
    <div className="dashboardPages">
      <div className="title">
        <h1>
          <b>DASHBOARD PPN PALABUHANRATU</b>
        </h1>
        <div>Welcome to Dashboard</div>
      </div>
      <Informasi />
      <Item />
    </div>
  );
};

export default Dashboard;
