
import './App.css'
import Content from './Components/Content';
import ContentTwo from './Components/ContentTwo';
import Header from './Components/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Foater from './Components/Foater';
import Recognition from './Recognition';
import Circle from './Components/Circle';
AOS.init();

function App() {


  return (
    <>
      <Header />
      <Content/>
      <ContentTwo/>
      <Recognition/>
      <Foater/>
      {/* <Circle/> */}
    </>
  )
}

export default App
