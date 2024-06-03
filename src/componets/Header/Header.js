import { Link } from "react-router-dom";
import * as styles from './Header.styles';
import logo from '../../assets/logo.svg';

// Header style은 Header.styles.js 에서 설정할 것
const Header = ({ links }) => {
  return (
    <styles.HeaderContainer>
      <styles.HeaderRowContainer>
      <styles.LogoContainer>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </styles.LogoContainer>
      <styles.HeaderButtonContainer>
        {links.map((link, index) => (
          <Link 
            key={index} 
            to={link.to} 
            style={{ textDecoration: 'none', color: 'inherit' }}
            onClick={link.onClick} // 링크 클릭 시 이벤트 핸들러 호출
          >
          <styles.RoundBox style={link.style}>
          <styles.HeaderTitle >{link.label}</styles.HeaderTitle> 
          </styles.RoundBox>
            
          </Link>
        ))}
      </styles.HeaderButtonContainer>
      </styles.HeaderRowContainer>

      <styles.HeaderBottomLine />
    </styles.HeaderContainer>
  );
};

export default Header;
