/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import SliderItem from './SliderItem';

const Slider = ({ productList, isFocus, onClick }) => (
  <Container>
    {productList &&
      productList.map((prodcutItem) => {
        const { productId } = prodcutItem;
        const hasFocus = productId === isFocus;

        return (
          <SliderItem
            key={productId}
            info={prodcutItem}
            isFocus={hasFocus}
            onClick={onClick}
          />
        );
      })}
  </Container>
);

Slider.defaultProps = {
  isFocus: null
};
Slider.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFocus: PropTypes.number,
  onClick: PropTypes.func.isRequired
};

const Container = styled.div`
  display: flex;

  width: 800px;
  padding: 0 10px 0 10px;

  overflow: auto hidden;
  box-sizing: border-box;
`;

export default Slider;
