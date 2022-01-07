import styled from 'styled-components'

export const StyledHomePage = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  overflow: hidden;

  & .resume {
    width: 60%;
    font-size: 1.5em;
  }

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
    margin-right: 150px;
  }

  & .images {
    align-self: center;
  }

  & .nameTag {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin-left: 150px;
  }
`;