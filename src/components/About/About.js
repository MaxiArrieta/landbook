import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { Section, Div, DivImg, P, Title } from "./styles"

export default function About() {
  const { firstImg, secondaryImg, thirdImg } = useStaticQuery(graphql`
    {
      firstImg: file(relativePath: { eq: "Layer-2.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      secondaryImg: file(relativePath: { eq: "Layer-8.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      thirdImg: file(relativePath: { eq: "Layer-9.png" }) {
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
      <Title>
        <h2>¿Qué podés hacer con LandBook?</h2>
      </Title>
      <Div>
        <DivImg>
          <Img fluid={firstImg.childImageSharp.fluid} key={firstImg.id} />
          <article>
            <P>
              Diseña tu landing <br /> en 5 minutos
            </P>
            <br />
            <p>
              Elige una de nuestras plantillas probadas y <b>personalízala</b>
              para que se adapte a tu estilo.
            </p>
          </article>
        </DivImg>
        <DivImg>
          <Img
            fluid={secondaryImg.childImageSharp.fluid}
            key={secondaryImg.id}
          />
          <br />
          <article>
            <P>
              Gestiona tus potenciales <br /> clientes o prospectos
            </P>
            <br />
            <p>
              Gestiona los prospectos de tu CRM, <b>automatiza</b> y organiza
              tus ventas por estados
            </p>
          </article>
        </DivImg>
        <DivImg>
          <Img fluid={thirdImg.childImageSharp.fluid} key={thirdImg.id} />
          <br />
          <article>
            <P>
              Atención y <br /> soporte gratuito
            </P>
            <br />
            <p>
              Si tienes dudas puedes preguntarnos consultarnos cuando quieras.
            </p>
          </article>
        </DivImg>
      </Div>
    </Section>
  )
}
