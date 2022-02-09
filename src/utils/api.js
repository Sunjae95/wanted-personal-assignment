import axios from 'axios';
import { API_URL } from './constants';

const getProductInfo = async () => {
  try {
    const { data } = await axios.get(API_URL);

    return {
      data,
      success: true,
    };
  } catch {
    return {
      success: false,
    };
  }
};

export default getProductInfo;
