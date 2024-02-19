export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: {
        percentage: string;
        data: ItemMealList[];
        isDiet: boolean;
        streak: string;
      };
      "register-meal": undefined;
      feedback: {
        isDiet: boolean;
      };
      meal: {
        meal: Meal;
      };
    }
  }
}
