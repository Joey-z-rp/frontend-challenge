import { StandardAction } from '../app/redux/storeTypes';
import { Pokemon } from '../types';
import {
  ADD_FILTER,
  ADD_TEAM_MEMBER,
  CLEAR_ALL_FILTERS,
  LOAD_POKEMON,
  REMOVE_FILTER,
  REMOVE_TEAM_MEMBER,
  UPDATE_SEARCH_INPUT,
} from './createTeamActions';

const MAX_TEAM_SIZE = 6;

export type CreateTeamState = {
  pokemonIds: number[];
  selectedFilters: string[];
  selectedMemberIds: number[];
  searchInput: string;
};

const initialState: CreateTeamState = {
  pokemonIds: [],
  selectedFilters: [],
  selectedMemberIds: [],
  searchInput: '',
};

const createTeamReducer = (state = initialState, action: StandardAction): CreateTeamState => {
  switch (action.type) {
    case ADD_TEAM_MEMBER:
      return {
        ...state,
        selectedMemberIds:
          state.selectedMemberIds.length < MAX_TEAM_SIZE ? [...state.selectedMemberIds, action.payload!.id] : state.selectedMemberIds,
      };

    case REMOVE_TEAM_MEMBER:
      return {
        ...state,
        selectedMemberIds: state.selectedMemberIds.filter((id) => id !== action.payload!.id),
      };

    case ADD_FILTER:
      return {
        ...state,
        selectedFilters: [...state.selectedFilters, action.payload!.filter],
      };

    case REMOVE_FILTER:
      return {
        ...state,
        selectedFilters: state.selectedFilters.filter((filterName) => filterName !== action.payload!.filter),
      };

    case CLEAR_ALL_FILTERS:
      return {
        ...state,
        selectedFilters: [],
      };

    case UPDATE_SEARCH_INPUT:
      console.log(action.payload!.input);
      return {
        ...state,
        searchInput: action.payload!.input,
      };

    case LOAD_POKEMON:
      return {
        ...state,
        pokemonIds: (action.payload!.pokemon as Pokemon[]).map((character) => character.id),
      };

    default:
      return state;
  }
};

export default createTeamReducer;
