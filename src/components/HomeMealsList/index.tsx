import { SectionList } from "react-native";
import * as S from "./styles";
import { formatDateToHours } from "@utils/time-utils";
import { ItemMealList, MEALS_DATA } from "../../data";
import { useCallback, useEffect, useState } from "react";

export function HomeMealsList() {
  const [data, setData] = useState<ItemMealList[]>([]);

  useEffect(useCallback(() => {
    setData(MEALS_DATA);
  }, []))
  
  return (
    <SectionList
      sections={data}
      keyExtractor={(item, index) => item.id + index}
      renderItem={({ item }) => (
        <S.ItemContainer>
          <S.ItemInfo>
            <S.Time>{formatDateToHours(item.date)}</S.Time>
            <S.Separator />
            <S.Title>{item.name}</S.Title>
          </S.ItemInfo>
          <S.Icon isDiet={item.isDiet} />
        </S.ItemContainer>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <S.HeaderMealList>{title}</S.HeaderMealList>
      )}
      showsVerticalScrollIndicator={false}
      fadingEdgeLength={200}
    />
  )
}
