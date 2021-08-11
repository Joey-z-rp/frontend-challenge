import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getBaseLine } from '../../../app/theme';
import { Pokemon } from '../../../types';
import { removeTeamMember } from '../../createTeamActions';

const AvatarRoot = styled.div`
  border: 3px solid #3169b1;
  border-radius: ${getBaseLine(3.75)};
  box-shadow: 0px 3px 5px #888888;
  width: ${getBaseLine(7.5)};
  height: ${getBaseLine(7.5)};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 ${getBaseLine(0.5)};
  position: relative;
`;

const Overlay = styled.div`
  display: flex;
  background-color: rgba(49, 105, 177, 0.7);
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  transition: all ease-in-out 0.2s;

  &:hover {
    opacity: 1;
  }
`;

const RemoveButton = styled.button`
  color: #ffffff;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
`;

const AvatarImage = styled.img`
  width: 115%;
`;

type AvatarProps = {
  character: Pokemon;
};

const Avatar: FunctionComponent<AvatarProps> = ({ character }) => {
  const dispatch = useDispatch();
  const onRemoveClick = () => dispatch(removeTeamMember(character.id));

  return (
    <AvatarRoot>
      <Overlay>
        <RemoveButton onClick={onRemoveClick}>Remove</RemoveButton>
      </Overlay>
      <AvatarImage src={character?.sprite?.artwork_url} />
    </AvatarRoot>
  );
};

export default Avatar;
