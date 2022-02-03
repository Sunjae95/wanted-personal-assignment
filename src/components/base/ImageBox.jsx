import styled from '@emotion/styled';

const ImageBox = styled.div`
  background-image: url(${({ imageUrl }) => imageUrl});
  background-position: 50% 50%;
  background-repeat: no-repeat;

  width: 106px;
  height: 106px;
  border: 1px solid #ffffff;

  position: relative;
  cursor: pointer;
  border-radius: 16px;
`;

export default ImageBox;
