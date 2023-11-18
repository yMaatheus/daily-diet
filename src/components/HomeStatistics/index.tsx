import { useNavigation } from "@react-navigation/native";
import { ItemMealList } from "@/data";
import * as S from "./styles";

type Props = {
  percentage: string;
  data: ItemMealList[];
  isDiet: boolean;
}

export function HomeStatistics({ percentage, data, isDiet }: Props) {
  const navigation = useNavigation();

  function handleStatistics() {
    navigation.navigate('statistics', { data, isDiet, percentage })
  }

  return (
    <S.Container
      isDiet={isDiet}
      onPress={handleStatistics}
    >
      <S.Title>{percentage}</S.Title>
      <S.Description>das refeições dentro da dieta</S.Description>
      <S.Icon isDiet={isDiet} />
    </S.Container>
  )
}
