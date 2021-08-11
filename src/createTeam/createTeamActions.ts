import { Pokemon } from '../types';

export const ADD_TEAM_MEMBER = 'ADD_TEAM_MEMBER';
export const REMOVE_TEAM_MEMBER = 'REMOVE_TEAM_MEMBER';

export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const CLEAR_ALL_FILTERS = 'CLEAR_ALL_FILTERS';

export const UPDATE_SEARCH_INPUT = 'UPDATE_SEARCH_INPUT';

export const LOAD_POKEMON = 'LOAD_POKEMON';

export const addTeamMember = (id: number) => ({
  type: ADD_TEAM_MEMBER,
  payload: { id },
});

export const removeTeamMember = (id: number) => ({
  type: REMOVE_TEAM_MEMBER,
  payload: { id },
});

export const addFilter = (filter: string) => ({
  type: ADD_FILTER,
  payload: { filter },
});

export const removeFilter = (filter: string) => ({
  type: REMOVE_FILTER,
  payload: { filter },
});

export const clearAllFilters = () => ({
  type: CLEAR_ALL_FILTERS,
});

export const updateSearchInput = (input: string) => ({
  type: UPDATE_SEARCH_INPUT,
  payload: { input },
});

export const loadPokemon = (pokemon: Pokemon[]) => ({
  type: LOAD_POKEMON,
  payload: { pokemon },
});
