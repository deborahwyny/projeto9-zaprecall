import styled from "styled-components";

function Footer({clickedButtonColor}) {
  const FooterWrapped = styled.div`
    height: 22px;
    width: 100%;
    height: 70px;
    background: #ffffff;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    margin: 109px 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;

    h3 {
      font-family: "Recursive";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: #333333;
    }
  `;

  return (
    <FooterWrapped data-test="footer">
      <h3>{clickedButtonColor.length}/8 CONCLUÍDOS</h3>
    </FooterWrapped>
  );
}

export default Footer;
