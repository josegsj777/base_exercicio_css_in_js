import styled from "styled-components";
import { Props } from ".";
import cores from "../../cores/styleCores";

export const HeroForm = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  &:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${cores.corPrincipal};
  content: '';
  opacity: 0.7;
}

@media (max-width: 768px) {
  height: auto;
  padding: 24px 0;
  font-size: 32px;
}
`
export const HeroDiv = styled.div`
  position: relative;
  color: #eee;
`

export const HeroTitle = styled.h2<Props>`
  font-family: Gloock, serif;
  font-size: ${(props) => props.fontSize ? props.fontSize + 'px' : '48px'};
`
