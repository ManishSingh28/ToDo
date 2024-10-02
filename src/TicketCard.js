import React from 'react';
import './TicketCard.css';


import HighPriority from './icons/Img - High Priority.svg';
import MediumPriority from './icons/Img - Medium Priority.svg';
import LowPriority from './icons/Img - Low Priority.svg';
import NoPriority from './icons/No-priority.svg';

function TicketCard({ ticket }) {

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 4:
        return <img src={HighPriority} alt="High Priority" />;
      case 3:
        return <img src={MediumPriority} alt="Medium Priority" />;
      case 2:
        return <img src={LowPriority} alt="Low Priority" />;
      case 1:
        return <img src={LowPriority} alt="Low Priority" />;
      case 0:
      default:
        return <img src={NoPriority} alt="No Priority" />;
    }
  };

  return (
    <div className="kanban-card">
      <h3>{ticket.title}</h3>
      <div className="ticket-icons">
        {getPriorityIcon(ticket.priority)}
      </div>
      <p>{ticket.tag}</p>
      <p>Priority: {ticket.priority}</p>
      <p>Status: {ticket.status}</p>
    </div>
  );
}

export default TicketCard;
