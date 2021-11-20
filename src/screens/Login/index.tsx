import {
  Button, 
  Container, 
  FormLogin,
  Link,
  Title
} from './styles';

import logoImg from '../../assets/images/logo.png';
import { Input } from '../../components/Input';

export function Login() {
  return (
    <Container>
      <FormLogin>
        <img src={logoImg} alt="Logo" />
        <Title>Acesso Restrito</Title>

        <Input 
          name="usuario"
          type="text"
          placeholder="Usuário"
        />

        <Input
          name="senha"
          type="password"
          placeholder="Senha"
        />

        <Button>Entrar</Button>

        <Link title="Recuperação de senha">Recuperar senha</Link>
      </FormLogin>
    </Container>
  )
}