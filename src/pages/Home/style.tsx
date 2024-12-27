import styled from 'styled-components';
import { color_primary, color_white } from '../../themes/colors';

const SectionStyle = styled.section`
    width: 80%;
    display: flex;

    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }
`;
const ContainerStyle = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    padding: 10px;
    
`;
const ButtonAddStyle = styled.button`
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: ${color_primary};
    color: ${color_white};
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
        color: ${color_primary};
        background-color: ${color_white};
    }
`;

const SpanStyle = styled.span`
    margin-left: 10px;
    font-weight: 600;
    font-size: 1rem;
`;
export {
  SpanStyle, ButtonAddStyle,
  SectionStyle, ContainerStyle
};
