import axios from 'axios';

const getProductInfo = async () => {
  try {
    const productInfo = await axios.get(
      'https://cdn.ggumim.co.kr/test/image_product_link.json'
    );

    return productInfo.data;
  } catch {
    new Error('데이터 불러오기 실패!');
  }
};

export default getProductInfo;
