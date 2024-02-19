import { ItemMealList } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { compareDesc } from "date-fns";
import { MEALS_COLLECTION } from "../storageConfig";

export async function setMeals(meals: ItemMealList[]) {
  const array = meals.sort((a, b) => {
    let dateA = new Date(a.data[0].date);
    let dateB = new Date(b.data[0].date);

    return compareDesc(dateA, dateB);
  });

  const storage = JSON.stringify(array);
  await AsyncStorage.setItem(MEALS_COLLECTION, storage);
}
