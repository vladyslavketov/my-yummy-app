import styled from 'styled-components';
import { breakpoint, minDevice } from './breakpoints';

const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;

  @media ${minDevice.mobile} {
    width: ${breakpoint.mobile}px;
  }
  @media ${minDevice.tablet} {
    width: ${breakpoint.tablet}px;
    padding: 0 32px;
  }
  @media ${minDevice.desktop} {
    width: ${breakpoint.desktop}px;
    padding: 0 100px;
  }
`;

export default Container;
