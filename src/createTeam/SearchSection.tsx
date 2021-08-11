import React, { ChangeEvent, FunctionComponent } from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import debounce from 'lodash/debounce';
import { getBaseLine } from '../app/theme';
import { useDispatch } from 'react-redux';
import { updateSearchInput } from './createTeamActions';
import Container from '../components/Container';

const SearchSectionRoot = styled(Container)`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: ${getBaseLine(2)};
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  height: ${getBaseLine(4)};
  padding: 0 ${getBaseLine(1)};

  @media (min-width: 768px) {
    min-width: 600px;
  }
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  ::placeholder {
    color: #1f2933;
  }
`;

const Stroke = styled.div`
  z-index: -1;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 1px;
  background: linear-gradient(270deg, #fbfcfd 0%, rgba(0, 0, 0, 0.2) 50.05%, #fbfcfd 100%);
`;

const SearchSection: FunctionComponent = () => {
  const dispatch = useDispatch();
  const onInputChange = debounce((event: ChangeEvent<HTMLInputElement>) => dispatch(updateSearchInput(event.target.value)), 300);

  return (
    <SearchSectionRoot>
      <Stroke />
      <InputWrapper>
        <SearchIcon />
        <Input onChange={onInputChange} placeholder="Find Pokemon..." />
      </InputWrapper>
    </SearchSectionRoot>
  );
};

export default SearchSection;
