import { ItemMealList } from "@/data";
import { displayPercentage, isDietPercentage } from "@/utils/diet-utils";
import { getBestStreak } from "@/utils/streak-utils";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useMemo, useState } from "react";
import * as S from "./styles";

type Props = {
  data: ItemMealList[];
}

export function HomeStatistics({ data }: Props) {
  const navigation = useNavigation();
  const [isDiet, setDiet] = useState<boolean>(true)

  const meals = useMemo(() => data.flatMap((meal) => meal.data), [data]);

  const streak = useMemo(() => getBestStreak(meals), [meals]);
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

  function handleStatistics() {
    navigation.navigate('statistics', { data, isDiet, percentage, streak })
  }

  return (
    <S.Container
      isDiet={isDiet}
      onPress={handleStatistics}
    >
      <S.Title>{percentage}</S.Title>
      <S.Description>das refeições dentro da dieta</S.Description>
      <S.Icon isDiet={isDiet} />
    </S.Container>
  )
}
