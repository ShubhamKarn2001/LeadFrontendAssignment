import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";

const TicketCard = ({ ticket, user }) => {
  const { id, tag, title } = ticket;
  return (
    <div className="ticket-card">
      <div className="ticket-user">
        <p>{id}</p>
        <FaUserCircle className="user-icon" />
      </div>
      <h3 className="ticket-title">{title}</h3>
      <div className="ticket-request">
        <div>
          <BsThreeDots />
        </div>
        <div>
          <FaCircle className="icon" />
          <p>{tag[0]}</p>
        </div>
      </div>

      {/* <h3>{ticket.title}</h3>
            <p>Status: {ticket.status}</p>
            <p>User: {user.name}</p>
            <p>Priority: {ticket.priority}</p> */}
    </div>
  );
};

export default TicketCard;
