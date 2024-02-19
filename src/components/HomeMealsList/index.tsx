import { ItemMealList, Meal } from "@/types";
import { useNavigation } from "@react-navigation/native";
import { format } from "date-fns";
import { SectionList } from "react-native";
import * as S from "./styles";

export function HomeMealsList({ data }: { data: ItemMealList[] }) {
  const navigation = useNavigation();

  async function handleMealDetails(item: Meal) {
    navigation.navigate('meal', { meal: item })
  }

  return (
    <SectionList
      sections={data}
      keyExtractor={(item, index) => item.id + index}
      renderItem={({ item }) => (
        <S.ItemContainer onPress={() => handleMealDetails(item)}>
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
