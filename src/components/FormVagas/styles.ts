import styled from "styled-components";
import { PropsBotao } from ".";
import cores from "../../cores/styleCores";

export const FormVaga = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${cores.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`


export const Campo = styled.input`
  padding: 0 16px;
  outline-color: ${cores.corPrincipal};
`

export const BtnPesquisa = styled.button<PropsBotao>`
  background-color: ${cores.corPrincipal};
  border: 1px solid ${cores.corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: ${(props) => props.fontSize ? props.fontSize + 'px' : '18px'};
  color: ${cores.corSecundaria};
  margin-left: 8px;
  cursor: pointer;
`
