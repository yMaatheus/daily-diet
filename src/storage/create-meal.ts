import { ItemMealList } from "@/data";
import { Meal } from "@/types/meal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { compareDesc, format, parse } from "date-fns";
import { getAllMeals } from "./get-all-meals";
import { MEALS_COLLECTION } from "./storageConfig";

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

async function setMeals(meals: ItemMealList[]) {
  const array = meals.sort((a, b) => {
    let dateA = new Date(a.data[0].date);
    let dateB = new Date(b.data[0].date);

    return compareDesc(dateA, dateB);
  });

  const storage = JSON.stringify(array);
  await AsyncStorage.setItem(MEALS_COLLECTION, storage);
}
