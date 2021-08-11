import React, { useEffect } from 'react';
import 'css-wipe';
import jsonData from './data/pokemon-gen1-gen2-gen3.json';
import type { Pokemon } from './types';
import { useDispatch } from 'react-redux';
import { loadPokemon } from './createTeam/createTeamActions';
import CreateTeam from './createTeam/CreateTeam';

const data = jsonData as Pokemon[];

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPokemon(data));
  }, [dispatch]);

  return (
    <>
      <CreateTeam />
    </>
  );
}

export default App;
