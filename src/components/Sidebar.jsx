import { FaChartPie, FaExchangeAlt, FaWallet, FaCog } from "react-icons/fa";

function Sidebar({ setPage, page }) {

  const itemStyle = (name) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px",
    marginBottom: "10px",
    cursor: "pointer",
    borderRadius: "8px",
    background: page === name ? "#eef2ff" : "transparent",
    color: page === name ? "#4f46e5" : "#444",
    transition: "0.2s",
    transform: page === name ? "scale(1.02)" : "scale(1)"
  });

  return (
    <div
      style={{
        width: "220px",
        background: "white",
        padding: "25px",
        boxShadow: "2px 0 10px rgba(0,0,0,0.05)",
        minHeight: "100vh"
      }}
    >

      <h2 style={{ marginBottom: "30px", color: "#4f46e5" }}>
        Fapp
      </h2>

      <div
        style={itemStyle("dashboard")}
        onClick={() => setPage("dashboard")}
      >
        <FaChartPie /> Dashboard
      </div>

      <div
        style={itemStyle("transactions")}
        onClick={() => setPage("transactions")}
      >
        <FaExchangeAlt /> Transactions
      </div>

      <div
        style={itemStyle("expenses")}
        onClick={() => setPage("expenses")}
      >
        <FaWallet /> Expenses
      </div>

      <div
        style={itemStyle("settings")}
        onClick={() => setPage("settings")}
      >
        <FaCog /> Settings
      </div>

    </div>
  );
}

export default Sidebar;