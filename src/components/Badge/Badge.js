import React, { Component } from 'react';
import { connect } from 'react-redux'
import mtn from '../../assets/mtn.png';
import mtns from '../../assets/mtns.png';
import yearDistance from '../../assets/yearDistance.png';
import allDistance from '../../assets/allDistance.png';

import './Badge.css';
import PropTypes from 'prop-types';
import { badgeCreator } from '../../BadgeCreator';

class Badge extends Component {
  constructor(props) {
    super(props)
  }

  badgeAmalgamation = () => {
    const {allStats, yearStats, goals} = this.props;
    const badgeArray = [];
    badgeArray.push(badgeCreator(yearStats.elevation_gain, goals.yearElevation, 'Elevation Hero', 'feet', mtn));
    badgeArray.push(badgeCreator(yearStats.distance, goals.yearDistance, 'Distance Trasher', 'miles', yearDistance));
    badgeArray.push(badgeCreator(allStats.distance, goals.allDistance, 'All Time Distance', 'miles', allDistance));
    badgeArray.push(badgeCreator(allStats.elevation_gain, goals.allElevation, 'All Time Elevation', 'feet', mtns));
    return badgeArray
  }
  render() {
    return (
      <div>
        {this.badgeAmalgamation()}
      </div>
    );
  }
};

Badge.propTypes = {
  currentEl: PropTypes.number,
  goalEl: PropTypes.number.isRequired,
  goalDist: PropTypes.number.isRequired,
  yearStats:PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
  allStats: state.userStats.all_ride_totals,
  yearStats: state.userStats.yearStats,
  goals: state.defaultBadges
})
export default connect(mapStateToProps)(Badge);