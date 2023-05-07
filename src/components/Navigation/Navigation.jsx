import { HeaderNav, NavList } from "./Navigation.styled";

const Navigation = () => {
  return (  
    <NavList>
      <li><HeaderNav to='/categories/:categoryName'>Categories</HeaderNav></li>
      <li><HeaderNav to='/add'>Add recipes</HeaderNav></li>
      <li><HeaderNav to='/my'>My recipes</HeaderNav></li>
      <li><HeaderNav to='/favorite'>Favorites</HeaderNav></li>
      <li><HeaderNav to='/shopping-list'>Shopping list</HeaderNav></li>
      <li><HeaderNav to='/search'>Search</HeaderNav></li>
      <li><HeaderNav to='/ui'>UiKit</HeaderNav></li>
    </NavList>
  );
}

export default Navigation;