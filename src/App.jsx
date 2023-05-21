import { useState } from 'react'
import styled from 'styled-components'
import Background from './componentes/Background'
import Flashcards from './componentes/Flashcards'
import Footer from './componentes/Footer'


function App() {
  const [clickedButtonColor, setClickedButtonColor] = useState([]);


  const BackgroundWrapper = styled.div `
        box-sizing: border-box;
        background: #FB6B6B;
        border: 1px solid #DBDBDB;
        
    `

  

  return (
    <BackgroundWrapper>
    <Background />
     <Flashcards clickedButtonColor={clickedButtonColor} setClickedButtonColor={setClickedButtonColor}/>
     <Footer clickedButtonColor={clickedButtonColor} />
    </BackgroundWrapper>
  )

 
}





export default App
