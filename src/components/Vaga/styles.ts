import styled from "styled-components";
import cores from "../../cores/styleCores";

export const Vaga = styled.li`
  border: 1px solid ${cores.corPrincipal};
  background-color: ${cores.corSecundaria};
  color: ${cores.corPrincipal};
  padding: 16px;
  transition: all ease .3s;
  border-radius: 8px;

  &:hover {
  background-color: ${cores.corPrincipal};
  color: ${cores.corSecundaria};
}

  &:hover a {
  border-color: ${cores.corPrincipal};
  background-color: ${cores.corSecundaria};
  color: ${cores.corPrincipal};
}
`
export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLink = styled.a`
  border-color: ${cores.corSecundaria};
  background-color: ${cores.corPrincipal};
  color: ${cores.corSecundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
