import { styled } from 'theme';

export const Text = styled('span', {
  lineHeight: '1',
  margin: '0',
  fontWeight: 400,
  fontVariantNumeric: 'tabular-nums',
  display: 'block',

  variants: {
    size: {
      '1': {
        fontSize: '$1',
        lineHeight: '$2'
      },
      '2': {
        fontSize: '$2',
        lineHeight: '$3'
      },
      '3': {
        fontSize: '$3',
        lineHeight: '$4'
      },
      '4': {
        fontSize: '$4',
        lineHeight: '$5'
      },
      '5': {
        fontSize: '$5',
        lineHeight: '$6',
        letterSpacing: '-.015em',
      },
      '6': {
        fontSize: '$6',
        lineHeight: '$7',
        letterSpacing: '-.016em',
      },
      '7': {
        fontSize: '$7',
        lineHeight: '$8',
        letterSpacing: '-.031em',
        textIndent: '-.005em',
      },
      '8': {
        fontSize: '$8',
        lineHeight: '$9',
        letterSpacing: '-.034em',
        textIndent: '-.018em',
      },
      '9': {
        fontSize: '$9',
        lineHeight: '$9',
        letterSpacing: '-.055em',
        textIndent: '-.025em',
      },
    },
  },
  defaultVariants: {
    size: '3',
  },
});