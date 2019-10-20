import React from 'react';
import styled, { keyframes } from 'styled-components';

const flickrOpacity = keyframes`
  0% {
    transform: translate(0 0);
    opacity: 1;
  }
  49.99% {
    opacity: 1;
    transform: translate(80px, 0);
  }
  50% {
    opacity: 0;
    transform: translate(80px, 0);
  }
  100% {
    opacity: 0;
    transform: translate(0, 0);
  }
`;

const flickr = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(80px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const S = {
  Wrapper: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `,
  Flickr: styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 64px;
    height: 64px;
    transform: translate(-50%, -50%) scale(0.32);
    div {
      position: absolute;
      top: -50%;
      left: -50%;
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    div:nth-child(1) {
      background: #F05125;
      animation: ${flickr} 1s linear infinite;
      animation-delay: -0.5s;
    }
    div:nth-child(2) {
      background: #FDB813;
      animation: ${flickr} 1s linear infinite;
      animation-delay: 0s;
    }
    div:nth-child(3) {
      background: #F05125;
      animation: ${flickrOpacity} 1s linear infinite;
      animation-delay: -0.5s;
    }
  `,
};

const Loader = () => (
  <S.Wrapper>
    <S.Flickr>
      <div />
      <div />
      <div />
    </S.Flickr>
  </S.Wrapper>
);

export default Loader;
