import { ItemMealList, Meal } from "@/types";
import { format, parse } from "date-fns";
import { getAllMeals } from "./get-all-meals";
import { setMeals } from "./helpers/setMeals";

export async function editMeal(title: string, meal: Meal) {
  title = format(parse(title, "dd/MM/yyyy", new Date()), "dd.MM.yy");

  const meals = await getAllMeals();

  const mealsFlat = meals
    .map(({ title, data }) => {
      return data.map((item) => {
        return { title, ...item };
      });
    })
    .flat();

  const findMeal = mealsFlat.find((item) => item.id === meal.id);
  
  if (!findMeal) return;

  const oldTitle = findMeal.title;

  const removeOldTitleMeals = meals.reduce((acc: ItemMealList[], item) => {
    if (item.title !== oldTitle) return [...acc, item];

    const data = item.data.filter((mealItem) => mealItem.id !== meal.id);

    if (data.length === 0) return [...acc];

    return [...acc, { ...item, data }];
  }, []);

  const findItemTitle = removeOldTitleMeals.find((item) => item.title === title);

  if (!findItemTitle) {
    const itemMeal = { title, data: [meal] };

    setMeals([...removeOldTitleMeals, itemMeal])
  } else {
    const data = [...findItemTitle.data, meal];

    const newMeals = removeOldTitleMeals.map((item) =>
      item.title === title ? { ...item, data } : item
    );

    setMeals(newMeals);
  }
}
