import styled from "styled-components"

export const Section = styled.section`
  width: 100%;
  height: 900px;
`

export const Title = styled.div`
  margin-top: 30px;
  padding: 60px;
  h2 {
    text-align: center;
    padding: 20px;
    font-size: 1.8em;
  }
`

export const Div = styled.div`
  display: grid;
  grid-auto-flow: column;
  padding: 15px;
  margin-top: 30px;
  justify-content: center;
  align-items: flex-end;

  article {
    width: 80%;
    text-align: center;
    /* line-height: 30px; */
  }
  span {
    width: 150px;
    height: 300px;
  }
`

export const P = styled.p`
  color: var(--secondary);
  font-weight: 700;
`

export const DivImg = styled.div`
  div {
    display: flex;
    justify-content: center;
    width: 150px;
    left: 20%;
  }
`
