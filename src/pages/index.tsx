import { Box } from 'components/box'
import { Container } from 'components/container'
import { Text } from 'components/text'
import type { NextPage } from 'next'
import { Product } from 'components/product';
import { Breadcumb } from 'components/breadcumb';

const Home: NextPage = () => {
  return (
    <Container css={{
      py: '$2'
    }}>
      <Breadcumb />
      <Box css={{
        backgroundColor: '$neutralWhite',
        p: '$4'
      }}>
        <Product
          title='Apple Macbook Air (13 polegadas, 2020, Chip M1, 256 GB de SSD, 8 GB de RAM) - Cinza-espacial'
          price={7.399}
          location='São Paulo'
          image='https://http2.mlstatic.com/D_NQ_NP_801112-MLA46516512347_062021-O.webp'
        />
        <Product
          title='Apple Macbook Air (13 polegadas, 2020, Chip M1, 256 GB de SSD, 8 GB de RAM) - Cinza-espacial'
          price={7.399}
          location='São Paulo'
          image='https://http2.mlstatic.com/D_NQ_NP_801112-MLA46516512347_062021-O.webp'
        />
        <Product
          title='Apple Macbook Air (13 polegadas, 2020, Chip M1, 256 GB de SSD, 8 GB de RAM) - Cinza-espacial'
          price={7.399}
          location='São Paulo'
          image='https://http2.mlstatic.com/D_NQ_NP_801112-MLA46516512347_062021-O.webp'
        />
        <Product
          title='Apple Macbook Air (13 polegadas, 2020, Chip M1, 256 GB de SSD, 8 GB de RAM) - Cinza-espacial'
          price={7.399}
          location='São Paulo'
          image='https://http2.mlstatic.com/D_NQ_NP_801112-MLA46516512347_062021-O.webp'
        />
        <Product
          title='Apple Macbook Air (13 polegadas, 2020, Chip M1, 256 GB de SSD, 8 GB de RAM) - Cinza-espacial'
          price={7.399}
          location='São Paulo'
          image='https://http2.mlstatic.com/D_NQ_NP_801112-MLA46516512347_062021-O.webp'
        />
      </Box>
    </Container>
  )
}

export default Home
