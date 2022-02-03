import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Badge, ImageBox } from 'components/base';
import { css } from '@emotion/react';

const SliderItem = ({ info, isFocus, onClick }) => {
  const { productId, imageUrl, discountRate } = info;

  return (
    <Container isFocus={isFocus} onClick={onClick}>
      <ImageBox id={productId} imageUrl={imageUrl}>
        {discountRate > 0 && <Badge discountRate={discountRate} />}
      </ImageBox>
    </Container>
  );
};

SliderItem.propTypes = {
  info: PropTypes.object.isRequired,
  isFocus: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  margin: 28px 6px;
  
  ${({ isFocus }) => isFocus && css`
    margin: 26px 4px;
    padding: 2px;
    background: linear-gradient(
      163.54deg,
      #ff659e 8.22%,
      #f56b30 94.1%);
    border-radius: 18px;
  `};
`;

export default SliderItem;
