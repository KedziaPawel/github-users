import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 300px;
  min-width: 300px;
  max-width: 600px;
  max-height: 600px;
  width: 90%;
  font-size: 25px;
  flex-direction: column;
  border: 1px solid #e8e3dc;
  border-radius: 15px;
  padding: 20px;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
