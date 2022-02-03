import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { CloseImage, OpenImage } from 'assets';

const IconButton = ({ productId, direction, isFocus }) => (
  <TagContainer id={productId} direction={direction}>
    <img
      src={isFocus ? OpenImage : CloseImage}
      alt=""
      width={32}
      height={32}
    />
  </TagContainer>
);

IconButton.propTypes = {
  productId: PropTypes.number.isRequired,
  direction: PropTypes.shape({
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
  }).isRequired,
  isFocus: PropTypes.bool.isRequired,
};

const TagContainer = styled.div`
  width: 40px;
  height: 40px;

  position: absolute;
  ${({ direction }) => css`
    top: ${direction.top}px;
    left: ${direction.left}px;
  `}

  cursor: pointer;
`;

export default IconButton;
