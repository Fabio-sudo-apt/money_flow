import { HeaderStyle, ImgStyle } from './style';
import logo from '../../../assets/image/logo_1.png';

function Header() {
  return (
    <HeaderStyle>
      <ImgStyle src={logo}/>
    </HeaderStyle>
  );
}

export default Header;
