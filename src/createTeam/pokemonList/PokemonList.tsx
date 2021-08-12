import React, { ChangeEvent, FunctionComponent } from 'react';
import styled from 'styled-components';
import Pagination from '@material-ui/lab/Pagination';
import { getBaseLine } from '../../app/theme';
import PokemonListHeader from './PokemonListHeader';
import PokemonListRow from './PokemonListRow';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getMatchedPokemon } from '../createTeamSelectors';
import Container from '../../components/Container';
import { useEffect } from 'react';

const CHARACTERS_PER_PAGE = 10;

const PokemonListRoot = styled.div`
  margin: ${getBaseLine(3)} 0;
  overflow-x: auto;
`;

const PokemonListContainer = styled(Container)`
  min-width: 960px;
`;

const ListWrapper = styled.div`
  border-radius: 8px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: ${getBaseLine(1)};
`;

const NoMatch = styled.div`
  height: ${getBaseLine(7)};
  line-height: ${getBaseLine(7)};
  font-size: 20px;
  text-align: center;
`;

const PokemonList: FunctionComponent = () => {
  const matchedPokemon = useSelector(getMatchedPokemon);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(matchedPokemon.length / CHARACTERS_PER_PAGE);
  const pokemonToDisplay = matchedPokemon.slice((currentPage - 1) * CHARACTERS_PER_PAGE, currentPage * CHARACTERS_PER_PAGE);
  const onPageChange = (event: ChangeEvent<unknown>, targetPage: number) => setCurrentPage(targetPage);
  const hasMatch = matchedPokemon.length > 0;

  useEffect(() => {
    setCurrentPage(1);
  }, [matchedPokemon]);

  return (
    <PokemonListRoot>
      <PokemonListContainer>
        <PokemonListHeader />
        <ListWrapper>
          {hasMatch ? pokemonToDisplay.map((character) => <PokemonListRow character={character} key={character.id} />) : <NoMatch>No Match</NoMatch>}
        </ListWrapper>
        {hasMatch && <Pagination count={totalPages} onChange={onPageChange} page={currentPage} />}
      </PokemonListContainer>
    </PokemonListRoot>
  );
};

export default PokemonList;
