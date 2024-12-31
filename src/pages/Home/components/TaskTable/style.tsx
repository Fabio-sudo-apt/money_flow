import styled from 'styled-components';
import { color_primary, color_red, color_white } from '../../../../themes/colors';

export const TableStyle = styled.table`
  border-collapse: separate;
  border-spacing: 0 10px;
  border: none;
  width: 100%;

  thead {
    tr{

        th {
            padding: 10px;
            text-align: left;
            font-weight: 600;
            font-size: 14px;
        }   
    }
    
  }

  tbody {
    tr {
      background-color: ${color_white};
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      overflow: hidden;

      td {
        padding: 10px;
        text-align: left;

        &:first-child {
          border-radius: 5px 0 0 5px;
        }

        &:last-child {
          border-radius: 0 5px 5px 0;
        }
      }
    }
  }
`;

export const PaginationStyle = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 1rem;

    button {
        margin: 0 0.5rem 0 0; 
        padding: 0.5rem 1rem;
        cursor: pointer;

        background: ${color_primary};
        color: ${color_white};
        border-radius: 10px;
        border: none;

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    }

    span {
        margin: 0 0.5rem;
    }
`;

export const ButtonStyle = styled.button<{ disabled?: boolean }>`
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: transparent;
    color: ${({ disabled }) => (disabled ? '#ccc' : color_red)};
    font-weight: 600;
    font-size: 1rem;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: ${({ disabled }) => (disabled ? 'transparent' : color_red)};
        color: ${({ disabled }) => (disabled ? '#ccc' : color_white)};
    }
`;


export const TextNotFound = styled.h2`
    text-align: center;
    margin: 10px;
`;
