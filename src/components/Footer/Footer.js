import React from "react"
import { Section, Div, Li } from "./styles"

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
    </Section>
  )
}
