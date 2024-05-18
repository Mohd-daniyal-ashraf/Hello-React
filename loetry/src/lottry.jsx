import React, { useState } from "react";
import { getRan, sum } from "./helper";
import Ticket from "./Ticket";
export default function Lottery({ n, winingsum }) {
  const [ticket, setTicket] = useState(getRan(n));

  let iswon = sum(ticket) === winingsum;

  let buyticket = () => {
    setTicket(getRan(n));
  };

  return (
    <div>
      <h2>This is a Lottery game</h2>
      <button onClick={buyticket}> Buy New Ticket</button>
      <br />
      <br />
      <Ticket ticket={ticket} />
      <h3>{iswon && "Congratulation, You won!"}</h3>
    </div>
  );
}
