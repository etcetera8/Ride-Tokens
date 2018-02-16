import React from 'react';
import './StatsCard.css';

const StatsCard = ({ yearStats, allStats, recentStats }) => {
  return (
    <section className="stats-card card">
      { yearStats &&
        <div>
          <h2 className="title">Year To Date</h2>
          <span className="card-data">Rides: {yearStats.count}</span>
          <span className="card-data">Distance: {yearStats.distance / 1000} kms</span>
          <span className="card-data">Elevation: {yearStats.elevation_gain} m</span>
          <span className="card-data">Time: {Math.floor((yearStats.elapsed_time /60)/60) } hours</span>
        </div>
      }
      { allStats && 
        <div>
          <h2 className="title"> All-Time</h2>
          <span className="card-data">Rides: {allStats.count}</span>
          <span className="card-data">Distance: {allStats.distance / 1000} kms</span>
          <span className="card-data">Elevation: {allStats.elevation_gain} m</span>
          <span className="card-data">Time: {Math.floor((allStats.elapsed_time / 60) /60)} hours</span>
        </div>
      }
      { recentStats &&
        <div>
          <h2 className="title">Recent Rides</h2>
          <span className="card-data">Rides: {recentStats.count}</span>
          <span className="card-data">Distance: {recentStats.distance / 1000} kms</span>
          <span className="card-data">Elevation: {recentStats.elevation_gain} m</span>
          <span className="card-data">Time: {Math.floor((recentStats.elapsed_time / 60) /60)} hours</span>
        </div>
      }

    </section>
  );
};

export default StatsCard;