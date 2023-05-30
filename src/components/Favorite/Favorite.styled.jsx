import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { minDevice } from 'components/common/breakpoints';

export const FavoriteSection = styled.section`
  padding-bottom: 100px;
`;

export const FavoritePlugImg = styled.div`
  width: 208px;
  height: 133px;
  margin: 0 auto;

  background-image: url('${process.env.PUBLIC_URL}/images/signPages/plug.png');
  background-size: cover;
  background-repeat: no-repeat;
  @media ${minDevice.tablet} {width: 350px; height: 225px;}
`;

export const FavoritePlugText = styled.p`
  margin-top: 24px;
  text-align: center;
`;

export const FavoritePlugNavLink = styled(NavLink)`
  font-size: 16px;
  line-height: 24px;

  text-decoration-line: underline;
  text-align: center;
  color: #8baa36;
`;