import { useDispatch } from 'react-redux';
import { deleteFavorite, getFavorite } from 'redux/recipes/recipesOperation';

const {
  StyledFavoriteItem,
  FavoriteImg,
  FavoriteBoxWrap,
  FavoriteBoxTop,
  FavoriteBoxCenter,
  FavoriteBoxBottom,
  FavoriteTitle,
  FavoriteBtnDelete,
  FavoriteIconBtnDelete ,
  FavoriteDesc,
  FavoriteTime,
  FavoriteBtnDetails,
} = require('./FavoriteItem.styled');

const FavoriteItem = ({
  favoriteRecipe: { _id, title, preview, description, time },
}) => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    await dispatch(deleteFavorite(_id));
    await dispatch(getFavorite());
  };

  return (
    <StyledFavoriteItem key={_id}>
      <FavoriteImg src={preview} alt={title} width={124} height={124} />
      <FavoriteBoxWrap>
        <FavoriteBoxTop>
          <FavoriteTitle>{title}</FavoriteTitle>
          <FavoriteBtnDelete
            type={'button'}
            title={'Delete'}
            onClick={handleClick}
          >
            <FavoriteIconBtnDelete  />
          </FavoriteBtnDelete>
        </FavoriteBoxTop>
        <FavoriteBoxCenter>
          <FavoriteDesc>{description}</FavoriteDesc>
        </FavoriteBoxCenter>
        <FavoriteBoxBottom>
          <FavoriteTime>{time} min</FavoriteTime>
          <FavoriteBtnDetails to={`/recipe/${_id}`}>See recipe</FavoriteBtnDetails>
        </FavoriteBoxBottom>
      </FavoriteBoxWrap>
    </StyledFavoriteItem>
  );
};

export default FavoriteItem;
