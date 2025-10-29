import { HeroForm, HeroDiv, HeroTitle } from './styles'

export type Props = {
  fontSize?: number
}

const Hero = () => (
  <HeroForm>
    <HeroDiv className="container">
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </HeroDiv>
  </HeroForm>
)

export default Hero
