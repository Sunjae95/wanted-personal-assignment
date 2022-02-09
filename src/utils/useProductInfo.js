/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react';
import getProductInfo from './api';
import { ERROR } from './constants';

const useProductInfo = () => {
  const [productInfo, setProductInfo] = useState(null);

  const getData = async () => {
    const { data, success } = await getProductInfo();

    success ? setProductInfo(data) : setProductInfo(ERROR);
  };

  useEffect(getData, []);

  return { productInfo };
};

export default useProductInfo;
