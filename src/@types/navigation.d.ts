export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: {
        percentage: string;
        data: ItemMealList[];
        isDiet: boolean;
      };
    }
  }
}