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
    font-size: 1.3em;
    text-align: center;
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

    & .tab {
      padding-left: 5em;
      margin: 0;
    }
  }

  & .images {
    align-self: center;
    margin-right: 200px;
  }

  & .projet {
    color: black;
    text-align: center;
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
    }

    & div {
      padding: 4em 0;
      display: flex;
      justify-content: space-evenly;


      & img {
        width: 500px;
        height: 250px;
        margin: 0 5em;
        border: 1px solid #545e75;
      }

      & p {
        width: 400px;
        height: 175px;
        display: flex;
        align-items: center;
        margin: 3em 2em;
      }
    }
  }
  & .border {
    border: 1px solid #545e75;

    background-color: white;
    border-radius: 50px;
    margin: 2em 2em;
    display: flex;
    flex-direction: column;
    padding: 0em;
    & div {
      padding: 2em 0;
      
    }
    & a {
      & img {
        height: 50px !important;
        width: 50px !important;
        border: 0px solid black !important;
        display: flex;
      }
  }
  }
  


  & .top {
    display: flex;
    justify-content: center;
    align-self: center;
    align-items: center;
    flex-direction: column;

    & h1 {
      color: black;
      margin-bottom: 0;
      margin-top: 1em;
    }

    & img {
      height: 70px;
      width: 70px;
    }
  }
  & .football {
    & p {
      margin-top: 10em !important;
    }
    & img {
      width: 250px !important;
      height: 500px !important;
    }
  }

`;