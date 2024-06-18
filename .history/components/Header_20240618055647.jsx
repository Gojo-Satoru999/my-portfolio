// components/Header.js
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 1rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>My Portfolio</h1>
    </HeaderContainer>
  );
};

export default Header;
