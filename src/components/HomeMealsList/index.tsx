import { SectionList } from "react-native";
import * as S from "./styles";
import { formatDateToHours } from "@utils/time-utils";
import { ItemMealList } from "../../data";

export function HomeMealsList({ data }: { data: ItemMealList[] } ) {
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
