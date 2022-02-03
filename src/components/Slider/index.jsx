/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import SliderItem from './SliderItem';

const Slider = ({ productList }) => (
  <Container>
    {productList &&
      productList.map((info, i) => <SliderItem key={i} info={info} />)}
  </Container>
);

Slider.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const Container = styled.div`
  display: flex;

  width: 800px;
  padding: 0 10px 0 10px;

  overflow: auto hidden;
  box-sizing: border-box;
`;

export default Slider;
