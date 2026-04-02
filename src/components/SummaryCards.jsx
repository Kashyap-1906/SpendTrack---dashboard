function SummaryCards() {

  const balance = 50000;
  const income = 70000;
  const expenses = 20000;

  const card = (bg) => ({
    background: bg,
    padding: "25px",
    borderRadius: "15px",
    flex: "1",
    color: "white",
    boxShadow: "0px 10px 25px rgba(0,0,0,0.1)",
    transition: "0.3s",
    cursor: "pointer"
  });

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "30px",
        flexWrap: "wrap"
      }}
    >

      <div
        style={card("linear-gradient(135deg,#4f46e5,#6366f1)")}
      >
        <p>Total Balance</p>
        <h2>₹{balance}</h2>
      </div>

      <div
        style={card("linear-gradient(135deg,#16a34a,#22c55e)")}
      >
        <p>Income</p>
        <h2>₹{income}</h2>
      </div>

      <div
        style={card("linear-gradient(135deg,#dc2626,#ef4444)")}
      >
        <p>Expenses</p>
        <h2>₹{expenses}</h2>
      </div>

    </div>
  );
}

export default SummaryCards;