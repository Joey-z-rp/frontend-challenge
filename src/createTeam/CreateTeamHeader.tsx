import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import pokemonLogoImage from '../img/pokemon-logo.png';
import { getBaseLine } from '../app/theme';

const CreateTeamHeaderRoot = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  height: ${getBaseLine(7)};
  background: linear-gradient(180deg, #ff0008 48.84%, #e60007 100%);
`;

const LogoImage = styled.img`
  height: ${getBaseLine(7)};
  position: relative;
  bottom: ${getBaseLine(-2)};
`;

const CreateTeamHeader: FunctionComponent = () => {
  return (
    <CreateTeamHeaderRoot>
      <LogoImage src={pokemonLogoImage} />
    </CreateTeamHeaderRoot>
  );
};

export default CreateTeamHeader;
