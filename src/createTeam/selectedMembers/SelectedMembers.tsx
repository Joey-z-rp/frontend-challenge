import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getBaseLine } from '../../app/theme';
import { calculateTeamStats } from '../../utils/calculateTeamStats';
import { getSelectedMembers } from '../createTeamSelectors';
import Avatar from './components/Avatar';
import Stat from './components/Stat';
import VerticalDivider from './components/VerticalDivider';

const SelectedTeamRoot = styled.div`
  margin-top: ${getBaseLine(10)};
  text-align: center;
`;

const Title = styled.h1`
  font-size: 27px;
  font-weight: 700;
  margin: ${getBaseLine(5)} 0 ${getBaseLine(2)};
`;

const TeamWrapper = styled.div`
  overflow-x: auto;
`;

const MinWidthContainer = styled.div`
  min-width: 700px;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Avatars = styled(FlexWrapper)`
  margin-bottom: ${getBaseLine(2)};
`;

const StatWithMargin = styled(Stat)`
  margin-right: ${getBaseLine(1)};
`;

const TeamStatsInfo = styled.div`
  color: #7b8793;
  font-size: 12px;
  text-align: left;
`;

const SelectedMembers: FunctionComponent = () => {
  const selectedMembers = useSelector(getSelectedMembers);
  const hasTeamMember = selectedMembers && selectedMembers.length > 0;
  const teamStats = calculateTeamStats(selectedMembers);

  return (
    <SelectedTeamRoot>
      <Title>{hasTeamMember ? 'Your fearless team!' : 'Find Pokemon to build your team!'}</Title>
      <TeamWrapper>
        <MinWidthContainer>
          {hasTeamMember && (
            <Avatars>
              {selectedMembers.map((member) => (
                <Avatar character={member} key={member.id} />
              ))}
            </Avatars>
          )}
          <FlexWrapper>
            <div>
              <FlexWrapper>
                <StatWithMargin name="Attack" value={teamStats?.attack} />
                <Stat name="Special attack" value={teamStats?.['special-attack']} />
                <VerticalDivider />
                <StatWithMargin name="Defense" value={teamStats?.defense} />
                <Stat name="Special defense" value={teamStats?.['special-defense']} />
                <VerticalDivider />
                <Stat name="Speed" value={teamStats?.speed} />
                <VerticalDivider />
                <Stat name="Hit Points" value={teamStats?.hp} />
              </FlexWrapper>
              <TeamStatsInfo>*Totals as average for team</TeamStatsInfo>
            </div>
          </FlexWrapper>
        </MinWidthContainer>
      </TeamWrapper>
    </SelectedTeamRoot>
  );
};

export default SelectedMembers;
