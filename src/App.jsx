import Slider from 'components/Slider';
import ViewContent from 'components/ViewContent';
import React, { useEffect, useState } from 'react';
import getProductInfo from 'utils/api';

const App = () => {
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

  if (!productInfo) return <div>로딩중...</div>;
  if (productInfo === 'error') return <div>데이터불러오기 에러!!</div>;

  return (
    <div>
      <ViewContent
        imageUrl={productInfo.imageUrl}
        productList={productInfo.productList}
      />
      <Slider productList={productInfo.productList} />
    </div>
  );
};
export default App;
