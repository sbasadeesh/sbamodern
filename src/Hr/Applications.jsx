import React, { useEffect, useState } from 'react';

const styles = {
  container: {
    backgroundColor: '#121212',
    color: '#fff',
    height: 'auto',
    padding: '1rem',
    paddingBottom: '2rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    overflowY: 'auto',
    width: '100%',
  },
  heading: {
    color: '#ff3b3f',
    marginBottom: '1.5rem',
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  // Filter section styles
  filterSection: {
    backgroundColor: '#1e1e1e',
    border: '1px solid #ff3b3f40',
    borderRadius: '12px',
    padding: '0.75rem',
    marginBottom: '1.5rem',
    boxShadow: '0 2px 8px rgba(255, 59, 63, 0.1)',
  },
  filterTitle: {
    color: '#ff3b3f',
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '0.75rem',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
  },
  filterRow: {
    display: 'flex',
    gap: '0.75rem',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '0.5rem',
  },
  filterGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
    alignItems: 'center',
    minWidth: '120px',
  },
  filterLabel: {
    color: '#ff3b3f',
    fontSize: '0.75rem',
    fontWeight: '500',
    textAlign: 'center',
  },
  filterInput: {
    backgroundColor: '#333',
    border: '1px solid #ff3b3f60',
    borderRadius: '8px',
    color: '#fff',
    padding: '0.4rem 0.6rem',
    fontSize: '0.8rem',
    width: '110px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
  },
  filterInputFocus: {
    outline: 'none',
    borderColor: '#ff3b3f',
    boxShadow: '0 0 0 2px rgba(255, 59, 63, 0.2)',
    transform: 'translateY(-1px)',
  },
  filterButtons: {
    display: 'flex',
    gap: '0.5rem',
    marginTop: '0.75rem',
    justifyContent: 'center',
  },
  clearButton: {
    backgroundColor: '#555',
    border: 'none',
    color: '#fff',
    padding: '0.4rem 0.8rem',
    cursor: 'pointer',
    fontWeight: '500',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    fontSize: '0.8rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
  },
  
  // Results summary
  resultsInfo: {
    color: '#ccc',
    fontSize: '0.9rem',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  
  // Desktop table styles
  tableContainer: {
    overflowX: 'auto',
    display: 'block',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    minWidth: '800px',
  },
  th: {
    borderBottom: '2px solid #ff3b3f',
    padding: '0.75rem',
    textAlign: 'left',
    color: '#ff3b3f',
    fontWeight: '600',
    whiteSpace: 'nowrap',
  },
  td: {
    padding: '0.75rem',
    borderBottom: '1px solid #333',
    verticalAlign: 'middle',
  },
  
  // Mobile card styles
  cardContainer: {
    display: 'none',
    width: '100%',
    maxWidth: '100%',
    overflow: 'visible',
  },
  card: {
    backgroundColor: '#1e1e1e',
    border: '1px solid #333',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.75rem',
    paddingBottom: '0.5rem',
    borderBottom: '1px solid #ff3b3f',
  },
  cardNumber: {
    backgroundColor: '#ff3b3f',
    color: '#fff',
    borderRadius: '50%',
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.8rem',
    fontWeight: 'bold',
  },
  cardTitle: {
    color: '#ff3b3f',
    fontSize: '1.1rem',
    fontWeight: '600',
    margin: 0,
  },
  cardRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.5rem',
    flexWrap: 'wrap',
  },
  cardLabel: {
    color: '#ff3b3f',
    fontWeight: '600',
    fontSize: '0.9rem',
    minWidth: '80px',
  },
  cardValue: {
    color: '#fff',
    fontSize: '0.9rem',
    flex: 1,
    textAlign: 'right',
    wordBreak: 'break-word',
  },
  
  // Button styles
  button: {
    backgroundColor: '#ff3b3f',
    border: 'none',
    color: '#fff',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    fontWeight: '600',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
    fontSize: '0.9rem',
    minWidth: '100px',
  },
  buttonHover: {
    backgroundColor: '#cc3236',
  },
  buttonDisabled: {
    backgroundColor: '#666',
    cursor: 'not-allowed',
  },
  noData: {
    marginTop: '2rem',
    fontSize: '1.2rem',
    fontStyle: 'italic',
    color: '#888',
    textAlign: 'center',
  },
};

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [btnHoverId, setBtnHoverId] = useState(null);
  const [downloadingId, setDownloadingId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Filter states
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    // Check if mobile view
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    fetch('http://localhost:5000/applications')
      .then((res) => res.json())
      .then((data) => {
        setApplications(data);
        setFilteredApplications(data);
      })
      .catch((err) => {
        console.error('Failed to fetch applications:', err);
      });
      
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Filter applications based on date range
  useEffect(() => {
    let filtered = [...applications];

    if (startDate) {
      const start = new Date(startDate);
      start.setHours(0, 0, 0, 0);
      filtered = filtered.filter(app => {
        const appDate = new Date(app.appliedAt);
        return appDate >= start;
      });
    }

    if (endDate) {
      const end = new Date(endDate);
      end.setHours(23, 59, 59, 999);
      filtered = filtered.filter(app => {
        const appDate = new Date(app.appliedAt);
        return appDate <= end;
      });
    }

    setFilteredApplications(filtered);
  }, [applications, startDate, endDate]);

  const clearFilters = () => {
    setStartDate('');
    setEndDate('');
  };

  const downloadBase64File = (base64Data, fileName, mimeType) => {
    try {
      const byteCharacters = atob(base64Data);
      const byteNumbers = new Array(byteCharacters.length);
      
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: mimeType });
      
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      
      document.body.appendChild(link);
      link.click();
      
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
    } catch (error) {
      console.error('Download error:', error);
      alert('Download la problem aayiduchu. Try pannunga again.');
    }
  };

  const downloadResume = async (id) => {
    setDownloadingId(id);
    try {
      const response = await fetch(`http://localhost:5000/resume/${id}`);
      const data = await response.json();
      
      if (data.success) {
        downloadBase64File(data.fileData, data.fileName, data.mimeType);
      } else {
        alert('Resume download panna mudila: ' + data.message);
      }
      
    } catch (error) {
      console.error('Error downloading resume:', error);
      alert('Download la error aayiduchu. Network connection check pannunga.');
    } finally {
      setDownloadingId(null);
    }
  };

  const DownloadButton = ({ app }) => (
    <button
      style={{
        ...styles.button,
        ...(btnHoverId === app.id ? styles.buttonHover : {}),
        ...(downloadingId === app.id ? styles.buttonDisabled : {})
      }}
      onClick={() => downloadResume(app.id)}
      onMouseEnter={() => setBtnHoverId(app.id)}
      onMouseLeave={() => setBtnHoverId(null)}
      disabled={downloadingId === app.id}
    >
      {downloadingId === app.id ? 'Downloading...' : 'Download'}
    </button>
  );

  return (
    <div style={styles.container}>
      <style jsx>{`
        @media (max-width: 768px) {
          .table-container {
            display: none !important;
          }
          .card-container {
            display: block !important;
          }
          .container {
            padding: 0.5rem !important;
            padding-bottom: 2rem !important;
            min-height: 100vh !important;
            height: auto !important;
          }
          .heading {
            font-size: 1.5rem !important;
            margin-bottom: 1rem !important;
          }
          .filter-row {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .filter-group {
            min-width: auto !important;
          }
        }
        
        @media (min-width: 769px) {
          .table-container {
            display: block !important;
          }
          .card-container {
            display: none !important;
          }
        }
      `}</style>
      
      <h2 style={styles.heading} className="heading">Job Applications</h2>

      {/* Date Filter Section */}
      <div style={styles.filterSection}>
        <h3 style={styles.filterTitle}>
          📅 Filter by Date
        </h3>
        <div style={styles.filterRow} className="filter-row">
          <div style={styles.filterGroup} className="filter-group">
            <label style={styles.filterLabel}>From</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              style={styles.filterInput}
              onFocus={(e) => {
                e.target.style.borderColor = '#ff3b3f';
                e.target.style.boxShadow = '0 0 0 2px rgba(255, 59, 63, 0.2)';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#ff3b3f60';
                e.target.style.boxShadow = '0 1px 3px rgba(0,0,0,0.3)';
                e.target.style.transform = 'translateY(0)';
              }}
            />
          </div>
          
          <div style={styles.filterGroup} className="filter-group">
            <label style={styles.filterLabel}>To</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              style={styles.filterInput}
              onFocus={(e) => {
                e.target.style.borderColor = '#ff3b3f';
                e.target.style.boxShadow = '0 0 0 2px rgba(255, 59, 63, 0.2)';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#ff3b3f60';
                e.target.style.boxShadow = '0 1px 3px rgba(0,0,0,0.3)';
                e.target.style.transform = 'translateY(0)';
              }}
            />
          </div>
        </div>
        
        <div style={styles.filterButtons}>
          <button
            style={styles.clearButton}
            onClick={clearFilters}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#777';
              e.target.style.transform = 'translateY(-1px)';
              e.target.style.boxShadow = '0 2px 6px rgba(0,0,0,0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#555';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 1px 3px rgba(0,0,0,0.3)';
            }}
          >
            ✨ Clear
          </button>
        </div>
      </div>

      {/* Results Summary */}
      {applications.length > 0 && (
        <div style={styles.resultsInfo}>
          Showing {filteredApplications.length} of {applications.length} applications
          {(startDate || endDate) && (
            <span>
              {' '}• Filtered by: {startDate && `From ${new Date(startDate).toLocaleDateString()}`}
              {startDate && endDate && ' '}
              {endDate && `To ${new Date(endDate).toLocaleDateString()}`}
            </span>
          )}
        </div>
      )}

      {applications.length === 0 ? (
        <p style={styles.noData}>No applications found.</p>
      ) : filteredApplications.length === 0 ? (
        <p style={styles.noData}>No applications found for the selected date range.</p>
      ) : (
        <>
          {/* Desktop Table View */}
          <div style={styles.tableContainer} className="table-container">
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
                {filteredApplications.map((app, index) => (
                  <tr key={app.id} style={{ backgroundColor: index % 2 === 0 ? '#1e1e1e' : '#121212' }}>
                    <td style={styles.td}>{index + 1}</td>
                    <td style={styles.td}>{app.name}</td>
                    <td style={styles.td}>{app.email}</td>
                    <td style={styles.td}>{app.phone}</td>
                    <td style={styles.td}>{app.jobTitle}</td>
                    <td style={styles.td}>
                      <DownloadButton app={app} />
                    </td>
                    <td style={styles.td}>
                      {new Date(app.appliedAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div style={styles.cardContainer} className="card-container">
            {filteredApplications.map((app, index) => (
              <div key={app.id} style={styles.card}>
                <div style={styles.cardHeader}>
                  <div style={styles.cardNumber}>{index + 1}</div>
                  <h3 style={styles.cardTitle}>{app.name}</h3>
                </div>
                
                <div style={styles.cardRow}>
                  <span style={styles.cardLabel}>Email:</span>
                  <span style={styles.cardValue}>{app.email}</span>
                </div>
                
                <div style={styles.cardRow}>
                  <span style={styles.cardLabel}>Phone:</span>
                  <span style={styles.cardValue}>{app.phone}</span>
                </div>
                
                <div style={styles.cardRow}>
                  <span style={styles.cardLabel}>Job:</span>
                  <span style={styles.cardValue}>{app.jobTitle}</span>
                </div>
                
                <div style={styles.cardRow}>
                  <span style={styles.cardLabel}>Applied:</span>
                  <span style={styles.cardValue}>
                    {new Date(app.appliedAt).toLocaleDateString()}
                  </span>
                </div>
                
                <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                  <DownloadButton app={app} />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Applications;