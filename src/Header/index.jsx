import { Link, useNavigate, useLocation } from "react-router-dom";
import { LogoInput, HeaderContainer } from "./header.style";
import { ButtonElement } from "../../style";
import Cookies from "js-cookie";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();  // Get the current location

  const logout = () => {
    Cookies.remove('jwt_token');
    console.log('aaa');
    navigate('/login');
  };

  return (
    <HeaderContainer>
      <Link to={'/'}>
        <LogoInput src="https://uniquemarine.co.in/wp-content/uploads/2017/05/logo.jpg" />
      </Link>

      
      {location.pathname.startsWith('/admin') && (
        <ButtonElement backgruoundcolor="#DD0023" onClick={logout}>LOG OUT</ButtonElement>
      )}
    </HeaderContainer>
  );
};

export default Header;
