import { styled } from 'theme';

export const Button = styled('button', {
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: '1',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  height: '$5',
  px: '$2',
  fontFamily: '$untitled',
  fontSize: '$2',
  fontWeight: 500,
  fontVariantNumeric: 'tabular-nums',
  cursor: 'pointer',

  '&:disabled': {
    backgroundColor: '$slate2',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    color: '$slate8',
    pointerEvents: 'none',
  },

  variants: {
    size: {
      '1': {
        borderRadius: '$1',
        height: '$5',
        px: '$2',
        fontSize: '$1',
      },
      '2': {
        borderRadius: '$2',
        height: '$6',
        px: '$3',
        fontSize: '$3',
      },
      '3': {
        borderRadius: '$2',
        height: '$7',
        px: '$4',
        fontSize: '$4',
      },
    },
    variant: {
      blue: {
        backgroundColor: '$blue',
        color: '$neutralWhite',
        '&:hover': {
          boxShadow: '$4',
        },
        '&:active': {
          boxShadow: '$4',
        },
        '&:focus': {
          boxShadow: '$4',
        },
      },
    },
  },
  defaultVariants: {
    size: '1',
    variant: 'blue',
  },
});