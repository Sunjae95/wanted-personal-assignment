import Main from 'components/Main';
import React from 'react';
import { GlobalStyle } from 'style';
import useProductInfo from 'utils/useProductInfo';

const App = () => {
  const { productInfo } = useProductInfo();

  if (!productInfo) return <div>로딩중...</div>;
  if (productInfo === 'error') return <div>데이터불러오기 에러!!</div>;

  return (
    <>
      <GlobalStyle />
      <Main productInfo={productInfo} />
    </>
  );
};
export default App;
