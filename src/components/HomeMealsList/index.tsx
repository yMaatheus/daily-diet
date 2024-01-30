import { format } from "date-fns";
import { SectionList } from "react-native";
import { ItemMealList } from "../../data";
import * as S from "./styles";

export function HomeMealsList({ data }: { data: ItemMealList[] }) {
  return (
    <SectionList
      sections={data}
      keyExtractor={(item, index) => item.id + index}
      renderItem={({ item }) => (
        <S.ItemContainer>
          <S.ItemInfo>
            <S.Time>{format(item.date, "HH:mm")}</S.Time>
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
