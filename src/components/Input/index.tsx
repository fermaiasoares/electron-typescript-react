import { InputHTMLAttributes} from 'react';

import { Container, InputElement } from './styles';

type InputPros = {

} & InputHTMLAttributes<HTMLInputElement>;

export function Input({...rest}: InputPros) {
  return (
    <Container>
      <InputElement {...rest}/>
    </Container>
  )
}