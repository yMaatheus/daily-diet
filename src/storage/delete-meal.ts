import { ItemMealList } from "@/types";
import { getAllMeals } from "./get-all-meals";
import { setMeals } from "./helpers/setMeals";

export async function deleteMeal(title: string, id: string) {
  const meals = await getAllMeals();

  const reduce = meals.reduce((acc: ItemMealList[], item) => {
    if (item.title !== title) return [...acc, item];
    
    const data = item.data.filter((mealItem) => mealItem.id !== id);
    if (data.length === 0) return acc;

    return [...acc, { ...item, data }];
  }, [])

  setMeals(reduce);
}