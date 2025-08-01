import React from "react";
import OfficeCard from "./Office";
import officePic from "./images/officePic.jpg"; 


const officeList = [
  {
    name: "DBS",
    rent: 50000,
    address: "Chennai",
    image: officePic
  }
];

export default function App() {
  return (
    <div>
      <h1>Office Space, at Affordable Range</h1>
      {officeList.map((office, index) => (
        <OfficeCard key={index} office={office} />
      ))}
    </div>
  );
}
