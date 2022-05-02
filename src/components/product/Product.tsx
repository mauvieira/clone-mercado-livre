import { styled } from 'theme';
import { Box } from 'components/box'
import { Text } from 'components/text'
import { Flex } from 'components/flex'
import Link from 'next/link'

const Image = styled('img', {
  width: '230px',
  height: 'auto',
});

type ProductProps = {
  title: string;
  image: string;
  location: string;
  price: number;
}

export const Product = ({
  title,
  image,
  location,
  price
}: ProductProps) => (
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
          <Image src={image} alt={title} />
          <Box>
            <Text size="7" css={{
              '@sm': {
                textAlign: 'center'
              }
            }}>{price}</Text>
            <Text size="3" css={{
              mt: '$2',
              maxWidth: '400px',
              '@sm': {
                textAlign: 'center'
              }
            }}>
              {title}
            </Text>
          </Box>
        </Flex>
        <Text css={{
          '@sm': {
            marginTop: '18px'
          }
        }}>{location}</Text>
      </Flex>
    </Box>
  </Link>
)