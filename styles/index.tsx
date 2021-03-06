import styled from 'styled-components';

export const Main = styled.main`
  min-height: 100vh;
`;

export const H1 = styled.h1`
  font-weight: 400;
`;

export const A = styled.a`
  color: #efa00b;
`;
export const P = styled.p``;

export const Button = styled.button`
  display: inline-block;
  padding: 8px;
  border: 0;
  border-radius: 4px;
  color: white;
  background-color: #0d1b2a;

  > * {
    display: inline-block;
    margin-bottom: 0;
  }

  & > *:nth-child(1) {
    margin-right: 12px;
  }

  &:disabled {
    opacity: 0.8;
  }
`;

export const Label = styled.label`
  color: #0d1b2a;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;
`;

type TInput = { error: boolean };
export const Input = styled.input<TInput>`
  font-size: 12px;
  line-height: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  border: ${({ error }) => `1px solid ${error ? '#f54b4b' : '#6e757d'}`};
  color: ${({ error }) => (error ? '#f54b4b' : '#0d1b2a')};
  margin-bottom: 8px;

  &::placeholder {
    color: ${({ error }) => (error ? '#f54b4b' : '#6e757d')};
  }
`;

export const Footer = styled.footer`
  background-color: #0d1b2a;
  min-height: 20vh;
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #e0e1dd;
`;

export const Wrapper = styled.div`
  min-height: 100vh;
  max-width: 800px;
  margin: 48px auto;
  display: flex;
  flex-direction: column;
`;

export const FormWrapper = styled.div`
  min-height: 100vh;
  max-width: 600px;
  margin: 0 auto 48px;
  display: flex;
  flex-direction: column;
`;

export const RelativeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Spy = styled.pre`
  font-size: 16px;
  line-height: 24px;
  background-color: #f1f2ee;
  color: #0d1b2a;
  padding: 24px;
  border-radius: 8px;
`;

export const FormError = styled.p`
  color: #f54b4b;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  margin: 0;
  padding: 0;
`;

export const Error = styled.p`
  height: 16px;
  color: #f54b4b;
  font-size: 14px;
  line-height: 16px;
`;
