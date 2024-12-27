import styled from 'styled-components';
import { color_white } from '../../../../themes/colors';

export const CardStyle = styled.div`
    width: 90%;
    padding: 16px;
    margin: 10px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    background-color: ${color_white};
`;
export const CardItemStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const TextCardItemStyle = styled.p`
    margin: 10px;
    font-size: 1rem;
    font-weight: 300;
`;
export const TextCardItemValueStyle = styled.p`
    margin: 10px;
    font-size: 2rem;
    font-weight: 500;
`;
