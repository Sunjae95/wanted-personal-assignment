import React from 'react';
import styled from '@emotion/styled';
import { BadgeImage } from 'assets';
import PropTypes from 'prop-types';

const Badge = ({ discountRate }) => (
  <Container>
    {discountRate}
    <Percent>%</Percent>
  </Container>
);

Badge.proptype = {
  discountRate: PropTypes.number.isRequired,
};

const Container = styled.div`
  font-size: 11px;
  font-weight: 700;
  line-height: 25px;
  text-align: center;
  word-spacing: 0px;
  color: #ffffff;

  background-image: url(${BadgeImage});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;

  width: 24px;
  height: 28px;
  position: absolute;
  top: 0px;
  bottom: 76px;
  right: 5px;
  left: 75px;

  cursor: pointer;
`;

const Percent = styled.span`
  font-size: 10px;
  font-weight: 700;
  line-height: 25px;
  text-align: center;
  word-spacing: 0px;
`;

export default Badge;
