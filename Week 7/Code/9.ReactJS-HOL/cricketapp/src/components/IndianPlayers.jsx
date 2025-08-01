import React from "react";

function OddPlayers({ players: [first, , third, , fifth] }) {
  return (
    <div>
      <h2>Odd Players</h2>
      <ul>
        <li>First : {first}</li>
        <li>Third : {third}</li>
        <li>Fifth : {fifth}</li>
      </ul>
    </div>
  );
}

function EvenPlayers({ players: [, second, , fourth, , sixth] }) {
  return (
    <div>
      <h2>Even Players</h2>
      <ul>
        <li>Second : {second}</li>
        <li>Fourth : {fourth}</li>
        <li>Sixth : {sixth}</li>
      </ul>
    </div>
  );
}

export default function IndianPlayers() {
  const team = ["Sachin1", "Dhoni2", "Virat3", "Rohit4", "Yuvaraj5", "Raina6"];

  const T20Players = ["First Player", "Second Player", "Third Player"];
  const RanjiTrophyPlayers = ["Fourth Player", "Fifth Player", "Sixth Player"];
  const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <div>
      <OddPlayers players={team} />
      <EvenPlayers players={team} />

      <h2>List of Indian Players Merged:</h2>
      <ul>
        {IndianPlayers.map((player, index) => (
          <li key={index}>Mr. {player}</li>
        ))}
      </ul>
    </div>
  );
}
