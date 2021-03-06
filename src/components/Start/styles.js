import styled from "styled-components"
import { Link as LinkButtom } from "gatsby"

export const Section = styled.section`
  width: 100%;
  height: 900px;
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

export const Link = styled(LinkButtom)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--light);
  border: 1px solid var(--light);
  border-radius: 10px;
  color: #19308c;
  outline: none;
  width: 270px;
  height: 75px;
  padding: 15px;
  font-size: 1.6em;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    border: 1px solid var(--light);
    background-color: var(--secondary);
    color: var(--light);
  }
`
