import styled from 'styled-components';
import { color_primary, color_red, color_white } from '../../../../themes/colors';

export const TableStyle = styled.table`
  border-collapse: separate;
  border-spacing: 0 10px;
  border: none;
  width: 100%;

  thead {
    tr {
      th {
        padding: 10px;
        text-align: left;
        font-weight: 600;
        font-size: 14px;

        @media (max-width: 768px) {
          font-size: 12px;
          padding: 8px;
        }

        @media (max-width: 480px) {
          font-size: 10px;
          padding: 8px;
        }
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

        @media (max-width: 768px) {
          font-size: 12px;
          padding: 8px;
        }

        @media (max-width: 480px) {
          font-size: 10px;
          padding: 5px;
        }

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

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }

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

    @media (max-width: 768px) {
      padding: 0.4rem 0.8rem;
    }

    @media (max-width: 480px) {
      padding: 0.3rem 0.6rem;
    }
  }

  span {
    margin: 0 0.5rem;

    @media (max-width: 768px) {
      margin: 0;
      font-size: 14px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }
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

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 8px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 5px;
  }
`;

export const TextNotFound = styled.h2`
  text-align: center;
  margin: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
