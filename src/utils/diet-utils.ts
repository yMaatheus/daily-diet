export const isDietPercentage = (
  totalMealsInDiet: number,
  totalMeals: number
): boolean => {
  if (totalMealsInDiet < 0 && totalMeals < 0) {
    return false;
  }

  const percentage = (totalMeals / totalMealsInDiet) * 100;
  return percentage >= 50;
};

export const displayPercentage = (
  totalMealsInDiet: number,
  totalMeals: number
): string => {
  if (totalMealsInDiet < 0 && totalMeals < 0) {
    return "0%";
  }

  const percentage = (totalMeals / totalMealsInDiet) * 100;
  return percentage.toFixed(2) + "%";
};
