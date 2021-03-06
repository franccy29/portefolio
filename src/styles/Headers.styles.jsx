import styled from 'styled-components'

export const StyledHeaders = styled.div`
  background-color: #545e75;
  color: white;
  display: flex;
  justify-content: space-between;
  font-size: 1.2em;
  margin: 0 4em;

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
  & .nom {
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;