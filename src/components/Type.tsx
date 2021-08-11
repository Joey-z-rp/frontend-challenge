import styled from 'styled-components';
import { getBaseLine } from '../app/theme';

const Type = styled.div`
  color: #3169b1;
  background-color: #ffffff;
  border: 1px solid #3169b1;
  height: ${getBaseLine(2.75)};
  line-height: ${getBaseLine(2.75)};
  border-radius: ${getBaseLine(1.375)};
  display: flex;
  align-items: center;
  padding: 0 ${getBaseLine(1)};
  font-size: 14px;
  font-weight: 700;
`;

export default Type;
