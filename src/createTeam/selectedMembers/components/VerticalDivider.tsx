import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { getBaseLine } from '../../../app/theme';

const VerticalDividerRoot = styled.div`
  height: ${getBaseLine(5)};
  width: 1px;
  background: linear-gradient(360deg, #f8f9fc 0%, #e3e7ed 50.05%, #f8f9fc 100%);
  margin: 0 ${getBaseLine(2)};
`;

const VerticalDivider: FunctionComponent = () => {
  return <VerticalDividerRoot />;
};

export default VerticalDivider;
