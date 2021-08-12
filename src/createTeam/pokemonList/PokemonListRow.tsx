import React, { ChangeEvent, FunctionComponent } from 'react';
import styled from 'styled-components';
import CheckboxComponent from '@material-ui/core/Checkbox';
import startCase from 'lodash/startCase';
import { getBaseLine } from '../../app/theme';
import Type from '../../components/Type';
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
import { Pokemon } from '../../types';
import { getStatValue } from '../../utils/calculateTeamStats';
import { useDispatch, useSelector } from 'react-redux';
import { addTeamMember, removeTeamMember } from '../createTeamActions';
import { getSelectedMemberIds } from '../createTeamSelectors';

const HIGHLIGHT_THRESHOLD = 95;

const Divider = styled.div`
  background: linear-gradient(270deg, #f8f9fc 0%, #e3e7ed 50.05%, #f8f9fc 100%);
  width: 100%;
  height: 1px;
`;

const PokemonListRowRoot = styled.div`
  :last-child ${Divider} {
    display: none;
  }
`;

type PokemonListWrapperProps = {
  isSelected: boolean;
};

const PokemonListWrapper = styled.div<PokemonListWrapperProps>`
  background-color: ${(props) => (props.isSelected ? '#F8F9FC' : '')};
  display: flex;
  justify-content: space-between;
`;

const NameColumnWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Checkbox = styled(CheckboxComponent)`
  span {
    color: #3169b1;
  }
`;

const SmallAvatar = styled.img`
  border: 1px solid #3169b1;
  border-radius: ${getBaseLine(2)};
  width: ${getBaseLine(4)};
  height: ${getBaseLine(4)};
  margin: 0 ${getBaseLine(1)} 0 ${getBaseLine(0.5)};
`;

const CharacterType = styled(Type)`
  margin-right: ${getBaseLine(0.5)};
`;

const TypesWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

type HighlightableColumnProps = {
  shouldHighlight: boolean;
};

const HighlightableColumn = styled(Column)<HighlightableColumnProps>`
  color: ${(props) => props.shouldHighlight && '#FF0008'};
`;

type PokemonListRowProps = {
  character: Pokemon;
};

const PokemonListRow: FunctionComponent<PokemonListRowProps> = ({ character }) => {
  const dispatch = useDispatch();
  const selectedMemberIds = useSelector(getSelectedMemberIds);
  const { id, name, sprite, types: characterTypes } = character;
  const types = characterTypes.map((type) => type.type_name);
  const isSelected = selectedMemberIds.includes(id);
  const onChange = (event: ChangeEvent<HTMLInputElement>, isChecked: boolean) => {
    if (isChecked) {
      dispatch(addTeamMember(id));
    } else {
      dispatch(removeTeamMember(id));
    }
  };
  const attackValue = getStatValue(character, 'attack');
  const specialAttackValue = getStatValue(character, 'special-attack');
  const defenseValue = getStatValue(character, 'defense');
  const specialDefenseValue = getStatValue(character, 'special-defense');
  const speedValue = getStatValue(character, 'speed');
  const hpValue = getStatValue(character, 'hp');
  const checkShouldHighlight = (value: number) => value >= HIGHLIGHT_THRESHOLD;

  return (
    <PokemonListRowRoot>
      <PokemonListWrapper isSelected={isSelected}>
        <Column widthMultiplier={POKEMON_NAME_COLUMN_WIDTH}>
          <NameColumnWrapper>
            <Checkbox checked={isSelected} onChange={onChange} size="small" />
            <SmallAvatar src={sprite.front_url} />
            {name}
          </NameColumnWrapper>
        </Column>
        <Column widthMultiplier={POKEMON_TYPES_COLUMN_WIDTH}>
          <TypesWrapper>
            {types.map((type) => (
              <CharacterType key={type}>{startCase(type)}</CharacterType>
            ))}
          </TypesWrapper>
        </Column>
        <HighlightableColumn shouldHighlight={checkShouldHighlight(attackValue)} widthMultiplier={POKEMON_ATTACK_COLUMN_WIDTH}>
          {attackValue}
        </HighlightableColumn>
        <HighlightableColumn shouldHighlight={checkShouldHighlight(specialAttackValue)} widthMultiplier={POKEMON_SP_ATTACK_COLUMN_WIDTH}>
          {specialAttackValue}
        </HighlightableColumn>
        <HighlightableColumn shouldHighlight={checkShouldHighlight(defenseValue)} widthMultiplier={POKEMON_DEFENSE_COLUMN_WIDTH}>
          {defenseValue}
        </HighlightableColumn>
        <HighlightableColumn shouldHighlight={checkShouldHighlight(specialDefenseValue)} widthMultiplier={POKEMON_SP_DEFENSE_COLUMN_WIDTH}>
          {specialDefenseValue}
        </HighlightableColumn>
        <HighlightableColumn shouldHighlight={checkShouldHighlight(speedValue)} widthMultiplier={POKEMON_SPEED_COLUMN_WIDTH}>
          {speedValue}
        </HighlightableColumn>
        <HighlightableColumn shouldHighlight={checkShouldHighlight(hpValue)} widthMultiplier={POKEMON_HP_COLUMN_WIDTH}>
          {hpValue}
        </HighlightableColumn>
      </PokemonListWrapper>
      <Divider />
    </PokemonListRowRoot>
  );
};

export default PokemonListRow;
