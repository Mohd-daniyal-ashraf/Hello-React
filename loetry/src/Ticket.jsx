import Ticketnum from "./Ticketnum.jsx";
import "./App.css";

export default function Ticket({ ticket }) {
  return (
    <div className="ticeknumber">
      {ticket.map((num,idx) => (
        <Ticketnum num={num} key={idx}/>
      ))}
    </div>
  ); 
}
