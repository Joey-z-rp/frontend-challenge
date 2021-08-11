import { CreateTeamState } from '../../createTeam/createTeamReducer';
import { EntityState } from '../entity/entityReducer';

export type State = {
  createTeam: CreateTeamState;
  entity: EntityState;
};

export type StandardAction = {
  type: string;
  payload?: {
    [k: string]: any;
  };
};
