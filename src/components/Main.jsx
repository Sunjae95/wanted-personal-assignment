import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { BACK, IMG, SELECTED } from 'utils/constants';
import ViewContent from './ViewContent';
import Slider from './Slider';

const Main = ({ productInfo }) => {
  const { id, imageUrl, productList } = productInfo;
  const [selected, setSelected] = useState(null);

  const handleFocus = useCallback((e) => {
    const { id } = e.currentTarget;
    const [targetName, targetId] = id.split('_');

    if (targetName === BACK) {
      setSelected(null);
      return;
    }
    if (targetName === IMG) {
      setSelected(Number(targetId));
      return;
    }
    if (targetName === SELECTED) {
      setSelected(null);
    }
  }, []);

  return (
    <Container>
      <ViewContent
        id={id}
        imageUrl={imageUrl}
        productList={productList}
        selected={selected}
        onClick={handleFocus}
      />
      <Slider
        productList={productList}
        selected={selected}
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
