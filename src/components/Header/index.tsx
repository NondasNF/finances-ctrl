import logo from './../../assets/logo.svg';
import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
      <img src={logo} alt="logo" />
      <button type="button">
        Nova Transação
      </button>
      </Content>
    </Container>
  );
}
