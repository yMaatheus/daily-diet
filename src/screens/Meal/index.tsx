import { Details } from "@/components/Details";
import { Header } from "@/components/Header";
import { Meal } from "@/types";
import { useRoute } from "@react-navigation/native";
import * as S from './styles';

type RouteParams = {
  meal: Meal;
}

export function MealDetails() {
  const route = useRoute();
  const { meal } = route.params as RouteParams;

  return (
    <S.Screen isDiet={meal.isDiet}>
      <Header title='Refeição' />
      <S.Content>
        <Details meal={meal} />
      </S.Content>
    </S.Screen>
  )
}