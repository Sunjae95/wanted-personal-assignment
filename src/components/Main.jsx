import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import ViewContent from './ViewContent';
import Slider from './Slider';

const Main = ({ productInfo }) => {
  const { id, imageUrl, productList } = productInfo;
  const [isFocus, setIsFocus] = useState(null);

  const handleFocus = (e) => {
    const targetDiv = e.target.closest('div');
    const targetDivId = Number(targetDiv.id);
    const nextFocus = id === targetDivId ? null : targetDivId;

    if (isFocus === targetDivId) {
      setIsFocus(null);
      return;
    }

    setIsFocus(nextFocus);
  };

  return (
    <Container>
      <ViewContent
        id={id}
        imageUrl={imageUrl}
        productList={productList}
        isFocus={isFocus}
        onClick={handleFocus}
      />
      <Slider
        productList={productList}
        isFocus={isFocus}
        onClick={handleFocus}
      />
    </Container>
  );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
`;

Main.propTypes = {
  productInfo: PropTypes.object.isRequired
};

export default Main;
