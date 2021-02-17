import styled from "styled-components"
import Img from "gatsby-image"

export const Section = styled.section`
  width: 80%;
`
export const Title = styled.h3`
  padding-top: 30px;
  padding-left: 40px;
  font-size: 1.4em;
  font-weight: 500;
  margin-bottom: 30px;
`

export const Div = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 70px;
`

export const Card = styled.div`
  border: 1px solid red;
  display: flex;
  margin: 40px;
  padding: 25px;
  border-radius: 25px;
  background-color: #ffe5e6;
  justify-content: space-around;
  height: 120px;

  h3 {
    color: #fb5d64;
  }
`

export const Image = styled(Img)`
  margin-top: -45px;
  width: 220px;
  height: 220px;
`

export const CardStats = styled.div`
  width: 350px;
  height: 230px;
  background-color: var(--light);
  color: #3c3b60;
  border-radius: 25px;
  h3 {
    padding-top: 25px;
    padding-left: 40px;
  }
  ul {
    margin-top: 15px;
    margin-left: 40px;
    list-style: none;
    font-size: 0.8em;
  }
  li {
    margin: 10px;
  }
`

export const Ul = styled.ul`
  text-decoration: underline;
  li {
    cursor: pointer;
  }
`
export const Button = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 40px;
  padding-top: 20px;
  color: var(--light);
  border-radius: 25px;
  align-items: center;

  button {
    background-color: var(--secondary);
    outline: none;
    padding: 15px 25px;
    border-radius: 15px;
    border: 1px solid var(--secondary);
    color: var(--light);
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #19308c;
      color: var(--light);
      border: 1px solid #19308c;
    }
  }
`

export const DivCartel = styled.div`
  margin-top: 95px;
`
export const SideBar = styled.nav`
  background-color: var(--light);
  padding-top: 50px;
  padding-left: 25px;
  color: #3c3b60;

  span {
    color: #acacac;
    font-weight: bold;
    margin-left: 40px;
    cursor: pointer;
  }
  h3 {
    margin-top: 80px;
  }
  div {
    font-size: 0.8em;
    margin-top: 25px;
  }
  input {
    margin-top: 20px;
    height: 45px;
    width: 160px;
    text-align: center;
    border: 1px solid #c3c3c3;
    color: #c0c0c0;
    border-radius: 15px;
    outline: none;
    font-size: 1em;
    margin-bottom: 10px;

    &:focus-visible {
      color: #000;
    }
  }

  button {
    height: 45px;
    width: 160px;
    text-align: center;
    background-color: var(--secondary);
    border: 1px solid var(--secondary);
    color: var(--light);
    border-radius: 15px;
    outline: none;
    font-weight: 500;
    font-size: 1em;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
      background-color: #19308c;
      color: var(--light);
      border: 1px solid #19308c;
    }
  }
`
