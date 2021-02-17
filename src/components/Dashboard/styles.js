import styled from "styled-components"

export const Section = styled.section`
  display: flex;
  width: 100%;
  height: 900px;
`

export const Nav = styled.nav`
  width: 225px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--light);

  h3 {
    font-size: 1.4em;
    padding: 25px 20px;
  }

  ul {
    list-style: none;
    font-size: 0.9em;
  }
  li {
    display: flex;
    justify-content: flex-start;
    margin: 30px;
    font-weight: bold;
    color: #a1a1b3;
  }
  svg {
    margin-right: 15px;
  }
  li:hover path,
  li:hover {
    color: #fb5d64;
    fill: #fb5d64;
    cursor: pointer;
  }

  span {
    font-size: 0.5em;
    position: absolute;
    margin: 10px 5px;
  }
`

export const Div = styled.div`
  background-color: #f6f4fc;
  color: #a1a1b3;
  border-radius: 15px;
  margin: 20px;
  height: 200px;

  p {
    margin: 0 auto;
    padding: 15px;
    text-align: center;
    width: 130px;
    font-weight: bold;
    font-size: 0.9em;
  }
  b {
    color: #000;
  }
  button {
    display: flex;
    text-align: center;
    margin: 0 auto;
    padding: 20px 10px 20px 20px;
    border-radius: 15px;
    width: 100px;
    color: white;
    background-color: var(--secondary);
    font-weight: bold;
    height: 10px;
    align-items: center;
    cursor: pointer;
    font-size: 0.9em;
    border: 1px solid var(--secondary);
    outline: none;

    &:hover {
      background-color: #19308c;
      color: var(--light);
      border: 1px solid #19308c;
    }
  }
`
export const DivContenido = styled.div`
  display: flex;
  background-color: #f6f4fc;
  width: 100%;
  height: 100%;
`
export const Li = styled.li`
  color: #fb5d64 !important;
  & path {
    fill: #fb5d64;
  }
`
