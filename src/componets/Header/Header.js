import { Link } from "react-router-dom";
import * as styles from './Header.styles';

// Header style은 Header.styles.js 에서 설정할 것
const Header = ({ links }) => {
  return (
    <styles.HeaderContainer>
      {links.map((link, index) => (
        <Link 
          key={index} 
          to={link.to} 
          style={{ textDecoration: 'none', color: 'inherit' }}
          onClick={link.onClick} // 링크 클릭 시 이벤트 핸들러 호출
        >
          <styles.HeaderTitle style={link.style}>{link.label}</styles.HeaderTitle> 
        </Link>
      ))}
    </styles.HeaderContainer>
  );
};

export default Header;