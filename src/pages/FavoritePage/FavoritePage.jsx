import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "components/common/Container.styled";
import MainTitle from "components/MainTitle/MainTitle";
import { FavoritePlugImg, FavoritePlugNavLink, FavoritePlugText, FavoriteSection } from "components/Favorite/Favorite.styled";
import FavoriteList from "components/FavoriteList/FavoriteList";
import { selectRecipesFavorites } from "redux/recipes/recipesSelectors";
import { getFavorite } from "redux/recipes/recipesOperation";
import { PagePagination } from "components/Pagination/Pagination";

const FavoritePage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectRecipesFavorites);
  const [render, setRender] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;
  const isFavoriteListEmpty = !Boolean(favorites?.length);
  const totalPages = favorites?.length > 0 ? favorites[0]?.totalCount : 1;

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (render) {
      setRender(0);
      return;
    }
    dispatch(getFavorite(currentPage));
  }, [dispatch, currentPage, render, setRender]);

  return (
    <>    
    <FavoriteSection>
      <Container>
        <MainTitle title={'Favorites'} />
        {isFavoriteListEmpty ? (
            <>
              <FavoritePlugImg />
              <FavoritePlugText>
                Favorite list is empty, but you can choose your favorite recipe
                on{' '}
                <FavoritePlugNavLink to="/categories/beef">
                  Categories
                </FavoritePlugNavLink>{' '}
                page
              </FavoritePlugText>
            </>
          ) : (
            <>
              <FavoriteList />
              <PagePagination
                totalPages={totalPages}
                cardsPerPage={cardsPerPage}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
              />
            </>
          )}
      </Container>
    </FavoriteSection>
    </>
  )
};

export default FavoritePage;
