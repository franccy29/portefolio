import styled from 'styled-components'

export const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  overflow-x: hidden;
  background-color: #eef4ed;

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

  & .projet {
    color: black;
    text-align: center;
    background-color: white;
    border-radius: 50px;
    width: 60%;
    margin: 3em 0em;

    & .top {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1.5em 0em;
      padding: 0;

        & img {
          padding: 0;
          margin: 0;
          height: 100px;
          width: 200px;
        }

        & h2 {

        }
      }

    & div {
      padding: 8em 0;
      display: flex;
      justify-content: space-evenly;

      & img {
        width: 400px;
        height: 175px;
        margin: 0 5em;
      }

      & p {
        width: 400px;
        height: 175px;
        display: flex;
        align-items: center;
      }
    }
  }
`;