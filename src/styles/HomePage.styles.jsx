import styled from 'styled-components'

export const StyledHomePage = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 100px;

  & img {
    height: 100px;
    width: 100px;
    margin: 0 0.7em;
  }

  & .nom {
    font-size: 1.8em;
  }

  & .profession {
    color: gray;
    padding-left: 2em;
  }
  & .intro {
    font-size: 3em;
    padding: 1em 0;
  }

  & .images {
    align-self: center;
  }

`;