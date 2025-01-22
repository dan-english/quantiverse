import * as React from 'react';
import styled from 'styled-components';

import { HatIcon } from '@redocly/theme/icons/HatIcon/HatIcon';
import { HatFilledIcon } from '@redocly/theme/icons/HatFilledIcon/HatFilledIcon';

export type HatProps = {
  max?: number;
  name?: string;
  value?: number;
  onChange: (value: number) => void;
};

export function Hats({ max = 5, onChange, value }: HatProps): JSX.Element {
  const [hovered, setHovered] = React.useState(value || 0);
  const hats: JSX.Element[] = [];

  for (let index = 1; index <= max; index++) {
    hats.push(
      <Hat
        data-testid={`hat-${index}`}
        key={index}
        onClick={() => onChange(index)}
        onMouseOver={() => setHovered(index)}
        onMouseLeave={() => !value && setHovered(0)}
      >
        {hovered < index ? (
          <HatIcon color="var(--feedback-hat-color)" />
        ) : (
          <HatFilledIcon color="var(--feedback-hat-color)" />
        )}
      </Hat>,
    );
  }

  return <HatsWrapper data-component-name="Feedback/Hats">{hats}</HatsWrapper>;
}

const HatsWrapper = styled.div`
  display: flex;
  gap: var(--spacing-xs);
  flex-direction: row;
  align-items: center;
`;

const Hat = styled.button.attrs(() => ({
  type: 'button',
}))`
  cursor: pointer;
  padding: 0;
  border: none;
  background-color: transparent;
  height: 26px;
  gap: var(--spacing-xs);
`;
