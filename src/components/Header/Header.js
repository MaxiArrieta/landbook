import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { Section, Head, DivImg, Div, P } from "./styles"

export default function Header() {
  const { firstImage, secondaryImage } = useStaticQuery(graphql`
    {
      firstImage: file(relativePath: { eq: "Layer-13.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      secondaryImage: file(relativePath: { eq: "Layer-11.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log(firstImage)
  console.log(secondaryImage)

  return (
    <Section>
      <Head>
        <h2>
          Landbook <span>TM</span>
        </h2>
        <button>Iniciar sesión</button>
      </Head>
      <DivImg>
        <Img fluid={firstImage.childImageSharp.fluid} key={firstImage.id} />
        <Img
          fluid={secondaryImage.childImageSharp.fluid}
          key={secondaryImage.id}
        />
      </DivImg>
      <Div>
        <h1>
          Crea tu landing <br /> page en minutos
        </h1>
        <P>y obtiene clienes nuevos ahora.</P>
        <button>Pruebalo Gratis</button>
        <p>14 días de prueba gratis. Sin tarjeta de crédito.</p>
      </Div>
    </Section>
  )
}
