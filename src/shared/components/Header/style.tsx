import styled from 'styled-components';

export const HeaderStyle = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const Conteiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  width: 90%;

  @media (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const DescriptionStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    width: 100%;
    margin-top: 10px;
  }
`;

export const DescriptionStyleText = styled.h3`
  margin: 0 10px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const DescriptionStyleButton = styled.button`
  color: #ff0000;
  border: none;
  background: none;
  font-size: 1.2rem;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ImgStyle = styled.img`
  width: 20rem;
  height: auto;

  @media (max-width: 768px) {
    width: 15rem;
  }

  @media (max-width: 480px) {
    margin-left: 10px;
  }
`;
