import { combineReducers } from 'redux';
import { addUserData } from './addUserDataReducer';
import { addUserStats } from './addUserStatsReducer';
import { addUserActivities } from './addUserActivitiesReducer';
import { addUserTarget } from './addUserTargetReducer';
import { addBadge } from './addBadgeReducer.js';

const rootReducer = combineReducers(
  {
    userData: addUserData,
    userStats: addUserStats,
    userActivities: addUserActivities,
    userTarget: addUserTarget,
    defaultBadges: addBadge
  }
);

export default rootReducer;