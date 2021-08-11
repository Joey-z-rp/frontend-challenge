import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StatRoot = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  font-size: 14px;
`;

const StatValue = styled.div`
  font-size: 42px;
  font-weight: 700;
`;

type StatProps = {
  className?: string;
  name: string;
  value?: number;
};

const Stat: FunctionComponent<StatProps> = ({ className, name, value }) => {
  return (
    <StatRoot className={className}>
      <div>{name}</div>
      <StatValue>{value ? value : '-'}</StatValue>
    </StatRoot>
  );
};

export default Stat;
