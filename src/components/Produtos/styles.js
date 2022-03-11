import styled from "styled-components";

export const Tituto = styled.h1`
  text-align: center;
`
export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
`
export const Card = styled.div`
  width: 250px;
  margin: 20px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
`
export const Image = styled.img`
  width: 250px;
  height: 200px;
  padding: 10px;
  object-fit: contain;
  background-color: #fff;
`
export const Descricao = styled.div`
  color: #000;
  padding: 0 0 10px 0;
`
export const TituloCard = styled.h4`
 font-size: 20px;
`
export const Paragrafo = styled.p`
 font-size: 18px;
 padding: 0 10px;
 font-weight: 200;
`
export const Btn = styled.button`
  border: 1px solid #50d603;
  padding: 5px 10px;
  margin-top: 15px;
  background: #50d603;
  transition: all ease-in-out .3s;
  &:hover {
      background: transparent;
  }
`