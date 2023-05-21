import cards from "./Deck";
import { useState } from "react";
import setaPlay from "../assets/seta_play.png";
import styled from "styled-components";
import { css } from "styled-components";
import setaReturn from "..//assets/seta_virar.png";
import certo from "../assets/icone_certo.png";
import errado from "../assets/icone_erro.png";
import quase from "../assets/icone_quase.png";

function Flashcards({clickedButtonColor, setClickedButtonColor}) {
  const [expanded, setExpandedCard] = useState(null);
  const [isFlipped, setIsFlipped] = useState(null);

  function clicouCard(card) {

    if(clickedButtonColor.find((c) => c.card === card) !== undefined){
      return
    }

    if (expanded === card) {
      setExpandedCard(null);
    } else {
      setExpandedCard(card);
    }
  }

  const flipcard = (card) => {
    if (isFlipped === card) {
      setIsFlipped(null);
    } else {
      setIsFlipped(card);
    }
  };

  const clicouBotao = (card, buttoncolor, icon, dataTest) => {
    let btnColor = { card: card, color: buttoncolor, icon: icon, dataTest:dataTest};
    setClickedButtonColor([...clickedButtonColor, btnColor]);
    flipcard(card);
  };

  return (
    <WrappedCards>
      {cards.map((card, index) => (
        <Card
          key={index}
          data-test="flashcard"
          expanded={card === expanded}
          isFlipped={card === isFlipped}
          clickedButtonColor={
            clickedButtonColor.find((c) => c.card === card) !== undefined
              ? clickedButtonColor.find((c) => c.card === card).color
              : "#333333"
          }
          clicouBotao={isFlipped === card && expanded === card}
          respondido ={
            clickedButtonColor.find((c) => c.card === card) !== undefined
              ? true
              : false
          }
        >
          <h2 data-test="flashcard-text">
            {card === expanded && card !== isFlipped ? card.question : ""}
            {card === expanded && card === isFlipped ? card.answer : ""}
            {card !== expanded ? `Pergunta ${index + 1}` : ""}
          </h2 >
          {card === expanded ? (
            <img
              data-test="turn-btn"
              onClick={() => flipcard(card)}
              src={setaReturn}
              alt="seta para retornar"
            />
          ) : (
            <img
              data-test= {clickedButtonColor.find((c) => c.card === card) !== undefined
                ? clickedButtonColor.find((c) => c.card === card).dataTest
                : "play-btn"}
              onClick={() => clicouCard(card)}
              src={
                clickedButtonColor.find((c) => c.card === card) !== undefined
                  ? clickedButtonColor.find((c) => c.card === card).icon
                  : setaPlay
              }
              alt="seta"
              
            />
          )}
          {card === expanded && card === isFlipped && (
            <Back>
              <ButtonVermelho data-test="no-btn"  onClick={() => clicouBotao(card, "#FF3030", errado, "no-icon")}>
                Não lembrei
              </ButtonVermelho>
              <ButtonLaranja data-test="partial-btn" onClick={() => clicouBotao(card, "#FF922E", quase, "partial-icon")}>
                Quase não lembrei
              </ButtonLaranja>
              <ButtonVerde data-test="zap-btn" onClick={() => clicouBotao(card, "#2FBE34",certo, "zap-icon")}>
                Zap!
              </ButtonVerde>
            </Back>
          )}
        </Card>
      ))}
    </WrappedCards>
  );
}

export default Flashcards;

const WrappedCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
`;

const Back = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 7px;
  position: absolute;
  top: 82px;
  right: 15px;
`;

const ButtonVerde = styled.button`
  width: 85px;
  height: 37px;
  border-radius: 5px;
  background-color: #2fbe34;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  align-items: center;
  text-align: center;
  color: #ffffff;
  border: none;
`;
const ButtonVermelho = styled.button`
  width: 85px;
  height: 37px;
  border-radius: 5px;
  background-color: #ff3030;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  align-items: center;
  text-align: center;
  color: #ffffff;
  border: none;
`;
const ButtonLaranja = styled.button`
  width: 85px;
  height: 37px;
  border-radius: 5px;
  background-color: #ff922e;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  align-items: center;
  text-align: center;
  color: #ffffff;
  border: none;
`;

const Card = styled.ul`
  box-sizing: border-box;
  text-decoration: none;
  width: 300px;
  height: ${({ expanded }) => (expanded ? "131px" : "65px")};
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  justify-content: row;
  align-items: ${({ expanded }) => (expanded ? "flex-start" : "center")};
  gap: ${({ isFlipped }) => (isFlipped ? "" : "163px")};
  cursor: pointer;
  transition: height 0.3s;
  position: relative;

  & h2 {
    font-family: "Recursive", sans-serif;
    width: ${({ isFlipped }) => (isFlipped ? "258px" : "87px")};
    height: 19px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    font-family: "Recursive", sans-serif;
    /* text-decoration: ${({ clicouBotao }) => clicouBotao ? "line-through" : ""}; */
    color: ${({ clickedButtonColor }) => clickedButtonColor};
    text-decoration: ${({ respondido }) => respondido ? "line-through" : "none"};
    padding-left: 5px;
    padding-top: ${({ expanded }) => (expanded ? "18px" : "")};
    /* ${({ clickedButtonColor }) =>
      clickedButtonColor &&
      css`
        text-decoration: line-through;
      `} */
  }
  & img {
    padding-top: ${({ expanded }) => (expanded ? "100px" : "")};
    transition: transform 0.3s;
  }
`;
