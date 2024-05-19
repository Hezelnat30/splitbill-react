import React, { useState } from "react";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [amount, setAmount] = useState(0);
  const [myBill, setMyBill] = useState("");
  const friendBill = amount ? amount - myBill : 0;
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (!amount || !myBill) return;
    onSplitBill(whoIsPaying === "user" ? friendBill : -myBill);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Patungan bareng {selectedFriend.name}</h2>

      <label htmlFor="">💸Total Tagihan</label>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <label htmlFor="">🙋Tagihan Kamu</label>
      <input
        type="text"
        value={myBill}
        onChange={(e) => setMyBill(e.target.value)}
      />

      <label htmlFor="">🙋‍♂️Tagihan {selectedFriend.name}</label>
      <input type="text" disabled value={friendBill} />

      <label htmlFor="">🤑Ditalangin sama</label>
      <select
        name=""
        id=""
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">Kamu</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <button className="button">Tambah</button>
    </form>
  );
}
