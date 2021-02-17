import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  Section,
  Title,
  Card,
  Div,
  Image,
  Ul,
  DivCartel,
  CardStats,
  Button,
  SideBar,
} from "./styles"

export default function Home() {
  const { image } = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "Layer-14.png" }) {
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
    <>
      <Section>
        <Title>Dashboard de Médico en Planta</Title>
        <DivCartel>
          <Card>
            <div>
              <h3>Bienvenido de nuevo Ariel!</h3>
              <article>
                <p>
                  You've learned 80 % of your goal this week! <br />
                  Keep it up and improve your results!
                </p>
              </article>
            </div>
            <Image
              fluid={image.childImageSharp.fluid}
              key={image.id}
              imgStyle={{ objectFit: "contain" }}
            />
          </Card>
          <Div>
            <CardStats>
              <h3>Ver otras Landing Pages</h3>
              <Ul>
                <li>AteneLogistic1</li>
                <li>Cemepla2</li>
              </Ul>
              <Button>
                <button>Nueva Landing</button>
              </Button>
            </CardStats>
            <CardStats>
              <h3>Estadísticas</h3>
              <ul>
                <li>606 Impresiones</li>
                <li>33 consultas</li>
                <li>7 mensajes por WhatsApp</li>
                <li>6.6% Tasa de interacción</li>
              </ul>
            </CardStats>
          </Div>
        </DivCartel>
      </Section>
      <SideBar>
        <span>Cerrar Sesión</span>
        <h3>Tus Landing</h3>
        <div>
          <p>
            Cemepla - Médico en Planta <br />
            Atene Logistic Landing 1
          </p>
          <input
            placeholder="Nombre de Landing"
            type="text"
            name="nombre"
            id="nombre"
          />
          <button>Nueva Landing</button>
        </div>
      </SideBar>
    </>
  )
}
