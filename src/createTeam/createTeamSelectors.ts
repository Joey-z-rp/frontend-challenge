import { createSelector } from 'reselect';
import uniq from 'lodash/uniq';
import { State } from '../app/redux/storeTypes';
import { Pokemon } from '../types';

export const getSelectedMemberIds = (state: State) => state.createTeam.selectedMemberIds;
const getPokemonEntities = (state: State) => state.entity.pokemon;

export const getSelectedMembers = createSelector([getSelectedMemberIds, getPokemonEntities], (memberIds, pokemonEntities) =>
  memberIds.map((id) => pokemonEntities[id]).filter((_) => _)
);

export const getAllTypes = createSelector(getPokemonEntities, (pokemonEntities) =>
  uniq(
    Object.values(pokemonEntities).reduce<string[]>((types, character: Pokemon) => [...types, ...character.types.map((type) => type.type_name)], [])
  )
);

export const getSelectedFilters = (state: State) => state.createTeam.selectedFilters;
