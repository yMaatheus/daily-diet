import { useMemo } from "react";
import { StatisticsHeader } from "@components/StatisticsHeader";
import { StatisticsCard } from "@components/StatisticsCard";
import { useTheme } from "styled-components/native";
import { useRoute } from "@react-navigation/native";
import { ItemMealList } from "@/data";
import * as S from "./styles";

type RouteParams = {
  percentage: string;
  data: ItemMealList[];
  isDiet: boolean;
}

export function Statistics() {
  const theme = useTheme();
  const route = useRoute();
  const { percentage, data, isDiet } = route.params as RouteParams;

  const meals = useMemo(() => data.flatMap((meal) => meal.data), [data]);

  const totalMeals = useMemo(() => meals.length, [meals]);
  const totalMealsInDiet = useMemo(() => meals.filter((meal) => meal.isDiet).length, [meals]);

  return (
    <S.Screen isDiet={isDiet}>
      <StatisticsHeader
        percentage={percentage}
        isDiet={isDiet}
      />

      <S.Content>
        <S.ContentTitle>Estatísticas gerais</S.ContentTitle>

        <StatisticsCard
          title="0"
          description="melhor sequência de pratos dentro da dieta"
          backgroundColor={theme.COLORS.GRAY_200}
          style={{
            width: '100%'
          }}
        />

        <StatisticsCard
          title={`${totalMeals}`}
          description="refeições registradas"
          backgroundColor={theme.COLORS.GRAY_200}
          style={{
            width: '100%'
          }}
        />

        <S.ContentDietCards>
          <StatisticsCard
            title={`${totalMealsInDiet}`}
            description="refeições dentro da dieta"
            backgroundColor={theme.COLORS.GREEN_LIGHT}
          />

          <StatisticsCard
            title={`${totalMeals - totalMealsInDiet}`}
            description="refeições fora da dieta"
            backgroundColor={theme.COLORS.RED_LIGHT}
          />
        </S.ContentDietCards>
      </S.Content>
    </S.Screen>
  )
}
