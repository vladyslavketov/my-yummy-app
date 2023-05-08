import { FormSubcribeBtn, FormSubcribeInput, FormSubcribeLabel, FormSubcribeTag } from "./FormSubcribe.styled";

const FormSubcribe = () => {
  return (
   <FormSubcribeTag>
    <FormSubcribeLabel>
      <FormSubcribeInput name='subcribe' placeholder="Enter your email address"/>
    </FormSubcribeLabel>
    <FormSubcribeBtn type="submit">Subcribe</FormSubcribeBtn>
   </FormSubcribeTag>
  )
}

export default FormSubcribe;