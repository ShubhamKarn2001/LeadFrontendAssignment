import React, { useState, useEffect } from "react";
import "./styles.css";
import KanbanColumn from "./KanbanColumn";

const KanbanBoard = ({ data, show }) => {
  const [groupingOptionStatus, setGroupingOptionStatus] = useState("By Status");
  // const [groupingOptionUser, setGroupingOptionUser] = useState('By User');
  // const [groupingOptionPriority, setGroupingOptionPriority] = useState('By Priority');
  const [sortingOption, setSortingOption] = useState("Priority");

  const statuses = ["Todo", "In progress", "Done", "Cancel"];
  const priorityLabels = ["No priority", "Urgent", "High", "Medium", "Low"];

  const groupingOptions = ["By Status", "By Priority", "By User"];
  const sortingOptions = ["Priority", "Title"];

  const handleGroupingChange = (selectId, selectedGrouping) => {
    switch (selectId) {
      case "groupingOptionStatus":
        setGroupingOptionStatus(selectedGrouping);
        break;
      // case 'groupingOptionUser':
      //     setGroupingOptionUser(selectedGrouping);
      //     break;
      // case 'groupingOptionPriority':
      //     setGroupingOptionPriority(selectedGrouping);
      //     break;
      default:
        break;
    }
  };

  const handleSortingChange = (selectedSorting) => {
    setSortingOption(selectedSorting);
  };

  return (
    <div className="kanban-board">
      {show && (
        <div className="controls">
          <div className="conrols-first">
            <label htmlFor="groupingOptionStatus">Grouping</label>
            <select
              id="groupingOptionStatus"
              value={groupingOptionStatus}
              onChange={(e) =>
                handleGroupingChange("groupingOptionStatus", e.target.value)
              }
            >
              {groupingOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <div className="controls-second">
              {groupingOptionStatus !== "By User" && (
                <label htmlFor="groupingOptionPriority"></label>
              )}
            </div>

            <label htmlFor="sortingOption">Ordering</label>
            <select
              id="sortingOption"
              value={sortingOption}
              onChange={(e) => handleSortingChange(e.target.value)}
            >
              {sortingOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      <div className="karban-columns">
        {groupingOptionStatus === "By User" &&
          data.users.map((user) => {
            const userTickets = data.tickets.filter(
              (ticket) => ticket.userId === user.id
            );
            return (
              <KanbanColumn
                key={user.id}
                data={{ tickets: userTickets, users: [user] }}
                sortingOption={sortingOption}
                status={user.name}
              />
            );
          })}

        {groupingOptionStatus === "By Priority" &&
          priorityLabels.map((priority, index) => {
            const priorityTickets = data.tickets.filter(
              (ticket) => ticket.priority === index
            );
            return (
              <KanbanColumn
                key={index}
                data={{ tickets: priorityTickets, users: data.users }}
                sortingOption={sortingOption}
                status={priority}
              />
            );
          })}

          {groupingOptionStatus === "By Status" &&
            statuses.map((status) => {
              const priorityTickets = data.tickets.filter(
                (ticket) => ticket.status === status
              );
              return (
                <KanbanColumn
                  key={status}
                  data={{ tickets: priorityTickets, users: data.users }}
                  sortingOption={sortingOption}
                  status={status}
                />
              );
            })}
  
      </div>
    </div>
  );
};

export default KanbanBoard;
