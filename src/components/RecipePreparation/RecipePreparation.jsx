import { RecipePreparationContainer, RecipePreparationImg, RecipePreparationItem, RecipePreparationItemNumber, RecipePreparationItemText, RecipePreparationList, RecipePreparationSection, RecipePreparationTitle, RecipePreparationWrap } from "./RecipePreparation.styled";

const instructionsNormalize = ( instructions ) => {
  return instructions.split('.\r\n');
}

const RecipePreparation = ({ currentRecipe }) => {
  const { instructions, preview , title } = currentRecipe;
  const instructionsList = instructionsNormalize(instructions);

  return (
    <RecipePreparationSection>
      <RecipePreparationContainer>
        <RecipePreparationWrap>
          <RecipePreparationTitle>Recipe Preparation</RecipePreparationTitle>
          <RecipePreparationList>
            {instructionsList?.map((item, index) => (
              <RecipePreparationItem key={index}>
                <RecipePreparationItemNumber>{index + 1}</RecipePreparationItemNumber>
                <RecipePreparationItemText>{item}</RecipePreparationItemText>
              </RecipePreparationItem>
            ))}
          </RecipePreparationList>
        </RecipePreparationWrap>
        <RecipePreparationImg src={preview} alt={title}/>
      </RecipePreparationContainer>
    </RecipePreparationSection>
  );
};

export default RecipePreparation;