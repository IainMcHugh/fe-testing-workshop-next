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
  padding: 8px;
  border: 0;
  border-radius: 4px;
  color: white;
  background-color: #0d1b2a;
`;

export const Label = styled.label`
  color: #0d1b2a;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  font-size: 12px;
  line-height: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid grey;
  color: #0d1b2a;
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
