import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";

export function HomeStatistics() {
  const navigation = useNavigation();

  function handleStatistics() {
    navigation.navigate('statistics')
  }
  
  return (
    <S.Container onPress={handleStatistics}>
      <S.Title>90,86%</S.Title>
      <S.Description>das refeições dentro da dieta</S.Description>
      <S.Icon />
    </S.Container>
  )
}
