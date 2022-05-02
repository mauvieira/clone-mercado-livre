import { Box } from 'components/box'
import { Text } from 'components/text'

export const Description = () => (
  <Box css={{
    maxWidth: '650px',
    mt: '$10'
  }}>
    <Text css={{
      fontSize: '$7',
      fontWeight: '$3',
      mt: '$2'
    }}>
      Descrição
    </Text>
    <Text css={{
      mt: '$2'
    }}>
      O chip M1 impulsiona o desempenho do notebook mais fino e leve da Apple. A CPU de oito núcleos ultrarrápida encara qualquer projeto. Com a GPU de até oito núcleos, os gráficos passam de nível em games e apps. E as tarefas de aprendizado de máquina aceleram com o Neural Engine de 16 núcleos. Tudo isso em um design que troca a ventoinha pelo silêncio e oferece até 18 horas de bateria (1), a maior duração até hoje. MacBook Air. Portátil como sempre, só que muito mais potente.
    </Text>
    <Text css={{
      mt: '$2'
    }}>
      Avisos Legais
      (1) A duração da bateria varia de acordo com o uso e a configuração.
      (2) Em comparação com a geração anterior.
      (3) O tamanho da tela é medido na diagonal.
    </Text>
  </Box>
)