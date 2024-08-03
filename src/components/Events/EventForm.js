// import React, { useState, useContext } from 'react';
// import { useHistory } from 'react-router-dom';
// import { EventContext } from '../context/EventContext';

// const EventForm = () => {
//   const [name, setName] = useState('');
//   const [date, setDate] = useState('');
//   const [location, setLocation] = useState('');
//   const [description, setDescription] = useState('');
//   const { createEvent } = useContext(EventContext);
//   const history = useHistory();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await createEvent({ name, date, location, description });
//     history.push('/events');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Create Event</h2>
//       <label>Name:</label>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//       <label>Date:</label>
//       <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
//       <label>Location:</label>
//       <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
//       <label>Description:</label>
//       <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
//       <button type="submit">Create Event</button>
//     </form>
//   );
// };

// export default EventForm;


import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { EventContext } from '../context/EventContext';
import './EventForm.css'; // Import the custom CSS file

const EventForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const { createEvent } = useContext(EventContext);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEvent({ name, date, location, description });
    history.push('/events');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Create Event</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Create Event
      </button>
    </form>
  );
};

export default EventForm;
