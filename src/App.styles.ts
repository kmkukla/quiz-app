import styled, { createGlobalStyle } from 'styled-components';
// @ts-ignore
import BGImage from './images/robert-katzki.jpg';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-image: url(${BGImage});
        background-size: cover;
        background-attachment: fixed;
        background-repeat: no-repeat;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .score {
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: 'Fascinate Inline', sans-serif;
    background-size: 100%;
    filter: drop-shadow(2px 2px #ebfeff);
    font-size: 50px;
    text-align: center;
    margin: 20px;
    @media (min-width: 900px) {
      font-size: 70px;
    }
  }

  .start,
  .next {
    cursor: pointer;
    background: #d0fff9;
    border: 2px solid #1f4261;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    font-size: 1rem;
  }

  .start {
    max-width: 200px;
  }
`;
