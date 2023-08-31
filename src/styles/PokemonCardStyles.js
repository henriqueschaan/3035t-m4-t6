import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid #444;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  text-align: center;
  flex: 1 1 calc(25% - 20px);
  box-sizing: border-box;
  background-color: #282828;
  color: #e6e6e6;

  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 20px);
  }

  @media (max-width: 480px) {
    flex: 1 1 100%;
    min-width: 127.5px;
  }
`;