import styled from "styled-components";

export const CardContainer = styled.h1`
  display: flex;
  justify-content: center;
`
export const Card = styled.div`
  max-width: 1200px;
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  @media(max-width: 880px) {
    flex-direction: column;
    align-items: center;
  }
`
export const ImageContainer = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  @media(max-width: 880px) {
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`
export const Image = styled.img`
  width: 400px;
  height: 400px;
  padding: 30px 0 30px 0;
  object-fit: contain;
  @media(max-width: 880px) {
    padding: 30px 0 0 0;
    width: 80%;
  }
`
export const Descricao = styled.div`
  width: 800px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media(max-width: 880px) {
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  }
`
export const TituloCard = styled.h4`
  font-size: 40px;
  @media(max-width: 880px) {
  font-size: 30px;
  }
`
export const Paragrafo = styled.p`
  font-size: 18px;
  padding: 20px 0px;
  font-weight: 500;
`
export const Price = styled.p`
  font-size: 40px;
  font-weight: 500;
`
export const Pontuacao = styled.p`
  font-size: 18px;
  font-weight: 500;
`
export const BoxBotaoes = styled.div`

`