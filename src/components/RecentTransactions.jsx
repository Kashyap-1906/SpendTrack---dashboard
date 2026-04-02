function RecentTransactions() {

  const data = [
    {
      name: "Venkat",
      time: "30 min ago",
      amount: "-₹45",
    },
    {
      name: "Bhavana",
      time: "12 Dec 2024",
      amount: "+₹120",
    },
    {
      name: "Nitya",
      time: "11 Dec 2024",
      amount: "-₹350",
    },
    {
      name: "Satwik",
      time: "09 Dec 2024",
      amount: "-₹452",
    }
  ];

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
        marginTop: "20px"
      }}
    >

      <h3 style={{ marginBottom: "15px" }}>Recent Transactions</h3>

      {data.map((t,i)=>(
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "15px"
          }}
        >

          <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
            

            <div>
              <div>{t.name}</div>
              <small style={{color:"gray"}}>{t.time}</small>
            </div>
          </div>

          <div>{t.amount}</div>

        </div>
      ))}

    </div>
  );
}

export default RecentTransactions;