import React, { FunctionComponent } from 'react';
import CheckIcon from '@material-ui/icons/Check';
import startCase from 'lodash/startCase';

import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addFilter, removeFilter } from '../createTeamActions';
import Type from '../../components/Type';
import { getBaseLine } from '../../app/theme';

type FilterButtonRootProps = {
  isSelected: boolean;
};

const FilterButtonRoot = styled(Type)<FilterButtonRootProps>`
  color: ${(props) => (props.isSelected ? '#ffffff' : '#3169B1')};
  background-color: ${(props) => (props.isSelected ? '#3169B1' : '#ffffff')};
  cursor: pointer;
  margin: 0 ${getBaseLine(0.25)} ${getBaseLine(0.5)};
`;

type FilterButtonProps = {
  name: string;
  isSelected: boolean;
};

const FilterButton: FunctionComponent<FilterButtonProps> = ({ name, isSelected }) => {
  const dispatch = useDispatch();
  const onFilterClick = () => {
    if (isSelected) {
      return dispatch(removeFilter(name));
    }

    return dispatch(addFilter(name));
  };

  return (
    <FilterButtonRoot onClick={onFilterClick} isSelected={isSelected}>
      {isSelected && (
        <>
          <CheckIcon fontSize="small" />
          &nbsp;
        </>
      )}
      {startCase(name)}
    </FilterButtonRoot>
  );
};

export default FilterButton;
