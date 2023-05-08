import styled from "styled-components";
import { minDevice } from "components/common/breakpoints";

export const Main = styled.main`
  // position relative;
  flex-grow: 1;
  padding-bottom: 100px;

  z-index: 1;

  @media ${minDevice.tablet} {padding-bottom: 200px;};
`;