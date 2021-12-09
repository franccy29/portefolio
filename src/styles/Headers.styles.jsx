import styled from 'styled-components'

export const StyledHeaders = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  font-size: 1.2em;

  & .titre {
    margin: 0 1.2em;
    border-bottom: 1px solid black;
  }

  & .item {


    & span {
      margin: 0 1.2em;
      border-bottom: 1px solid black;      
    }
  }
`;