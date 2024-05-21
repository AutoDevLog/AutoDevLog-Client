import { Link } from "react-router-dom"
import * as styles from './Header.styles';

const Header = ({ links }) => {
  return (
    <styles.HeaderContainer>
      {links.map((link, index) => (
        <Link key={index} to={link.to} style={{ textDecoration: 'none', color: 'inherit' }}>
          <styles.HeaderTitle style={link.style}>{link.label}</styles.HeaderTitle>
        </Link>
      ))}
    </styles.HeaderContainer>
  );
};

export default Header;