import styled from 'styled-components';

export const GameWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  outline: none;
  flex-direction: column;
`;

export const Score = styled.h1`
  /* background: linear-gradient(to left, #753ad5, #d53a9d); */
  --webkit-background-clip: text;
  --webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  gap: 16px;
  img {
    width: 35px;
    height: 35px;
  }
`;
