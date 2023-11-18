import { HomeHeader } from "@components/HomeHeader";
import { HomeStatistics } from "@components/HomeStatistics";
import { HomeInput } from "@components/HomeInput";
import { HomeMealsList } from "@components/HomeMealsList";
import * as S from "./styles";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ItemMealList, MEALS_DATA } from "@/data";
import { isDietPercentage, displayPercentage } from "@/utils/diet-utils";

export function Home() {
  const [data, setData] = useState<ItemMealList[]>([]);
  const [isDiet, setDiet] = useState<boolean>(true)

  const meals = useMemo(() => data.flatMap((meal) => meal.data), [data]);

  const totalMeals = useMemo(() => meals.length, [meals]);
  const totalMealsInDiet = useMemo(() => meals.filter((meal) => meal.isDiet).length, [meals]);

  const percentage = useMemo(() => displayPercentage(totalMeals, totalMealsInDiet), [totalMeals, totalMealsInDiet]);

  useEffect(() => {
    if (isDietPercentage(totalMeals, totalMealsInDiet)) {
      setDiet(true);
      return;
    }
    setDiet(false)
  }, [data])

  useEffect(useCallback(() => {
    setData(MEALS_DATA);
  }, []))

  return (
    <S.Screen>

      <S.HomeContainer>
        <HomeHeader />

        <HomeStatistics data={data} isDiet={isDiet} percentage={percentage} />

        <HomeInput />
      </S.HomeContainer>

      <HomeMealsList data={data} />
    </S.Screen>
  )
}
