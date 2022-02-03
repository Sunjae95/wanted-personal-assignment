import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { MoveIcon, TooltipTail } from 'assets';
import { css } from '@emotion/react';

const Tooltip = ({
  imageUrl, discountRate, productName, priceDiscount, position, imageContainer
}) => {
  const discountPrice = discountRate ? `${discountRate}%` : '예상가';
  const price = priceDiscount.toLocaleString();
  const calcPosition = (({ top, left }) => {
    const { offsetWidth, offsetHeight } = imageContainer;
    const middleTop = offsetHeight / 2;
    const middleLeft = offsetWidth / 2;

    if (top < middleTop && left >= middleLeft) {
      return 1;
    }
    if (top < middleTop && left < middleLeft) {
      return 2;
    }
    if (top >= middleTop && left < middleLeft) {
      return 3;
    }
    if (top >= middleTop && left >= middleLeft) {
      return 4;
    }
  })(position);

  return (
    <Container position={calcPosition}>
      <ToolTipImage imageUrl={imageUrl} />
      <Wrapper>
        <FurnitureName>{productName}</FurnitureName>
        <FurniturePrice>
          <ExpectationPrice isDiscountRate={discountRate > 0}>{discountPrice}</ExpectationPrice>
          <PriceDiscount>{price}</PriceDiscount>
        </FurniturePrice>
      </Wrapper>
      <MoveIconWrapper><img src={MoveIcon} alt="" /></MoveIconWrapper>
    </Container>
  );
};

Tooltip.defaultProps = {
  discountRate: undefined,
};
Tooltip.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  discountRate: PropTypes.number,
  productName: PropTypes.string.isRequired,
  priceDiscount: PropTypes.number.isRequired,
  position: PropTypes.object.isRequired
};

const Container = styled.span`
    z-index: 1000;
    display: flex;
    align-items: center;
    position: absolute;
    top: 28px;
    left: -20px;
    background-color: rgba(255,255,255,0.95);
    width: 220px;
    height: 86px;
    padding: 8px 0 8px 8px;
    margin-top: 16px;
    border-radius: 7px;
    box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);
    color: #4a4a4a; 

    ${({ position }) => {
    switch (position) {
      case 1: {
        return css`
            left: -160px;
            top: 28px;
          `;
      }
      case 3: {
        return css`
            top: unset;
            bottom: 52px;
            left: -20px;
          `;
      }
      case 4: {
        return css`
            top: unset;
            left: -160px;
            bottom: 52px;    
          `;
      }
      default:
    }
  }};

    &: before {
        content: "";
        position: absolute;
        top: -8px;
        left: 34px;
        width: 12px;
        height: 8px;
        background-image: url(${TooltipTail});
        background-size: cover;
        background-repeat: no-repeat;
        z-index: 1100;

        ${({ position }) => {
    switch (position) {
      case 1: {
        return css`
        left: unset;
        right: 34px;
                `;
      }
      case 3: {
        return css`
        top: unset;
        bottom: -8px;
        transform: rotate(180deg);
                `;
      }
      case 4: {
        return css`
        top: unset;
        bottom: -8px;
        transform: rotate(180deg);
        left: unset;
        right: 34px;   
                `;
      }
      default:
    }
  }};
    }
`;

const ToolTipImage = styled.div`
    background-image: url(${({ imageUrl }) => imageUrl});
    flex-shrink: 0;
    width: 70px;
    height: 70px;
    margin-right: 8px;
    background-size: cover;
    background-position: center;
    border-radius: 4px;
`;

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding-bottom: 2px;
    overflow: hidden;
    text-align: left;
`;

const FurnitureName = styled.div`
    width: 100%;
    color: #333c45;
    text-overflow: ellipsis;
    line-height: 1.3em;
    white-space: initial;
    overflow: hidden;
`;

const FurniturePrice = styled.div`
    display: flex;
    align-items: center;
    margin-top: 4px;
    font-size: 16px;
`;

const ExpectationPrice = styled.span`
    color: #ff585d;
    ${({ isDiscountRate }) => !isDiscountRate && css`
        font-size: 11px;
        color: #898f94;
    `}
    line-height: 1.2em;
    font-weight: bold;
    margin-right: 4px;
`;

const PriceDiscount = styled.span`
    line-height: 1.2em;
    display: flex;
    align-items: center;
    color: #181d1f;
    font-weight: bold;
`;

const MoveIconWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    margin-top: auto;
    margin-right: 2px;
  
    & > img {
        width: 20px;
        height: 20px;
    }
`;

export default Tooltip;
