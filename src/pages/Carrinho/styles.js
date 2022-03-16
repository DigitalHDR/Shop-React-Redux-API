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
  position: relative;
  @media(max-width: 1120px) {
    min-width: 100%;
    max-width: none;
  }
  @media(max-width: 768px) {
    padding: 10px;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
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
  @media(max-width: 768px) {
    padding: 10px;
  }
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
 font-size: 18px;
`
export const BotaoCard = styled.button`
  border: 1px solid #50d603;
  font-size: medium;
  font-weight: 600;
  border-radius: 5px;
  padding: 5px 10px;
  color: #000;
  margin: 15px 5px 10px 0px;
  background: #50d603;
  align-self: center;
  transition: all ease-in-out .3s;
  &:hover {
    background: #fff;
  }
  @media(max-width: 768px) {
    position: absolute;
    right: 0px;
  }
`