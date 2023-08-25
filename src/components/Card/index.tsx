import * as S from "./styles";
export interface ICard {
  data: string
  titulo: string
  mensagem: string
}
export const Card = ({ }: ICard) => {
  return (
    <S.Aside>
      <div>
    <h3>
        Receita com História: "Torta de Maçã da Vovó: Esta receita tradicional tem sido transmitida de geração em
geração. A avó deu o toque especial ao adicionar uma pitada de canela extra à massa. Cada mordida é uma
viagem no tempo para a cozinha da infância." 
      </h3>
      </div>
     
   </S.Aside>
   )
}

