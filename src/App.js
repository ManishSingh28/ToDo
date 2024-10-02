import React, { useState, useEffect } from 'react';
import './App.css';
import KanbanBoard from './KanbanBoard';

const apiURL = "https://api.quicksell.co/v1/internal/frontend-assignment";

function App() {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState('status');
  const [sorting, setSorting] = useState('priority');

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      setTickets(data.tickets);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleGroupingChange = (e) => {
    setGrouping(e.target.value);
  };

  const handleSortingChange = (e) => {
    setSorting(e.target.value);
  };

  return (
    <div className="App">
      <div className="controls">
        <div className="dropdown">
          <label>Grouping:</label>
          <select value={grouping} onChange={handleGroupingChange}>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div className="dropdown">
          <label>Ordering:</label>
          <select value={sorting} onChange={handleSortingChange}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>

      <KanbanBoard tickets={tickets} grouping={grouping} sorting={sorting} />
    </div>
  );
}

export default App;
