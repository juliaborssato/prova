import * as S from "./styles"


export function Header() {
  return (
    <S.Header>
        <ul>
          <h1> Onde a barriga controla o coração</h1>
          <li>
            <a href="">Restaurante</a>
          </li>

          <li>
            <a href="/">Tópicos</a>
          </li>
          <li>
            <a href="/list">Descrição</a>
          </li>
        </ul>
       </S.Header>
  )
}