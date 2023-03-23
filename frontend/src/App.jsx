import styled from "styled-components";

export default function App() {
  return (
    <Wrapper>
      <h1>+1</h1>
      <button>and much more!</button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`
