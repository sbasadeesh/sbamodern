import React, { useEffect, useState } from 'react';

const DashboardStats = () => {
  const [totalJobs, setTotalJobs] = useState(null);
  const [totalApplications, setTotalApplications] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/stats/total-jobs')
      .then(res => res.json())
      .then(data => setTotalJobs(data.totalJobs))
      .catch(err => console.error('Error fetching total jobs:', err));

    fetch('http://localhost:5000/stats/total-applications')
      .then(res => res.json())
      .then(data => setTotalApplications(data.totalApplications))
      .catch(err => console.error('Error fetching total applications:', err));
  }, []);

  return (
    <div style={{ backgroundColor: '#121212', color: '#fff', padding: '2rem', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
      <h2 style={{ color: '#ff3b3f' }}>Dashboard Stats</h2>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <div style={{ backgroundColor: '#1e1e1e', padding: '1.5rem', borderRadius: '8px', flex: 1 }}>
          <h3>Total Jobs Posted</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ff3b3f' }}>
            {totalJobs !== null ? totalJobs : 'Loading...'}
          </p>
        </div>
        <div style={{ backgroundColor: '#1e1e1e', padding: '1.5rem', borderRadius: '8px', flex: 1 }}>
          <h3>Total Applications Received</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ff3b3f' }}>
            {totalApplications !== null ? totalApplications : 'Loading...'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
