import { styled } from 'theme';
import { Box } from 'components/box'
import { Container } from 'components/container'
import { Text } from 'components/text'
import { Flex } from 'components/flex'
import type { NextPage } from 'next'
import { Button } from 'components/button'

const Image = styled('img', {
  width: '650px',
  height: 'auto',
  '@sm': {
    width: '300px',
  },
});

const Product: NextPage = () => {
  return (
    <Container css={{
      py: '$2'
    }}>
      <Text css={{
        py: '$3'
      }}>
        Eletronica Audio e Video / iPod / Reproductories / iPod Touch 32gb
      </Text>
      <Box css={{
        backgroundColor: '$neutralWhite',
        p: '$4'
      }}>
        <Flex gap="5">
          <Image src="https://cdn.pocket-lint.com/r/s/970x/assets/images/148215-gadgets-review-review-apple-ipod-touch-7th-generation-initial-review-still-here-for-the-non-streamers-image1-9lgy8uapxx.jpg" alt="Product Image" />
          <Box>
            <Text>Nuevo - 234 vendidos</Text>
            <Text css={{
              fontSize: '$6',
              fontWeight: '$3',
              mt: '$3'
            }}>Deco Reverse Sombrero Oxford</Text>
            <Text css={{
              fontSize: '$7',
              fontWeight: '$3',
              mt: '$2'
            }}>$ 1.980</Text>
            <Button css={{
              width: '250px',
              py: '$2',
              fontSize: '$6',
              mt: '$3'
            }}>
              Comprar
            </Button>
          </Box>
        </Flex>
        <Box css={{
          maxWidth: '650px',
          mt: '$10'
        }}>
          <Text css={{
            fontSize: '$7',
            fontWeight: '$3',
            mt: '$2'
          }}>
            Descriptición del producto
          </Text>
          <Text css={{
            mt: '$2'
          }}>
            Como Touch ID está integrado en el botón superior del iPad, puedes usar tu huella digital para desbloquearlo e iniciar sesión en apps. Además, el iPad Air viene en cinco colores increíbles para que elijas el que mejor va contigo.
          </Text>
          <Text css={{
            mt: '$2'
          }}>
            El revolucionario chip M1 llegó al iPad Air. El CPU de ocho núcleos tiene un rendimiento hasta un 60% más rápido que la generación anterior. Potencia de sobra para crear y jugar. Usa varias apps al mismo tiempo, disfruta juegos con gráficos de primer nivel y expande tus posibilidades creativas con apps como SketchUp. Todo gracias al superpoderoso chip M1.
          </Text>
        </Box>
      </Box>
    </Container>
  )
}

export default Product
