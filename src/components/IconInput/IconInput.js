import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2.,
    height: 36
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to IconInput`);
  }

  return (
    <Wrapper>
      <VisuallyHidden></VisuallyHidden>
      <IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
        <Icon id={icon} strokeWidth={2} size={styles.iconSize}/>
      </IconWrapper>
      <TextInput
        placeholder={placeholder}
        style={{
          '--width': width + 'px',
          '--height': styles.height + 'px',
          '--borderThickness': styles.borderThickness + 'px',
          '--font-size': styles.fontSize / 16 + 'rem'
          }}/>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  width: var(--size);
  height: var(--size);
  top: 0;
  bottom: 0;
  margin: auto 0;
`;

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  border: none;
  border-bottom: var(--borderThickness) solid ${COLORS.black};
  padding-left: var(--height);
  color: inherit;
  font-weight: 700;

  &::placeholder{
    color: ${COLORS.gray500};
    font-weight: 500;
  }
`;

export default IconInput;
