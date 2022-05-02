import { styled } from 'theme';

export const TextField = styled('input', {
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  fontFamily: '$workSans',
  margin: '0',
  outline: 'none',
  padding: '0',
  width: '100%',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  backgroundColor: '$neutralWhite',
  boxShadow: 'inset 0 0 0 1px $gray600',
  color: '$gray600',
  fontVariantNumeric: 'tabular-nums',

  '&:-webkit-autofill': {
    boxShadow: 'inset 0 0 0 1px $blue6, inset 0 0 0 100px $blue3',
  },

  '&:focus': {
    boxShadow: '$4',
    '&:-webkit-autofill': {
      boxShadow:'$4',
    },
  },
  '&::placeholder': {
    color: '$gray200',
  },

  variants: {
    size: {
      '1': {
        borderRadius: '$1',
        height: '$5',
        fontSize: '$1',
        px: '$1',
        '&:-webkit-autofill::first-line': {
          fontSize: '$1',
        },
      },
      '2': {
        borderRadius: '$1',
        height: '$6',
        fontSize: '$3',
        px: '$2',
        '&:-webkit-autofill::first-line': {
          fontSize: '$3',
        },
      },
    },
  },
  defaultVariants: {
    size: '1',
  },
});