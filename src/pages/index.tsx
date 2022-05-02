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
            <Flex justify="between" css={{
              '@sm': {
                flexDirection: 'column',
                alignItems: 'center'
              }
            }}>
              <Flex gap="3" css={{
                '@sm': {
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }
              }}>
                <Image src="https://via.placeholder.com/230" alt="Product Image" />
                <Box>
                  <Text size="7" css={{
                    '@sm': {
                      textAlign: 'center'
                    }
                  }}>$ 1.980</Text>
                  <Text size="3" css={{
                    mt: '$2',
                    maxWidth: '400px',
                    '@sm': {
                      textAlign: 'center'
                    }
                  }}>
                    Apple Ipod Touch 5g 16gb Negro Igual a Nuevo Completo Unico!
                  </Text>
                </Box>
              </Flex>
              <Text css={{
                '@sm': {
                  marginTop: '18px'
                }
              }}>Capital Federal</Text>
            </Flex>
          </Box>
        </Link>
        <Link href="/product">
          <Box as="a" css={{
            cursor: 'pointer',
            display: 'block',
            py: '$3'
          }}>
            <Flex justify="between" css={{
              '@sm': {
                flexDirection: 'column',
                alignItems: 'center'
              }
            }}>
              <Flex gap="3" css={{
                '@sm': {
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }
              }}>
                <Image src="https://via.placeholder.com/230" alt="Product Image" />
                <Box>
                  <Text size="7" css={{
                    '@sm': {
                      textAlign: 'center'
                    }
                  }}>$ 1.980</Text>
                  <Text size="3" css={{
                    mt: '$2',
                    maxWidth: '400px',
                    '@sm': {
                      textAlign: 'center'
                    }
                  }}>
                    Apple Ipod Touch 5g 16gb Negro Igual a Nuevo Completo Unico!
                  </Text>
                </Box>
              </Flex>
              <Text css={{
                '@sm': {
                  marginTop: '18px'
                }
              }}>Capital Federal</Text>
            </Flex>
          </Box>
        </Link>
        <Link href="/product">
          <Box as="a" css={{
            cursor: 'pointer',
            display: 'block',
            py: '$3'
          }}>
            <Flex justify="between" css={{
              '@sm': {
                flexDirection: 'column',
                alignItems: 'center'
              }
            }}>
              <Flex gap="3" css={{
                '@sm': {
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }
              }}>
                <Image src="https://via.placeholder.com/230" alt="Product Image" />
                <Box>
                  <Text size="7" css={{
                    '@sm': {
                      textAlign: 'center'
                    }
                  }}>$ 1.980</Text>
                  <Text size="3" css={{
                    mt: '$2',
                    maxWidth: '400px',
                    '@sm': {
                      textAlign: 'center'
                    }
                  }}>
                    Apple Ipod Touch 5g 16gb Negro Igual a Nuevo Completo Unico!
                  </Text>
                </Box>
              </Flex>
              <Text css={{
                '@sm': {
                  marginTop: '18px'
                }
              }}>Capital Federal</Text>
            </Flex>
          </Box>
        </Link>
      </Box>
    </Container>
  )
}

export default Home
