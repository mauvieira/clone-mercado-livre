import { styled } from 'theme';
import { Container } from 'components/container';
import { TextField } from 'components/textfield';
import { Flex } from 'components/flex';

const HeaderStyled = styled('header', {
  backgroundColor: '$yellow',
  py: '$4',
  px: '$11',
  '@sm': {
    px: '$3',
  },
});

const Image = styled('img', {
  width: '134px',
  height: '34px',
  '@sm': {
    width: '75px',
    height: '24px',
  },
});

const SearchButton = styled('button', {
  background: '$gray400',
  padding: '8px',
  width: '36px',
  borderRadius: '$1',
  '&:hover': {
    boxShadow: '$4',
  },
})

export const Header = () => (
  <HeaderStyled>
    <Container>
      <Flex gap="6">
        <Image src="/logo.png" alt="Mercado Livre Logo" />
        <Flex css={{
          width: '100%'
        }}>
          <TextField
            placeholder="Nunca deje de buscar..."
            size="2"
          />
          <SearchButton>
           <img src="/icons/search.svg" alt="Search" />
          </SearchButton>
        </Flex>
      </Flex>
    </Container>
  </HeaderStyled>
);