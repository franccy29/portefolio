import styled from 'styled-components'

export const StyledHomePage = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
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

  & .aboutSection {
    width: 50%;
    border-radius: 15px 15px 0 0;
    background-color: white;
    color: black;
    margin-top: 20em;
    text-align: center;
  }

  & .nameTag {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
  }
`;