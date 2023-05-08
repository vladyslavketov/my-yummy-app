import styled from "styled-components";
import { Link } from "react-router-dom";

export const RecipeCardLink = styled(Link)`
  position: relative;
  width: 100%;
`;
export const RecipeCardImg = styled.img`
  // width: 100%;

  object-fit: cover;
  border-radius: 8px;
`;
export const RecipeCardTitle = styled.p`
  position: absolute;
  bottom: 24px;
  left: 50%;

  display: flex;
  align-items: center;
  // justify-content: center;
  width: calc(100% - 2*16px);
  height: 52px;
  padding: 0 16px;

  color: black;

  background-color: #FFFFFF;
  border-radius: 8px;
  transform: translateX(-50%);
`;