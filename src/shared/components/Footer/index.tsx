import { FooterStyle } from './style';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <FooterStyle>
      <p>&copy; {year} MoneyFlow. Todos os direitos reservados.</p>
    </FooterStyle>
  );
}

export default Footer;
