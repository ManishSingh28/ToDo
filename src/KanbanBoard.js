import React from 'react';
import TicketCard from './TicketCard';
import './KanbanBoard.css';


import NoPriorityIcon from './icons/No-priority.svg' ;
import TodoIcon from './icons/To-do.svg';
import InProgressIcon from './icons/in-progress.svg';
import DoneIcon from './icons/Done.svg';
import CancelledIcon from './icons/Cancelled.svg';

function KanbanBoard({ tickets, grouping, sorting }) {
  const sortTickets = (a, b) => {
    if (sorting === 'priority') {
      return b.priority - a.priority;
    } else if (sorting === 'title') {
      return a.title.localeCompare(b.title);
    }
    return 0;
  };

  const groupTickets = () => {
    return tickets.reduce((acc, ticket) => {
      const key = ticket[grouping];
      if (!acc[key]) acc[key] = [];
      acc[key].push(ticket);
      return acc;
    }, {});
  };

  const groupedTickets = groupTickets();


  const getStatusIcon = (status) => {
    switch (status) {
      case 'No priority':
        return <img src={NoPriorityIcon} alt="No Priority" />
      case 'Todo':
        return <img src={TodoIcon} alt="To Do" />;
      case 'In progress':
        return <img src={InProgressIcon} alt="In Progress" />;
      case 'Done':
        return <img src={DoneIcon} alt="Done" />;
      case 'Cancelled':
        return <img src={CancelledIcon} alt="Cancelled" />;
      default:
        return null;
    }
  };

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map(group => (
        <div className="kanban-column" key={group}>
          <h2>
            {group} {getStatusIcon(group)}
          </h2>
          {groupedTickets[group].sort(sortTickets).map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;
