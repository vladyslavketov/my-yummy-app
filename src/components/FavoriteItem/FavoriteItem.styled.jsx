import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as Trash } from './trash.svg';
import { minDevice } from "components/common/breakpoints";

export const StyledFavoriteItem = styled.li`
  display: flex;
  gap: 14px;
  padding: 14px 9px;

  border-radius: 8px;
  background-color: #ffffff;

  @media ${minDevice.tablet} {
    gap: 24px;
    padding: 28px 24px;
  };
  @media ${minDevice.desktop} {
    gap: 40px;
    padding: 40px;
  };
`;
export const FavoriteImg = styled.img`
  flex: 0 0 124px;
  width: 124px;
  height: 124px;
  object-fit: cover;

  border-radius: 8px;

  @media ${minDevice.tablet} {
    flex: 0 0 228px;
    width: 228px;
    height: 232px;
  };
  @media ${minDevice.desktop} {
    flex: 0 0 318px;
    width: 318px;
    height: 324px;
  };
`;
export const FavoriteBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  max-height: 100%;
`;

export const FavoriteBoxTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4px;

  @media ${minDevice.tablet} {margin-bottom: 18px;};
  @media ${minDevice.desktop} {margin-bottom: 30px;};
`;
export const FavoriteBoxCenter = styled.div`
  flex-grow: 1;
  padding-right: 36px;

  @media ${minDevice.tablet} {
    padding-right: 106px;
  };
  @media ${minDevice.desktop} {
    padding-right: 123px;
  };
`;
export const FavoriteBoxBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;
`;

export const FavoriteTitle = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.24px;
  color: #3e4462;

  @media ${minDevice.tablet} {
    font-size: 24px;
  };
`;
export const FavoriteBtnDelete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 24px;
  width: 24px;
  height: 24px;

  background-color: #ebf3d4;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover, :focus {
    background-color: #22252A;

    svg {color: #fafafa;}
  }

  @media ${minDevice.tablet} {
    flex: 0 0 38px;
    width: 38px;
    height: 38px;
  };
  @media ${minDevice.desktop} {
    flex: 0 0 44px;
    width: 44px;
    height: 44px;
  };
`;
export const FavoriteIconBtnDelete  = styled(Trash)`
  flex: 0 0 14px;
  width: 14px;
  height: 14px;

  color: #22252a;
  border-radius: 4px;

  @media ${minDevice.tablet} {
    flex: 0 0 22px;
    width: 22px;
    height: 22px;
  };
  @media ${minDevice.desktop} {
    flex: 0 0 24px;
    width: 24px;
    height: 24px;
  };
`;

export const FavoriteDesc = styled.p`
  font-size: 8px;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: #23262a;
  
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: break-spaces;

  @media ${minDevice.tablet} {
    font-size: 14px;
    line-height: 1.29;
  };
  @media ${minDevice.desktop} {
    font-size: 18px;
    line-height: 1.33;
  };
`;

export const FavoriteTime = styled.span`
  display: inline-block;

  color: #3e4462;

  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -0.24px;

  @media ${minDevice.tablet} {
    font-size: 14px;
    line-height: 1.43;
  };
`;
export const FavoriteBtnDetails = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 87px;
  height: 27px;

  font-size: 10px;
  line-height: 1.5;
  color: #22252a;

  border-radius: 24px 44px;
  background-color: #fafafa;
  cursor: pointer;

  &:hover, :focus {
    background-color: #8baa36;
  }

  @media ${minDevice.tablet} {
    width: 138px;
    height: 45px;

    font-size: 14px;
  };
  @media ${minDevice.desktop} {
    width: 160px;
    height: 54px;

    font-size: 16px;
  };
`;