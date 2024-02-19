import { Meal } from "@/types";
import { format, parse } from "date-fns";
import { getAllMeals } from "./get-all-meals";
import { setMeals } from "./helpers/setMeals";

export async function createMeal(title: string, meal: Meal) {
  title = format(parse(title, "dd/MM/yyyy", new Date()), "dd.MM.yy");
  
  const meals = await getAllMeals();

  const findItemTitle = meals.find((item) => item.title === title);

  if (!findItemTitle) {
    const itemMeal = { title, data: [meal] };

    setMeals([...meals, itemMeal])
    return;
  }

  const data = [...findItemTitle.data, meal];

  const newMeals = meals.map((item) =>
    item.title === title ? { ...item, data } : item
  );

  setMeals(newMeals);
}
