export type ItemMealList = {
  title: string;
  data: Meal[];
}

export type Meal = {
  id: string;
  name: string;
  date: Date;
  description: string;
  isDiet: boolean;
};