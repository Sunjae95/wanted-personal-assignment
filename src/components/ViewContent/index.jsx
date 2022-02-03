import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { IconButton } from 'components/base';

const ViewContent = ({
  id, imageUrl, productList, isFocus, onClick
}) => (
  <Container id={id} onClick={onClick}>
    <ViewContentImage src={imageUrl} alt="" />
    {productList &&
      productList.map((prodcutItem) => {
        const { productId, pointX, pointY } = prodcutItem;
        const direction = { top: pointX * 1.6, left: pointY * 1.6 };
        const hasFocus = isFocus === productId;

        return (
          <IconButton
            key={productId}
            productId={productId}
            direction={direction}
            isFocus={hasFocus}
          />
        );
      })}
  </Container>
);

ViewContent.defaultProps = {
  isFocus: null
};
ViewContent.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFocus: PropTypes.number,
  onClick: PropTypes.func.isRequired,
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
