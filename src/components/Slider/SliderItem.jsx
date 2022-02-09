import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { IMG, SELECTED } from 'utils/constants';
import Badge from './Badge';
import ImageBox from './ImageBox';

const SliderItem = ({ info, isSelected, onClick }) => {
  const { productId, imageUrl, discountRate } = info;
  const selectId = isSelected ? `${SELECTED}_${productId}` : `${IMG}_${productId}`;

  return (
    <Container isSelected={isSelected}>
      <ImageBox id={selectId} onClick={onClick} imageUrl={imageUrl}>
        {discountRate > 0 && <Badge id={`img_${productId}`} discountRate={discountRate} />}
      </ImageBox>
    </Container>
  );
};

SliderItem.propTypes = {
  info: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  margin: 28px 6px;
  
  ${({ isSelected }) => isSelected && css`
    margin: 26px 4px;
    padding: 2px;
    background: linear-gradient(
      163.54deg,
      #ff659e 8.22%,
      #f56b30 94.1%);
    border-radius: 18px;
  `};
`;

export default React.memo(SliderItem);
