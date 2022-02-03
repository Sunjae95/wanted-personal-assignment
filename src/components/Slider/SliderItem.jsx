import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Badge, ImageBox } from 'components/base';

const SliderItem = ({ info }) => {
  const { imageUrl, discountRate } = info;

  return (
    <Container>
      <ImageBox imageUrl={imageUrl}>
        {discountRate > 0 && <Badge discountRate={discountRate} />}
      </ImageBox>
    </Container>
  );
};

SliderItem.propTypes = {
  info: PropTypes.object.isRequired,
};

const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  margin: 28px 6px;
`;

export default SliderItem;
