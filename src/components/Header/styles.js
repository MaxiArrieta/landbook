import styled from "styled-components"
import { Link as LinkBottom } from "gatsby"

export const Section = styled.section`
  width: 100%;
  height: 900px;
  background-color: var(--primary);
`

export const Head = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 50px;

  h2 {
    margin: 0 auto;
    padding-left: 60px;
  }
  span {
    font-size: 0.5em;
    position: absolute;
    margin: 10px 5px;
  }
`

export const DivImg = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;

  p {
    margin: 15px;
  }
  div {
    margin: 20px;
    height: 250px;
    width: 330px;
  }
`

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin-top: 10px;
    text-align: center;
    font-size: 2.8em;
  }
  p {
    padding: 10px;
    text-align: center;
  }
`

export const P = styled.p`
  font-weight: 700;
`
export const Link = styled(LinkBottom)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 0;
  position: relative;
  left: calc(50% - 110px);
  padding: 0 10px;
  width: 200px;
  height: 80px;
  outline: none;
  color: var(--light);
  background-color: var(--secondary);
  border: 1px solid var(--secondary);
  border-radius: 10px;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #19308c;
    color: var(--light);
    border: 1px solid #19308c;
  }
`

export const LinkLogin = styled(LinkBottom)`
  background-color: var(--secondary);
  border: 1px solid var(--secondary);
  border-radius: 10px;
  color: var(--light);
  outline: none;
  padding: 8px 15px;
  font-size: 0.8em;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #19308c;
    color: var(--light);
    border: 1px solid #19308c;
  }
`
