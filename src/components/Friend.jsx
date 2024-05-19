import React from "react";

export default function Friend({
  id,
  name,
  image,
  balance,
  onSelected,
  selectedFriend,
}) {
  const isSelected = selectedFriend?.id === id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {balance < 0 && (
        <p className="red">
          Kamu berhutang Rp.{Math.abs(balance)} ke {name}
        </p>
      )}
      {balance > 0 && (
        <p className="green">
          {name} Berhutang Rp.{Math.abs(balance)} ke kamu
        </p>
      )}
      {balance === 0 && <p>Kamu dan {name} tidak memiliki hutang</p>}
      <button
        className="button"
        onClick={() => onSelected({ id, name, image, balance })}
      >
        {isSelected ? "Tutup" : "Pilih"}
      </button>
    </li>
  );
}
