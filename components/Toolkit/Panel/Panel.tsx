import type { ReactNode } from 'react';
import styled from 'styled-components';

interface IWrapper {
  children: ReactNode;
}

const Wrapper = styled.fieldset`
  background-color: #ffffff;
  padding: 24px;
  border-radius: 8px;
  border: 0;
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.07), 0 2px 2px rgba(0, 0, 0, 0.06);
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;

  &:last-child {
    margin-bottom: 0;
  }

  & > * {
    margin-bottom: 8px;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`;

function Panel({ children }: IWrapper) {
  return <Wrapper>{children}</Wrapper>;
}

export { Panel };
