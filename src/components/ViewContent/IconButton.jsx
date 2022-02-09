/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { CloseImage, OpenImage } from 'assets';
import { IMG, SELECTED } from 'utils/constants';
import Tooltip from './Tooltip';

const IconButton = ({
  productInfo, isSelected, imageContainer, onClick
}) => {
  const {
    productId,
    pointX,
    pointY
  } = productInfo;

  const position = ((pointX, pointY) => {
    const top = pointX * 1.6;
    const left = pointY * 1.6;

    return { top, left };
  })(pointX, pointY);

  const selectId = isSelected ? `${SELECTED}_${productId}` : `${IMG}_${productId}`;

  return (
    <TagContainer id={productId} position={position}>
      <img
        id={selectId}
        src={isSelected ? CloseImage : OpenImage}
        alt=""
        width={32}
        height={32}
        onClick={onClick}
      />
      {isSelected && (
      <Tooltip
        imageContainer={imageContainer}
        position={position}
        productInfo={productInfo}
      />
      )}
    </TagContainer>
  );
};

IconButton.defaultProps = {
  isSelected: false,
};
IconButton.propTypes = {
  productInfo: PropTypes.object.isRequired,
  isSelected: PropTypes.bool,
};

const TagContainer = styled.div`
  width: 40px;
  height: 40px;

  position: absolute;
  ${({ position }) => css`
    top: ${position.top}px;
    left: ${position.left}px;
  `}

  cursor: pointer;
`;
// 리액트 메모
export default React.memo(IconButton);
