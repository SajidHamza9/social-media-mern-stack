import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 16rem;
  margin-left: 1rem;
  height: 60%;
  border-radius: 100px;
  border: 1px solid #ab987a;
  display: flex;
  align-items: center;
  color: #ab987a;
  padding: 1rem 0.5rem;
`;

export const SearchInput = styled.input`
  border: none;
  flex-grow: 2;
  outline: none;
  height: 100%;
  border-radius: 100px;
  width: 100%;
  color: #ab987a;
  font-size: 0.9rem;
  padding: 1rem 0.5rem;
  &::focus {
    border: none;
    outline: none;
  }
`;

export const Item = styled.div`
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.11);
  padding: 0.5rem;
  width: 100%;
  width: 90%;
`;
