import { IntrinsicSxElements } from '@theme-ui/core';
import { cloneElement } from 'react';
import { ReactElement } from 'react-markdown/lib/react-markdown';
import { useThemeUI } from 'theme-ui';

export type TextProps = {
  el: ReactElement;
};

export default function Text(props: TextProps) {
  const { el } = props;
  const { theme } = useThemeUI();

  return cloneElement(el, {
    sx: {
      color: 'red',
    },
  });
}
