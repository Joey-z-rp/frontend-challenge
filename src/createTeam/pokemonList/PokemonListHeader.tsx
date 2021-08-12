import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { getBaseLine } from '../../app/theme';
import Column from './components/Column';
import {
  POKEMON_HP_COLUMN_WIDTH,
  POKEMON_SPEED_COLUMN_WIDTH,
  POKEMON_ATTACK_COLUMN_WIDTH,
  POKEMON_SP_ATTACK_COLUMN_WIDTH,
  POKEMON_DEFENSE_COLUMN_WIDTH,
  POKEMON_NAME_COLUMN_WIDTH,
  POKEMON_SP_DEFENSE_COLUMN_WIDTH,
  POKEMON_TYPES_COLUMN_WIDTH,
} from './pokemonListConstants';

const PokemonListHeaderRoot = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderColumn = styled(Column)`
  font-size: 13px;
  height: ${getBaseLine(4)};
`;

const LeftAlignHeaderColumn = styled(HeaderColumn)`
  justify-content: flex-start;
`;

const PokemonListHeader: FunctionComponent = () => {
  return (
    <PokemonListHeaderRoot>
      <LeftAlignHeaderColumn widthMultiplier={POKEMON_NAME_COLUMN_WIDTH}>Pokemon</LeftAlignHeaderColumn>
      <LeftAlignHeaderColumn widthMultiplier={POKEMON_TYPES_COLUMN_WIDTH}>Type(s)</LeftAlignHeaderColumn>
      <HeaderColumn widthMultiplier={POKEMON_ATTACK_COLUMN_WIDTH}>Attach</HeaderColumn>
      <HeaderColumn widthMultiplier={POKEMON_SP_ATTACK_COLUMN_WIDTH}>Sp. Attach</HeaderColumn>
      <HeaderColumn widthMultiplier={POKEMON_DEFENSE_COLUMN_WIDTH}>Defense</HeaderColumn>
      <HeaderColumn widthMultiplier={POKEMON_SP_DEFENSE_COLUMN_WIDTH}>Sp. Defense</HeaderColumn>
      <HeaderColumn widthMultiplier={POKEMON_SPEED_COLUMN_WIDTH}>Speed</HeaderColumn>
      <HeaderColumn widthMultiplier={POKEMON_HP_COLUMN_WIDTH}>Hit Points</HeaderColumn>
    </PokemonListHeaderRoot>
  );
};

export default PokemonListHeader;
