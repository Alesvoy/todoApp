import { TitleBar, Title, ImageContainer, Image } from './Header.styles';

import moon from '../../assets/icon-moon.svg';

const Header = () => {
  return (
    <TitleBar>
      <Title>TODO</Title>
      <ImageContainer>
        <Image src={moon} alt="Moon icon" />
      </ImageContainer>
    </TitleBar>
  );
};

export default Header;
