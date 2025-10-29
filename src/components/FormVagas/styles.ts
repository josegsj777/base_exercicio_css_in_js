import styled from "styled-components";
import { PropsBotao } from ".";

export const FormVaga = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`


export const Campo = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-principal);
`

export const BtnPesquisa = styled.button<PropsBotao>`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: ${(props) => props.fontSize ? props.fontSize + 'px' : '18px'};
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
`
