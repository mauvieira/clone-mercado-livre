import { styled } from 'theme';
import { Box } from 'components/box'
import { Container } from 'components/container'
import { Flex } from 'components/flex'
import type { NextPage } from 'next'
import { Description } from 'components/description';
import { Details } from 'components/details';
import { Breadcumb } from 'components/breadcumb';

const Image = styled('img', {
  maxWidth: '650px',
  width: '100%',
  height: 'auto',
  '@md': {
    maxWidth: '400px',
  },
  '@sm': {
    maxWidth: '300px',
  },
});

const Product: NextPage = () => {
  return (
    <Container css={{
      py: '$2'
    }}>
      <Breadcumb/>
      <Box css={{
        backgroundColor: '$neutralWhite',
        p: '$4'
      }}>
        <Flex gap="5" css={{
          '@md': {
            gap: '$2',
            flexDirection: 'column',
            alignItems: 'center'
          },
        }}>
          <Image src="https://http2.mlstatic.com/D_NQ_NP_801112-MLA46516512347_062021-O.webp" alt="Product Image" />
          <Details/>
        </Flex>
       <Description/>
      </Box>
    </Container>
  )
}

export default Product
