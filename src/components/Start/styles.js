import styled from "styled-components"

export const Section = styled.section`
  width: 100%;
  height: 860px;
  background-color: var(--secondary);
  color: var(--light);
  padding-top: 20px;
`

export const Div = styled.div`
  margin-top: 100px;
  h2 {
    text-align: center;
    font-size: 2.8em;
    margin: 25px 0;
  }
  p {
    text-align: center;
    margin: 25px 0;
  }
  div {
    display: flex;
    justify-content: center;
    margin: 25px 0;
  }
  button {
    background-color: var(--light);
    border: none;
    border-radius: 10px;
    color: #19308c;
    outline: none;
    width: 270px;
    height: 75px;
    padding: 15px;
    font-size: 1.6em;
    font-weight: 700;
    cursor: pointer;
  }
`

export const P = styled.p`
  margin: 25px 0;
  font-weight: 700;
`

export const DivImg = styled.div`
  div {
    display: flex;
    justify-content: center;
    width: 260px;
  }
`
