import React from "react"
import styled from "styled-components"

export default function Footer() {
  return (
    <Section>
      <Div>
        <div>
          <ul>
            <Li>LandBook</Li>
            <li>Copyright 2021</li>
          </ul>
        </div>
        <div>
          <ul>
            <Li>Síguenos</Li>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>
        <div>
          <ul>
            <Li>Contacto</Li>
            <li>hello@landbook.app</li>
            <li>Affiliate Program</li>
          </ul>
        </div>
      </Div>
      <DivBy>
        <p>
          Web realizada por
          <a href="mailto:arrieta.maxi18@gmail.com"> Maximiliano Arrieta</a>
        </p>
      </DivBy>
    </Section>
  )
}

export const Section = styled.footer`
  width: 100%;
`
export const Div = styled.div`
  display: flex;
  justify-content: space-around;

  div {
    padding: 40px;
    margin-bottom: 15px;
  }
  ul {
    list-style: none;
  }

  li {
    font-size: 0.8em;
  }
`

export const Li = styled.li`
  font-weight: bold;
  margin-bottom: 15px;
`

export const DivBy = styled.div`
  background-color: #d7d7d8;
  p {
    font-size: 0.8em;
    text-align: center;
  }
  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
`
