import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { Section, Head, DivImg, Div, P, Link, LinkLogin } from "./styles"

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

  return (
    <Section>
      <Head>
        <h2>
          Landbook <span>TM</span>
        </h2>
        <LinkLogin to="/dashboard">Iniciar sesión</LinkLogin>
      </Head>
      <DivImg>
        <Img
          fluid={firstImage.childImageSharp.fluid}
          key={firstImage.id}
          imgStyle={{ objectFit: "contain" }}
        />
        <Img
          fluid={secondaryImage.childImageSharp.fluid}
          key={secondaryImage.id}
          imgStyle={{ objectFit: "contain" }}
        />
      </DivImg>
      <Div>
        <h1>
          Crea tu landing <br /> page en minutos
        </h1>
        <P>y obtiene clienes nuevos ahora.</P>
        <Link to="/dashboard">Pruebalo Gratis</Link>
        <p>14 días de prueba gratis. Sin tarjeta de crédito.</p>
      </Div>
    </Section>
  )
}
