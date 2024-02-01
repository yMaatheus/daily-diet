import { ItemMealList } from "@/data";
import { getAllMeals } from "@/storage/get-all-meals";
import { HomeHeader } from "@components/HomeHeader";
import { HomeInput } from "@components/HomeInput";
import { HomeMealsList } from "@components/HomeMealsList";
import { HomeStatistics } from "@components/HomeStatistics";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import * as S from "./styles";

export function Home() {
  const [data, setData] = useState<ItemMealList[]>([]);

  useFocusEffect(useCallback(() => {
    fetchMealsData();
  }, []))

  async function fetchMealsData() {
    const meals = await getAllMeals();

    setData(meals)
  }

  return (
    <S.Screen>
      <S.HomeContainer>
        <HomeHeader />

        <HomeStatistics data={data} />

        <HomeInput />
      </S.HomeContainer>

      <HomeMealsList data={data} />
    </S.Screen>
  )
}
