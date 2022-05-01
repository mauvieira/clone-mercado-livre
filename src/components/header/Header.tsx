import { styled } from 'theme';
import { Container } from 'components/container';

const HeaderStyled = styled('header', {
  backgroundColor: '$yellow',
  py: '$4',
  px: '$11',
  '@sm': {
    px: '$3',
  },
});

const Image = styled('img', {
  width: '100px',
  height: '32px',
  '@sm': {
    width: '75px',
    height: '24px',
  },
});

export const Header = () => (
  <HeaderStyled>
    <Container>
      <Image src="/logo.png" alt="Mercado Livre Logo" />
    </Container>
  </HeaderStyled>
);