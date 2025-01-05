import { useEffect, useState } from 'react';
import { LuLogOut } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/image/logo_1.png';
import { useAuth } from '../../contexts/AuthContext';
import { Conteiner, DescriptionStyle, DescriptionStyleButton, DescriptionStyleText, HeaderStyle, ImgStyle } from './style';

function Header() {
  const { user, handleUserLogout } = useAuth();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    handleUserLogout();
    navigate('/');
  };

  return (
    <HeaderStyle>
      <Conteiner>
        <ImgStyle src={logo} alt="Logo" />
        {!isMobile && (
          <DescriptionStyle>
            <DescriptionStyleText>Olá, {user?.name}</DescriptionStyleText>
            <DescriptionStyleButton onClick={handleLogout}>
              <LuLogOut />
            </DescriptionStyleButton>
          </DescriptionStyle>
        )}
      </Conteiner>
      {isMobile && (
        <DescriptionStyle>
          <DescriptionStyleText>Olá, {user?.name}</DescriptionStyleText>
          <DescriptionStyleButton onClick={handleLogout}>
            <LuLogOut />
          </DescriptionStyleButton>
        </DescriptionStyle>
      )}
    </HeaderStyle>
  );
}


export default Header;
