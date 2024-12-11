import { Link, useNavigate, useLocation } from "react-router-dom";
import { LogoInput, HeaderContainer } from "./header.style";
import { ButtonElement } from "../../style";
import logo from '../assets/unique marine.png';
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
        <LogoInput src={logo} />
      </Link>

      {location.pathname.startsWith('/admin') && (
        <ButtonElement backgruoundcolor="#DD0023" style={{fontFamily:"Poppins", fontSize:'16px', padding:'5px 10px 5px 10px', height:'30px', fontWeight:'bold'}}onClick={logout}>LOG OUT</ButtonElement>
      )}
    </HeaderContainer>
  );
};

export default Header;
