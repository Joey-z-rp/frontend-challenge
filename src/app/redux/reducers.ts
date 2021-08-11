import { combineReducers } from 'redux';
import createTeamReducer from '../../createTeam/createTeamReducer';
import entityReducer from '../entity/entityReducer';

const rootReducer = combineReducers({
  createTeam: createTeamReducer,
  entity: entityReducer,
});

export default rootReducer;
