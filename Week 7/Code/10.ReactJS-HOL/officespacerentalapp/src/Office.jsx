import React from "react";
import "./App.css";

export default function OfficeCard({ office }) {
  const rentColor = office.rent <= 60000 ? "textRed" : "textGreen";

  return (
    <div style={{ marginBottom: "40px", textAlign: "center" }}>
      <img src={office.image} alt={office.name} width="300" />
      <h2>Name: {office.name}</h2>
      <h3 className={rentColor}>Rent: Rs. {office.rent}</h3>
      <h4>Address: {office.address}</h4>
    </div>
  );
}
