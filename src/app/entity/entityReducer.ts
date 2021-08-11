import { StandardAction } from '../redux/storeTypes';
import { LOAD_POKEMON } from '../../createTeam/createTeamActions';
import { Pokemon } from '../../types';

export type EntityState = {
  pokemon: {
    [id: string]: Pokemon;
  };
};

const initialState: EntityState = {
  pokemon: {},
};

const entityReducer = (state = initialState, action: StandardAction) => {
  switch (action.type) {
    case LOAD_POKEMON:
      return {
        ...state,
        pokemon: Object.assign(
          {},
          ...(action.payload!.pokemon as Pokemon[]).map((character) => ({
            [character.id]: character,
          }))
        ),
      };

    default:
      return state;
  }
};

export default entityReducer;
