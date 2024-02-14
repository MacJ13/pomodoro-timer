import styled from "styled-components";

export const Input = styled.input`
  // border: none;

  // text-align: right;
  padding-left: 0.75rem;
  width: 4.5rem;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border: none;
  border-radius: 0.33rem;
  color: ${({ theme }) => theme.colors.black05};
  font-size: inherit;
  font-family: inherit;
  font-weight: 600;

  &[type="text"] {
    height: 2.5rem;
    width: 100%;
    font-size: rem;

    &::placeholder {
      color: rgba(0, 0, 0, 0.25);
      font-style: italic;
      font-weight: 500;
    }
  }

  &[type="number"] {
    height: 2rem;
    width: 4.5rem;
  }

  &[type="number"]::-webkit-inner-spin-button {
    margin-right: 0.5rem;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const TextArea = styled.textarea`
  border: none;
  color: ${({ theme }) => theme.colors.black05};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  width: 100%;
  font-size: 1rem;
  padding: 0.5rem 0.66rem;
  border-radius: 0.25rem;

  font-family: inherit;
  font-weight: 600;
  height: 5rem;
  resize: vertical;

  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
    font-style: italic;
    font-weight: 500;
  }
`;
