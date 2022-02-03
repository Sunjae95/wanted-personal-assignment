import { useEffect, useState } from 'react';
import getProductInfo from './api';

const useProductInfo = () => {
  const [productInfo, setProductInfo] = useState(null);
  async function getData() {
    try {
      const data = await getProductInfo();

      setProductInfo(data);
    } catch (e) {
      setProductInfo('error');
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return { productInfo };
};

export default useProductInfo;
