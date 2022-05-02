import { styled } from 'theme';
import { Box } from 'components/box'
import { Container } from 'components/container'
import { Text } from 'components/text'
import { Flex } from 'components/flex'
import type { NextPage } from 'next'
import Link from 'next/link'

const Image = styled('img', {
  width: '230px',
  height: 'auto',
  '@sm': {
    width: '75px',
  },
});

const Home: NextPage = () => {
  return (
    <Container css={{
      py: '$2'
    }}>
      <Text css={{
        py: '$3'
      }}>Eletronica Audio e Video / iPod / Reproductories / iPod Touch 32gb</Text>
      <Box css={{
        backgroundColor: '$neutralWhite',
        p: '$4'
      }}>
        <Link href="/product">
          <Box as="a" css={{
            cursor: 'pointer',
            display: 'block',
            py: '$3'
          }}>
            <Flex justify="between">
              <Flex gap="3">
                <Image src="https://cdn.pocket-lint.com/r/s/970x/assets/images/148215-gadgets-review-review-apple-ipod-touch-7th-generation-initial-review-still-here-for-the-non-streamers-image1-9lgy8uapxx.jpg" alt="Product Image" />
                <Box>
                  <Text size="7">$ 1.980</Text>
                  <Text size="3" css={{
                    mt: '$2',
                    maxWidth: '400px'
                  }}>
                    Apple Ipod Touch 5g 16gb Negro Igual a Nuevo Completo Unico!
                  </Text>
                </Box>
              </Flex>
              <Text>Capital Federal</Text>
            </Flex>
          </Box>
        </Link>
        <Link href="/product">
          <Box as="a" css={{
            cursor: 'pointer',
            display: 'block',
            py: '$3'
          }}>
            <Flex justify="between">
              <Flex gap="3">
                <Image src="https://cdn.pocket-lint.com/r/s/970x/assets/images/148215-gadgets-review-review-apple-ipod-touch-7th-generation-initial-review-still-here-for-the-non-streamers-image1-9lgy8uapxx.jpg" alt="Product Image" />
                <Box>
                  <Text size="7">$ 1.980</Text>
                  <Text size="3" css={{
                    mt: '$2',
                    maxWidth: '400px'
                  }}>
                    Apple Ipod Touch 5g 16gb Negro Igual a Nuevo Completo Unico!
                  </Text>
                </Box>
              </Flex>
              <Text>Capital Federal</Text>
            </Flex>
          </Box>
        </Link>
        <Link href="/product">
          <Box as="a" css={{
            cursor: 'pointer',
            display: 'block',
            py: '$3'
          }}>
            <Flex justify="between">
              <Flex gap="3">
                <Image src="https://cdn.pocket-lint.com/r/s/970x/assets/images/148215-gadgets-review-review-apple-ipod-touch-7th-generation-initial-review-still-here-for-the-non-streamers-image1-9lgy8uapxx.jpg" alt="Product Image" />
                <Box>
                  <Text size="7">$ 1.980</Text>
                  <Text size="3" css={{
                    mt: '$2',
                    maxWidth: '400px'
                  }}>
                    Apple Ipod Touch 5g 16gb Negro Igual a Nuevo Completo Unico!
                  </Text>
                </Box>
              </Flex>
              <Text>Capital Federal</Text>
            </Flex>
          </Box>
        </Link>
      </Box>
    </Container>
  )
}

export default Home
