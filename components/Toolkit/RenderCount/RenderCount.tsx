import { useRef } from 'react';
import styled from 'styled-components';

type TCircle = { size: number };
const Circle = styled.i<TCircle>`
  position: absolute;
  top: 0;
  right: 0;
  font-style: normal;
  text-align: center;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  line-height: ${({ size }) => size}px;
  border-radius: ${({ size }) => size / 2}px;
  border: 1px solid #ddd;
  background: #eee;
`;

function RenderCount() {
  const size = 30;
  const renders = useRef(0);

  return <Circle size={size}>{++renders.current}</Circle>;
}

export { RenderCount };
