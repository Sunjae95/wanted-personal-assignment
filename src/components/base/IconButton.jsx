import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { CloseImage, OpenImage } from 'assets';
import Tooltip from './Tooltip';

const IconButton = ({
  productInfo, isFocus, imageContainer
}) => {
  const {
    productId,
    pointX,
    pointY,
    imageUrl,
    discountRate,
    productName,
    priceDiscount,
  } = productInfo;

  const position = ((pointX, pointY) => {
    const top = pointX * 1.6;
    const left = pointY * 1.6;

    return { top, left };
  })(pointX, pointY);

  const isTrue = (() => isFocus === productId)();

  return (
    <TagContainer id={productId} position={position}>
      <img
        src={isTrue ? OpenImage : CloseImage}
        alt=""
        width={32}
        height={32}
      />
      {isTrue && (
      <Tooltip
        imageContainer={imageContainer}
        position={position}
        imageUrl={imageUrl}
        discountRate={discountRate}
        productName={productName}
        priceDiscount={priceDiscount}
      />
      )}
    </TagContainer>
  );
};

IconButton.defaultProps = {
  isFocus: null,
};
IconButton.propTypes = {
  productInfo: PropTypes.object.isRequired,
  isFocus: PropTypes.number,
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

export default IconButton;
