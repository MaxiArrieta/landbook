import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { Section, Div, DivImg, P } from "./styles"

export default function Start() {
  const { firstImg } = useStaticQuery(graphql`
    {
      firstImg: file(relativePath: { eq: "Layer-1.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Section>
      <Div>
        <DivImg>
          <Img
            fluid={firstImg.childImageSharp.fluid}
            key={firstImg.id}
            imgStyle={{ objectFit: "contain" }}
          />
        </DivImg>
        <h2>¡Empezá ahora gratis!</h2>
        <P>
          Diseña tu landing page en 5 minutos y comienza a generar prospectos y
          <br />
          automatizar tus ventas.
        </P>
        <div>
          <button>Pruebalo Gratis</button>
        </div>
        <p>14 días de prueba gratis. Sin tarjeta de crédito.</p>
      </Div>
    </Section>
  )
}
