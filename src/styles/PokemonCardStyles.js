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
  font-size: 1.2em;
  font-weight: 500;
  transition: transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background-color: #383838;
    border-color: #555;
  }

  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 20px);
  }

  @media (max-width: 480px) {
    flex: 1 1 100%;
    min-width: 147.5px;
  }
`;