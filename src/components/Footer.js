import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Navegacion from "./Navegacion"

const EnalceHome = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
`

const Footer = ({ title }) => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer
        css={css`
          background-color: rgb(44, 62, 80);
          padding: 1rem;
          margin-top: 6rem;
        `}
      >
        <div
          css={css`
            max-width: 1200px;
            margin: 0 auto;
            @media (min-width: 768px) {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          `}
        >
          <Navegacion></Navegacion>
          <p
            css={css`
              color: #fff;
              font-size: 18px;
            `}
          >
            Nicolás Bertini Argañaras
          </p>
          <EnalceHome to="/">
            <h2>Hotel Gatsby</h2>
          </EnalceHome>
        </div>
      </footer>
      <p
        css={css`
          text-align: center;
          color: #fff;
          background-color: rgb(33, 44, 55);
          margin: 0;
          padding: 1rem;
        `}
      >
        {title}- Todos los derechos Reservados {year} &copy;
      </p>
    </>
  )
}

export default Footer
