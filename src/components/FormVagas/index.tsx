import { FormEvent, useState } from 'react'
import { FormVaga, Campo, BtnPesquisa } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

export type PropsBotao = {
  fontSize?: number
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormVaga onSubmit={aoEnviarForm}>
      <Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BtnPesquisa type="submit">
        Pesquisar
      </BtnPesquisa>
    </FormVaga>
  )
}
export default FormVagas
