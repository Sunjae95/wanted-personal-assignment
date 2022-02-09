/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import SliderItem from './SliderItem';

const Slider = ({ productList, selected, onClick }) => (
  <Container>
    {productList?.map((prodcutItem) => {
      const { productId } = prodcutItem;
      const isSelected = productId === selected;

      return (
        <SliderItem
          key={productId}
          info={prodcutItem}
          isSelected={isSelected}
          onClick={onClick}
        />
      );
    })}
  </Container>
);

Slider.defaultProps = {
  selected: null
};
Slider.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
  selected: PropTypes.number,
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
