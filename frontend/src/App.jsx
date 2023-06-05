import styled from "styled-components";
import TopBar from "./components/topbar";
import Home from "./components/home";
import About from "./components/about";
import News from "./components/news";
import Enroll from "./components/enroll";
import Download from "./components/download";

export default function App() {
  return (
    <Wrapper>
      <TopBar/>
      <Home/>
      <About/>
      <News/>
      <Enroll/>
      <Download/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;
`
