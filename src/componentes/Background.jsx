import { render } from "react-dom";
import styled, { createGlobalStyle } from "styled-components";
import logo from "../assets/logo.png";

function Background() {
  const GlobalStyles = createGlobalStyle`
        @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');`;

  const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 48px 0 58px 0;
    gap: 2px;
    & h1 {
      width: 203;
      height: 44px;
      font-family: "Righteous", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      line-height: 45px;
      align-items: center;
      text-align: center;
      letter-spacing: -0.012em;
      color: #ffffff;
      font-family: "Righteous", sans-serif;
    }

    & img {
      width: 52px;
      height: 60px;
    }
  `;

  return (
    <>
      <GlobalStyles />
      <HeaderWrapper>
        <img src={logo} alt="logo ZapRecall" />
        <h1>ZapRecall</h1>
      </HeaderWrapper>
    </>
  );
}

export default Background;
