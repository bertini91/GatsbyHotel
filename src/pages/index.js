import * as React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import ContenidoInicio from "../components/ContenidoInicio"
import ImagenHotel from "../components/ImagenHotel"
import Layout from "../components/layout"
import useHabitacones from "../hooks/use-habitacion"
import HabitacionPreview from "../components/HabitacionPreview"

const ListadoHabitaciones = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;
  @media(min-width: 768px){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`

const IndexPage = () => {
  const habitaciones = useHabitacones()
  /* console.log(habitaciones) */
  return (
    <Layout>
      <ImagenHotel></ImagenHotel>
      <ContenidoInicio></ContenidoInicio>
      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >
        Nuestras Habitaciones
      </h2>
      <ListadoHabitaciones>
        {habitaciones.map(habitacion => (
          <HabitacionPreview
            key={habitacion.id}
            habitacion={habitacion}
          ></HabitacionPreview>
        ))}
      </ListadoHabitaciones>
    </Layout>
  )
}

export default IndexPage
