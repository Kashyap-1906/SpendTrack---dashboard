import { useState } from "react";
import SummaryCards from "../components/SummaryCards";
import TransactionTable from "../components/TransactionTable";
import Charts from "../components/Charts";
import Insights from "../components/Insights";
import RecentTransactions from "../components/RecentTransactions";
import profile from "../assets/profile.jpeg";
import { transactions as initialTransactions } from "../data/transactions";

function Dashboard() {

  const [role,setRole] = useState("viewer");
  const [page,setPage] = useState("dashboard");
  const [search,setSearch] = useState("");
  const [profileOpen,setProfileOpen] = useState(false);

  const [transactions,setTransactions] = useState(initialTransactions);

  const addTransaction = (tx)=>{
    setTransactions([tx,...transactions]);
  };

  const navItem = (name,label)=>(
    <span
      onClick={()=>setPage(name)}
      style={{
        cursor:"pointer",
        fontWeight: page===name ? "600":"400",
        color: page===name ? "#4f46e5":"#374151",
        borderBottom: page===name ? "2px solid #4f46e5":"none",
        paddingBottom:"4px"
      }}
    >
      {label}
    </span>
  );

  return (

    <div style={{background:"#eef2f7",minHeight:"100vh"}}>

      {/* NAVBAR */}

      <div
        style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          padding:"20px 40px",
          background:"white",
          boxShadow:"0 5px 20px rgba(0,0,0,0.05)"
        }}
      >

        <h2 style={{color:"#4f46e5"}}>SpendTrack</h2>

        <div
          style={{
            display:"flex",
            gap:"30px",
            flexWrap:"wrap",
            alignItems:"center"
          }}
        >

          {navItem("dashboard","Dashboard")}
          {navItem("transactions","Transactions")}
          {navItem("expenses","Expenses")}
          {navItem("insights","Insights")}

        </div>

        <div style={{display:"flex",alignItems:"center",gap:"20px"}}>

          <input
            placeholder="Search..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            style={{
              padding:"10px 15px",
              borderRadius:"20px",
              border:"1px solid #ddd"
            }}
          />

          <div style={{position:"relative"}}>

            <img
              src={profile}
              alt="profile"
              style={{
                width:"40px",
                height:"40px",
                borderRadius:"50%",
                cursor:"pointer"
              }}
              onClick={()=>setProfileOpen(!profileOpen)}
            />

            {profileOpen && (

              <div
                style={{
                  position:"absolute",
                  right:0,
                  top:"50px",
                  background:"white",
                  padding:"12px",
                  borderRadius:"10px",
                  boxShadow:"0 10px 25px rgba(0,0,0,0.1)",
                  width:"150px"
                }}
              >

                <p style={{fontWeight:"600",marginBottom:"8px"}}>Role</p>

                <div
                  onClick={()=>{
                    setRole("viewer");
                    setProfileOpen(false);
                  }}
                  style={{
                    padding:"8px",
                    borderRadius:"6px",
                    cursor:"pointer",
                    background: role==="viewer" ? "#eef2ff":"transparent"
                  }}
                >
                  Viewer
                </div>

                <div
                  onClick={()=>{
                    setRole("admin");
                    setProfileOpen(false);
                  }}
                  style={{
                    padding:"8px",
                    borderRadius:"6px",
                    cursor:"pointer",
                    background: role==="admin" ? "#eef2ff":"transparent"
                  }}
                >
                  Admin
                </div>

              </div>

            )}

          </div>

        </div>

      </div>

      {/* PAGE CONTENT */}

      <div style={{padding:"30px 40px"}}>

        {page==="dashboard" && (

          <>

            <SummaryCards/>

            <div
              style={{
                display:"grid",
                gridTemplateColumns: window.innerWidth < 900 ? "1fr" : "2fr 1fr",
                gap:"20px",
                marginTop:"20px"
              }}
            >

              <Charts/>

              <div>

                {/* SHOW ONLY 4 TRANSACTIONS */}

                <TransactionTable
                  role={role}
                  search={search}
                  transactions={transactions}
                  addTransaction={addTransaction}
                  limit={4}
                />

                <RecentTransactions transactions={transactions}/>

              </div>

            </div>

            <div style={{marginTop:"30px"}}>
              <Insights/>
            </div>

          </>

        )}

        {page==="transactions" && (

          <TransactionTable
            role={role}
            search={search}
            transactions={transactions}
            addTransaction={addTransaction}
          />

        )}

        {page==="expenses" && <Charts/>}

        {page==="insights" && <Insights/>}

      </div>

    </div>

  );

}

export default Dashboard;