import { Meal } from "@/types";
import { format } from "date-fns";
import { PencilSimpleLine, Trash } from "phosphor-react-native";
import { Button } from "../Button";
import * as S from './styles';

export function Details({ meal }: { meal: Meal }) {

  async function handleEditMeal() {}

  async function handleDelete() {}
  
  return (
    <S.ContainerWrapper>
      <S.Container>
        <S.Title>{meal.name}</S.Title>
        <S.Description>{meal.description}</S.Description>
      </S.Container>

      <S.Container>
        <S.DateTitle>Data e hora</S.DateTitle>
        <S.DateDescription>{format(meal.date, "MM/dd/yyyy 'às' HH:mm")}</S.DateDescription>
      </S.Container>

      <S.Container>
        <S.Diet>
          <S.Icon variant={meal.isDiet ? 'diet' : 'no-diet'} />
          {meal.isDiet ? <S.DietText>dentro da dieta</S.DietText> : <S.DietText>fora da dieta</S.DietText>}
        </S.Diet>
      </S.Container>

      <S.ButtonsWrapper>
        <Button
          icon={<PencilSimpleLine color="white" />}
          title='Editar refeição'
          variant='dark'
          onPress={handleEditMeal}
        />

        <Button
          icon={<Trash />}
          title='Excluir refeição'
          variant='light'
          style={{
            backgroundColor: 'transparent',
            borderWidth: 1.5,
            borderColor: 'black'
          }}
          onPress={handleDelete}
        />
      </S.ButtonsWrapper>
    </S.ContainerWrapper>
  )
}