import styled from 'styled-components'

export const StyledProjet = styled.div`
  color: white;
  text-align: center;
  margin-top: 3em;
  & div {
    padding: 8em 0;
    display: flex;
    justify-content: space-evenly;

    & img {
      width: 400px;
      height: 175px;
      margin: 0 5em;
    }
  }
`;