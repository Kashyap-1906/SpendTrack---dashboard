function Insights() {

  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "15px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
        marginTop: "20px"
      }}
    >

      <h2 style={{ marginBottom: "15px" }}>Insights</h2>

      <div
        style={{
          background: "#eef2ff",
          padding: "15px",
          borderRadius: "10px",
          marginBottom: "10px"
        }}
      >
        Highest spending category:
        <strong> Shopping</strong>
      </div>

      <div
        style={{
          background: "#ecfdf5",
          padding: "15px",
          borderRadius: "10px",
          marginBottom: "10px"
        }}
      >
        Amount spent:
        <strong> ₹2000</strong>
      </div>

      <div
        style={{
          background: "#fef3c7",
          padding: "15px",
          borderRadius: "10px"
        }}
      >
        Observation: Most of your spending is in Shopping.
      </div>

    </div>
  );
}

export default Insights;