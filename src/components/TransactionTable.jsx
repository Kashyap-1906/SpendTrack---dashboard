import { useState } from "react";

function TransactionTable({ role, search, transactions, addTransaction, limit }) {

  const [showForm,setShowForm] = useState(false);

  const [form,setForm] = useState({
    date:"",
    category:"",
    amount:"",
    type:"expense"
  });

  const getIcon=(cat)=>{
    if(cat==="Food") return "🍔";
    if(cat==="Shopping") return "🛒";
    if(cat==="Transport") return "🚕";
    if(cat==="Salary") return "💰";
    return "💳";
  };

  const filtered = transactions.filter((t)=>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  const displayTransactions = limit ? filtered.slice(0,limit) : filtered;

  const handleSubmit=(e)=>{
    e.preventDefault();

    const newTx={
      id:Date.now(),
      ...form
    };

    addTransaction(newTx);

    setShowForm(false);

    setForm({
      date:"",
      category:"",
      amount:"",
      type:"expense"
    });

  };

  return (

    <div
      style={{
        background:"white",
        padding:"25px",
        borderRadius:"15px",
        boxShadow:"0 5px 20px rgba(0,0,0,0.05)"
      }}
    >

      <div
        style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          marginBottom:"20px"
        }}
      >

        <h3>Transactions</h3>

        {role==="admin" && (

          <button
            onClick={()=>setShowForm(!showForm)}
            style={{
              background:"#4f46e5",
              color:"white",
              border:"none",
              padding:"8px 16px",
              borderRadius:"8px",
              cursor:"pointer"
            }}
          >
            + Add Transaction
          </button>

        )}

      </div>

      {/* ADD FORM */}

      {showForm && (

        <div
          style={{
            background:"#f9fafb",
            padding:"20px",
            borderRadius:"12px",
            marginBottom:"20px",
            border:"1px solid #eee"
          }}
        >

          <form
            onSubmit={handleSubmit}
            style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",
              gap:"15px",
              alignItems:"end"
            }}
          >

            <input
              type="date"
              value={form.date}
              onChange={(e)=>setForm({...form,date:e.target.value})}
            />

            <input
              placeholder="Category"
              value={form.category}
              onChange={(e)=>setForm({...form,category:e.target.value})}
            />

            <input
              placeholder="Amount"
              value={form.amount}
              onChange={(e)=>setForm({...form,amount:e.target.value})}
            />

            <select
              value={form.type}
              onChange={(e)=>setForm({...form,type:e.target.value})}
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>

            <button
              type="submit"
              style={{
                background:"#4f46e5",
                color:"white",
                border:"none",
                padding:"10px",
                borderRadius:"8px",
                cursor:"pointer"
              }}
            >
              Save
            </button>

          </form>

        </div>

      )}

      <table style={{width:"100%",borderCollapse:"collapse"}}>

        <thead>

          <tr style={{background:"#f3f4f6"}}>

            <th style={{padding:"12px"}}>Date</th>
            <th style={{padding:"12px"}}>Category</th>
            <th style={{padding:"12px"}}>Amount</th>
            <th style={{padding:"12px"}}>Type</th>

          </tr>

        </thead>

        <tbody>

          {displayTransactions.map((t)=>(

            <tr key={t.id} style={{borderBottom:"1px solid #eee"}}>

              <td style={{padding:"12px"}}>{t.date}</td>

              <td style={{padding:"12px"}}>
                {getIcon(t.category)} {t.category}
              </td>

              <td style={{padding:"12px"}}>₹{t.amount}</td>

              <td
                style={{
                  padding:"12px",
                  color:t.type==="income" ? "green":"red"
                }}
              >
                {t.type}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default TransactionTable;