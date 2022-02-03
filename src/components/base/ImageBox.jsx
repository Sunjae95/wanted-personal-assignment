import styled from '@emotion/styled';

const ImageBox = styled.div`
  background-image: url(${({ imageUrl }) => imageUrl});
  background-position: 50% 50%;
  background-repeat: no-repeat;

  width: 106px;
  height: 106px;
  border: 0.5px solid #aaafb9;

  position: relative;
  cursor: pointer;
  border-radius: 16px;
`;

export default ImageBox;
