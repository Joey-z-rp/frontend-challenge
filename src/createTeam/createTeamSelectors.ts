import { createSelector } from 'reselect';
import uniq from 'lodash/uniq';
import { State } from '../app/redux/storeTypes';
import { Pokemon } from '../types';
import { MY_TEAM_FILTER_NAME } from './filterSection/FilterConstants';

export const getSelectedMemberIds = (state: State) => state.createTeam.selectedMemberIds;
const getPokemonEntities = (state: State) => state.entity.pokemon;
const getSearchInput = (state: State) => state.createTeam.searchInput;

export const getSelectedMembers = createSelector([getSelectedMemberIds, getPokemonEntities], (memberIds, pokemonEntities) =>
  memberIds.map((id) => pokemonEntities[id]).filter((_) => _)
);

export const getAllTypes = createSelector(getPokemonEntities, (pokemonEntities) =>
  uniq(
    Object.values(pokemonEntities).reduce<string[]>((types, character: Pokemon) => [...types, ...character.types.map((type) => type.type_name)], [])
  )
);

export const getSelectedFilters = (state: State) => state.createTeam.selectedFilters;

export const getFilteredPokemon = createSelector(
  [getSelectedFilters, getSelectedMemberIds, getPokemonEntities],
  (selectedFilters, memberIds, pokemonEntities) => {
    if (selectedFilters.length === 0) {
      return Object.values<Pokemon>(pokemonEntities);
    }

    const isShowingMyTeam = selectedFilters.includes(MY_TEAM_FILTER_NAME);

    return Object.values<Pokemon>(pokemonEntities).filter((character) => {
      const isInTheTeam = isShowingMyTeam && memberIds.includes(character.id);
      const isTypeMatched = character.types.some((type) => selectedFilters.includes(type.type_name));

      return isTypeMatched || isInTheTeam;
    });
  }
);

export const getMatchedPokemon = createSelector([getFilteredPokemon, getSearchInput], (filteredPokemon, searchInput) => {
  if (!searchInput) {
    return filteredPokemon;
  }

  const lowerCaseSearchInput = searchInput.toLowerCase();
  return filteredPokemon.filter((character) => {
    const isNameMatched = character.name.toLowerCase().includes(lowerCaseSearchInput);
    const isTypeMatched = character.types.some((type) => type.type_name.toLowerCase().includes(lowerCaseSearchInput));

    return isNameMatched || isTypeMatched;
  });
});
