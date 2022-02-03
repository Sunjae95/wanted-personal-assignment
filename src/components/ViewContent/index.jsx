import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import IconButton from './IconButton';

const ViewContent = ({
  id, imageUrl, productList, isFocus, onClick
}) => {
  const imageRef = useRef(null);

  return (
    <Container id={id} onClick={onClick}>
      <ViewContentImage src={imageUrl} alt="" ref={imageRef} />
      {productList &&
      productList.map((productItem) => {
        const { productId } = productItem;

        return (
          <IconButton
            key={productId}
            imageContainer={imageRef.current}
            productInfo={productItem}
            isFocus={isFocus}
          />
        );
      })}
    </Container>
  );
};

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
