import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 15px;
  border-radius: 20px;
  margin-bottom: 60px;
  background-color: #5a829e;
  border-width: 0px;
  color: #e8e3dc;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 600px;
  width: 90%;
  font-size: 25px;
  flex-direction: column;
  border: 1px solid #e8e3dc;
  border-radius: 15px;
  padding: 25px;
  @media (max-width: 600px) {
    font-size: 12px;
    padding: 10px;
  }
`;
