import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  ResponsiveContainer
} from "recharts";

const balanceData = [
  { month: "Jan", balance: 40000 },
  { month: "Feb", balance: 45000 },
  { month: "Mar", balance: 50000 },
  { month: "Apr", balance: 47000 }
];

const spendingData = [
  { name: "Food", value: 500 },
  { name: "Shopping", value: 2000 },
  { name: "Transport", value: 300 }
];

const categoryData = [
  { category: "Food", amount: 500 },
  { category: "Shopping", amount: 2000 },
  { category: "Transport", amount: 300 }
];

const COLORS = ["#4f46e5", "#22c55e", "#f97316"];

const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "15px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
  transition: "0.3s"
};

function Charts() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px"
      }}
    >

      {/* Balance Trend */}
      <div
        style={cardStyle}
        onMouseEnter={(e)=>e.currentTarget.style.transform="translateY(-5px)"}
        onMouseLeave={(e)=>e.currentTarget.style.transform="translateY(0)"}
      >
        <h3>Balance Trend</h3>

        <div style={{ width: "100%", height: 250 }}>
          <ResponsiveContainer>
            <LineChart data={balanceData}>
              <CartesianGrid stroke="#eee" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="balance"
                stroke="#4f46e5"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pie */}
      <div
        style={cardStyle}
        onMouseEnter={(e)=>e.currentTarget.style.transform="translateY(-5px)"}
        onMouseLeave={(e)=>e.currentTarget.style.transform="translateY(0)"}
      >
        <h3>Spending Breakdown</h3>

        <div style={{ width: "100%", height: 250 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={spendingData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {spendingData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bar Chart full width */}
      <div
        style={{
          ...cardStyle,
          gridColumn: "span 2"
        }}
        onMouseEnter={(e)=>e.currentTarget.style.transform="translateY(-5px)"}
        onMouseLeave={(e)=>e.currentTarget.style.transform="translateY(0)"}
      >
        <h3>Spending by Category</h3>

        <div style={{ width: "100%", height: 250 }}>
          <ResponsiveContainer>
            <BarChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#16a34a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}

export default Charts;