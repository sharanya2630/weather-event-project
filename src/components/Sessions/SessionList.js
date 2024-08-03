// import React, { useEffect, useContext } from 'react';
// import { SessionContext } from '../context/SessionContext';

// const SessionList = () => {
//   const { sessions, fetchSessions } = useContext(SessionContext);

//   useEffect(() => {
//     fetchSessions();
//   }, []);

//   return (
//     <div>
//       <h2>User Sessions</h2>
//       <ul>
//         {sessions.map(session => (
//           <li key={session._id}>
//             <p>Login Time: {new Date(session.loginTime).toLocaleString()}</p>
//             <p>Logout Time: {session.logoutTime ? new Date(session.logoutTime).toLocaleString() : 'N/A'}</p>
//             <p>IP Address: {session.ipAddress}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SessionList;


import React, { useEffect, useContext } from 'react';
import { SessionContext } from '../context/SessionContext';
import './SessionList.css'; // Import the custom CSS file

const SessionList = () => {
  const { sessions, fetchSessions } = useContext(SessionContext);

  useEffect(() => {
    fetchSessions();
  }, []);

  return (
    <div className="session-list-container">
      <h2 className="text-center">User Sessions</h2>
      <ul className="session-list">
        {sessions.map(session => (
          <li key={session._id} className="session-item">
            <p className="session-detail"><strong>Login Time:</strong> {new Date(session.loginTime).toLocaleString()}</p>
            <p className="session-detail"><strong>Logout Time:</strong> {session.logoutTime ? new Date(session.logoutTime).toLocaleString() : 'N/A'}</p>
            <p className="session-detail"><strong>IP Address:</strong> {session.ipAddress}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SessionList;
