import styled, { keyframes } from 'styled-components';
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

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Loader = styled.div`
    border: 2px solid #f3f3f3;
    border-top: 2px solid ${color_primary};
    border-radius: 50%;
    width: 16px;
    height: 16px;
    animation: ${spin} 1s linear infinite;
`;

export const LoaderTable = styled.div`
    border: 3px solid #f3f3f3;
    border-top: 3px solid ${color_primary};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${spin} 1s linear infinite;
    margin: 20px auto; 
`;

export { ButtonAddStyle, ContainerStyle, SectionStyle, SpanStyle };

