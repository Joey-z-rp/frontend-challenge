import styled from 'styled-components';
import { getBaseLine } from '../../../app/theme';

type ColumnProps = {
  widthMultiplier: number;
};

const Column = styled.div<ColumnProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => getBaseLine(props.widthMultiplier)};
  height: ${getBaseLine(6.5)};
  font-size: 24px;
  font-weight: 700;
`;

export default Column;
