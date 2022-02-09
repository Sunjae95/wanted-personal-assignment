import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { BACK } from 'utils/constants';
import IconButton from './IconButton';

const ViewContent = ({
  id, imageUrl, productList, selected, onClick
}) => {
  const imageRef = useRef(null);

  return (
    <Container>
      <ViewContentImage
        src={imageUrl}
        alt=""
        ref={imageRef}
        id={`${BACK}_${id}`}
        onClick={onClick}
      />
      {productList?.map((productItem) => {
        const { productId } = productItem;
        const isSelected = selected === productId;

        return (
          <IconButton
            key={productId}
            imageContainer={imageRef.current}
            productInfo={productItem}
            isSelected={isSelected}
            onClick={onClick}
          />
        );
      })}
    </Container>
  );
};

ViewContent.defaultProps = {
  selected: null
};
ViewContent.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
  selected: PropTypes.number,
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
