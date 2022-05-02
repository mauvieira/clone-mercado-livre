import { Box } from 'components/box'
import { Text } from 'components/text'
import { Button } from 'components/button'

export const Details = () => (
  <Box>
    <Text css={{
      '@md': {
        textAlign: 'center'
      },
    }}>Novo - 4190 vendidos</Text>
    <Text css={{
      fontSize: '$6',
      fontWeight: '$3',
      mt: '$3',
      '@md': {
        textAlign: 'center'
      },
    }}>
      Apple Macbook Air
    </Text>
    <Text css={{
      fontSize: '$7',
      fontWeight: '$3',
      mt: '$2',
      '@md': {
        textAlign: 'center'
      },
    }}>$ 7.399</Text>
    <Box css={{
      '@md': {
        display: 'flex',
        justifyContent: 'center'
      },
    }}>
      <Button css={{
        width: '250px',
        py: '$2',
        fontSize: '$6',
        mt: '$3',
      }}>
        Comprar
      </Button>
    </Box>
  </Box>
)