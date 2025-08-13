import React, { useEffect, useState } from 'react';

const styles = {
  container: {
    backgroundColor: '#121212',
    color: '#fff',
    minHeight: '100vh',
    padding: '2rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heading: {
    color: '#ff3b3f',
    marginBottom: '1.5rem',
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    borderBottom: '2px solid #ff3b3f',
    padding: '0.75rem',
    textAlign: 'left',
    color: '#ff3b3f',
    fontWeight: '600',
  },
  td: {
    padding: '0.75rem',
    borderBottom: '1px solid #333',
  },
  button: {
    backgroundColor: '#ff3b3f',
    border: 'none',
    color: '#fff',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    fontWeight: '600',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#cc3236',
  },
  noData: {
    marginTop: '2rem',
    fontSize: '1.2rem',
    fontStyle: 'italic',
    color: '#888',
  },
};

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [btnHoverId, setBtnHoverId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/applications')
      .then((res) => res.json())
      .then((data) => setApplications(data))
      .catch((err) => {
        console.error('Failed to fetch applications:', err);
      });
  }, []);

  const downloadResume = (id) => {
    window.open(`http://localhost:5000/download-resume/${id}`, '_blank');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Job Applications</h2>

      {applications.length === 0 ? (
        <p style={styles.noData}>No applications found.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>#</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Phone</th>
              <th style={styles.th}>Job Title</th>
              <th style={styles.th}>Resume</th>
              <th style={styles.th}>Applied At</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={app.id} style={{ backgroundColor: index % 2 === 0 ? '#1e1e1e' : '#121212' }}>
                <td style={styles.td}>{index + 1}</td>
                <td style={styles.td}>{app.name}</td>
                <td style={styles.td}>{app.email}</td>
                <td style={styles.td}>{app.phone}</td>
                <td style={styles.td}>{app.jobTitle}</td>
                <td style={styles.td}>
                  <button
                    style={{
                      ...styles.button,
                      ...(btnHoverId === app.id ? styles.buttonHover : {}),
                    }}
                    onClick={() => downloadResume(app.id)}
                    onMouseEnter={() => setBtnHoverId(app.id)}
                    onMouseLeave={() => setBtnHoverId(null)}
                  >
                    Download
                  </button>
                </td>
                <td style={styles.td}>
                  {new Date(app.appliedAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Applications;
