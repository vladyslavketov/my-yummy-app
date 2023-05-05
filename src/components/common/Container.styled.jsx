import styled from 'styled-components';
import { breakpoint, minDevice } from './breakpoints';

const Container = styled.div`
  margin: 0 auto;

  @media ${minDevice.mobile} {
    width: ${breakpoint.mobile};
    padding: 0 16px;
  }
  @media ${minDevice.tablet} {
    width: ${breakpoint.tablet};
    padding: 0 32px;
  }
  @media ${minDevice.desktop} {
    width: ${breakpoint.desktop};
    padding: 0 100px;
  }
`;

export default Container;
