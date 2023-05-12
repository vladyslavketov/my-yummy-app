import { HeaderNav, NavList } from "./Navigation.styled";

const Navigation = ({ newClass }) => {
  const isRenderToHeader = newClass === 'nav__list--header' ? true : false;
  const isRenderToFooter = newClass === 'nav__list--footer' ? true : false;

  return (  
    <NavList className={newClass}>
      {isRenderToHeader && <li><HeaderNav to='/categories/beef'>Categories</HeaderNav></li>}
      {isRenderToFooter && <li><HeaderNav to='/search'>Ingredients</HeaderNav></li>}

      <li><HeaderNav to='/add'>Add recipes</HeaderNav></li>
      <li><HeaderNav to='/my'>My recipes</HeaderNav></li>
      <li><HeaderNav to='/favorite'>Favorites</HeaderNav></li>
      <li><HeaderNav to='/shopping-list'>Shopping list</HeaderNav></li>
      {isRenderToHeader && <li><HeaderNav to='/search'>Search</HeaderNav></li>}
    </NavList>
  );
}

export default Navigation;