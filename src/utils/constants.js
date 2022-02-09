export const API_URL = 'https://cdn.ggumim.co.kr/test/image_product_link.json';
export const ERROR = 'error';
export const BACK = 'back';
export const IMG = 'img';
export const SELECTED = 'selected';
export const dynamicId = (isSelected, id) => (isSelected ? `${SELECTED}_${id}` : `${IMG}_${id}`);
