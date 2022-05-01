import { createStitches, VariantProps, ScaleValue } from '@stitches/react';

import { MEDIA } from './media';
import { THEME } from './theming';
import { UTILS } from './utils';

export const { styled, css, globalCss, keyframes, theme, getCssText } =
  createStitches({
    prefix: 'meli',
    theme: THEME,
    media: MEDIA,
    utils: UTILS,
  });

export type { VariantProps, ScaleValue };

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    border: 0,
    outline: 'none',
  },

  body: {
    color: '$text-default',
    background: '$background-secondary',
    fontFamily: 'Work Sans, sans-serif',
  },

  button: {
    cursor: 'pointer',
  },
});