import { styled } from 'theme';
import { Container } from 'components/container';
import { TextField } from 'components/textfield';
import { Flex } from 'components/flex';

import Link from 'next/link'

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
  height: 'auto',
  cursor: 'pointer'
});

const SearchButton = styled('button', {
  background: '$gray50',
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
      <Flex gap="6" css={{
        '@sm': {
          flexDirection: 'column',
          alignItems: 'center',
          gap: '$3'
        }
      }}>
        <Link href="/">
          <Image src="/logo.png" alt="Mercado Livre Logo" />
        </Link>
        <Flex css={{
          width: '100%'
        }}>
          <TextField
            placeholder="Nunca deixe de buscar..."
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