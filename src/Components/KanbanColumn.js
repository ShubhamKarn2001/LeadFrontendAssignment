import React from "react";
import TicketCard from "./TicketCard";
import { FaPlus } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import useIcons from "../utils/useIcons";

const KanbanColumn = (
  { data: { tickets, users }, groupingOption, sortingOption, status },
  show
) => {
  const lowerCaseStatus = status; // Convert to lowercase for case-insensitive comparison

  const icon = useIcons(status);

  const sortedTickets = tickets.sort((a, b) => {
    switch (sortingOption) {
      case "Priority":
        return b.priority - a.priority;
      case "Title":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  return (
    <div className="kanban-column">
      <div className="kanban-column-heading">
        <div>
          {icon}
          <h2>{status}</h2>
        </div>
        <div className="kanban-column-heading-icons">
          <FaPlus className="icon-plus" />
          <BsThreeDots className="icon-dots" />
        </div>
      </div>

      {sortedTickets.map((ticket) => {
        const user = users.find((user) => user.id === ticket.userId);

        return <TicketCard key={ticket.id} ticket={ticket} user={user} />;
      })}
    </div>
  );
};

export default KanbanColumn;
