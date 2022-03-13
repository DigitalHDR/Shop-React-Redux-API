import styled from "styled-components";

export const CardContainer = styled.h1`
  display: flex;
  justify-content: center;
`

export const Card = styled.div`
  min-width: 900px;
  max-width: 900px;
  margin-top: 10px;
  display: flex;
  background-color: #fff;
  border-radius: 5px;
`

export const ImageContainer = styled.div`
  padding: 10px 5px;
  display: flex;
  align-items: center;
`
export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
`
export const Descricao = styled.div`
  padding: 10px 20px 0 10px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  color: #000;
`
export const Paragrafo = styled.p`
  font-size: 18px;
  padding: 20px 0px;
  font-weight: 500;
  color: #000;
`
export const TituloCard = styled.h4`
 font-size: 30px;
`