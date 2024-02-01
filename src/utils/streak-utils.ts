import { Meal } from "@/types/meal";

export function getBestStreak(meals: Meal[]) {
  let bestStreak = 0;

  meals.reduce((acc, meal) => {
    if (meal.isDiet) {
      acc += 1;
      if (acc > bestStreak) {
        bestStreak = acc;
      }
      return acc;
    }

    return 0;
  }, bestStreak);

  return bestStreak.toString();
}
