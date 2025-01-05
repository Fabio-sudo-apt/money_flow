import styled from 'styled-components';
import { color_primary, color_white } from '../../themes/colors';

export const ButtonAddStyle = styled.button`
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
