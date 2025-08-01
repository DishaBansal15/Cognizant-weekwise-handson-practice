import React from "react";
import ListOfPlayers from "./components/ListofPlayers";
import IndianPlayers from "./components/IndianPlayers";

export default function App() {
  const flag = false;

  return (
    <div>
      {flag ? <ListOfPlayers /> : <IndianPlayers />}
    </div>
  );
}
