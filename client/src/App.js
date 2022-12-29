import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    amount: 0,
    description: "",
    date: "",
  });
  async function handleForm(e) {
    e.preventDefault();
    console.log(form);
     const res = await fetch('http://localhost:4000/transiction', {
      method: "POST",
      body: form
    })
    console.log(res);
  }

  function handleInputs(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  return (
    <div className="App">
      <form onSubmit={handleForm}>
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleInputs}
          placeholder="Enter your Amount"
        />
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleInputs}
          placeholder="Enter your details"
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleInputs}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
