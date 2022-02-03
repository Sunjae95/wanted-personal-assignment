import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { IconButton } from 'components/base';

const ViewContent = ({ imageUrl, productList }) => (
  <Container>
    <ViewContentImage src={imageUrl} alt="" />
    {productList &&
      productList.map((info) => {
        const { pointX, pointY, productId } = info;
        const direction = { top: pointX * 1.6, left: pointY * 1.6 };

        return <IconButton key={productId} direction={direction} isClicked />;
      })}
  </Container>
);

ViewContent.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const Container = styled.div`
  position: relative;
  width: 800px;
`;

const ViewContentImage = styled.img`
  width: 100%;
  height: auto;
`;

export default ViewContent;
