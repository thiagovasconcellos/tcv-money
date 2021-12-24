import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table{
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title);
      }

      &.credit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.5rem;
  border: 0;
  background-color: transparent;

  svg {
    color: var(--red);
    height: 100%;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.6);
    }
  }
`;