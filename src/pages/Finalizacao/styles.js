import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  background-color: #fff;
`
export const ContainerBox = styled.div`
  display: flex;
  justify-content: center;
`
export const Box = styled.div`
  max-width: 1100px;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  
  @media(max-width: 1077px) {
    flex-direction: column-reverse;
  }
`
export const Form = styled.form`
  display: flex;
  padding: 0 10px;
  flex-direction: column;
  hr {
    margin: 20px 0;
  }
`
export const FormContainerBox = styled.div`
  display: flex;
`
export const FormNameContainer = styled.div`
  width: 100%;
`
export const FormName = styled.div`
  margin: 10px 10px 0px 0px;
  display: flex;
  flex-direction: column;
`
export const Label = styled.label`
  font-size: 18px;
  span {
    color: #6A8987;
  }
`
export const InputText = styled.input`
  width: 100%;
  border: 1px solid #000;
  border-radius: 3px;
  height: 35px;

  font-size: 17px;
`
export const FormPaisEstadoCep = styled.div`
  display: flex;
`
export const Preferencias = styled.div`
  display: flex;
  flex-direction: column;
`
export const FormPagamento = styled.div`

`
export const CarrinhoQuantidade = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Bolinha = styled.div`
  text-align: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  color: #fff;
  background-color: blue;
`
export const TabelaLista = styled.div`
  margin-top: 20px;
  width: 350px;
  @media(max-width: 1077px) {
    width: 100%;
  }
`
export const TabelaListaItem = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border: 1px solid #50d603;
  margin: -1px 0 0 0px;
  background-color: #50d603;
  transition: all ease-in-out .3s;
  &:hover {
  background-color: transparent;
  }
`
export const TabelaTiulo = styled.div`
  flex-grow: 1;
`
export const Preco = styled.div`
  min-width: 75px;
`