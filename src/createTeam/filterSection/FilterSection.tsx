import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getBaseLine } from '../../app/theme';
import { clearAllFilters } from '../createTeamActions';
import { getAllTypes, getSelectedFilters } from '../createTeamSelectors';
import FilterButton from './FilterButton';
import { MY_TEAM_FILTER_NAME } from './FilterConstants';

const FilterSectionRoot = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: ${getBaseLine(3.5)};
`;

const ClearAll = styled.button`
  border: none;
  background: none;
  color: #7b8793;
  cursor: pointer;
  line-height: ${getBaseLine(2.75)};
  font-size: 12px;
  text-decoration-line: underline;
  margin: 0 0 ${getBaseLine(0.5)} ${getBaseLine(0.5)};
`;

const FilterSection: FunctionComponent = () => {
  const dispatach = useDispatch();
  const types = useSelector(getAllTypes);
  const selectedFilters = useSelector(getSelectedFilters);
  const onClearAllClick = () => dispatach(clearAllFilters());
  const filters = [...types, MY_TEAM_FILTER_NAME];

  return (
    <FilterSectionRoot>
      {filters.map((filter) => (
        <FilterButton key={filter} name={filter} isSelected={selectedFilters.includes(filter)} />
      ))}
      <ClearAll onClick={onClearAllClick}>Clear all</ClearAll>
    </FilterSectionRoot>
  );
};

export default FilterSection;
