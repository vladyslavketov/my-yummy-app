import styled from 'styled-components';

export const ContainerForAline = styled.div`
  display: flex;
  justify-content: center;
  /* padding: 20px; */
  /* margin-bottom: 200px;
  @media (min-width: 768px) {
    margin-bottom: 100px;
  } */
`;
export const PaginationContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  background: #fafafa;
  box-shadow: rgba(135, 135, 135, 0.2) 0px 0px 4px 6px;
  border-radius: 26px;
  margin-left: auto;
  margin-right: auto;
  ul.rc-pagination {
    display: flex;
  }

  li.rc-pagination-jump-next,
  li.rc-pagination-jump-prev {
    :after {
      display: block;
      content: '•••';
      color: #656565;
    }
  }

  li.rc-pagination-item-active {
    background: #ebf3d4;
    border-radius: 50%;

    margin-left: 3px;
    margin-right: 3px;
  }

  li div {
    background: transparent;
    height: 9px;
  }
`;

export const PageButton = styled.button`
  cursor: pointer;
  width: 28px;
  height: 27px;
  left: 72px;
  top: 14px;
  color: #656565;
  background: ${props =>
    props.active
      ? `#22252a`
      : 'transparent'};
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  border: none;
  border-radius: 50%;
  /* margin-left: 3px; */
  /* margin-right: 3px; */
  &:hover {
    background: #ebf3d4;
  }
`;

export const Slider = styled.div`
  width: 15px;
  height: 15px;
  left: 7.34%;
  right: 90.83%;
  top: 36.36%;
  bottom: 36.36%;
  background: rgba(169, 169, 169, 0.73);
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;
