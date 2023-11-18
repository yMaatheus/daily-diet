import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";
import { ArrowLeft } from "phosphor-react-native";

export function StatisticsHeader() {
  const navigation = useNavigation();

  function handleGoHome() {
    navigation.navigate('home')
  }

  return (
    <S.Header>
      <S.BackButton onPress={handleGoHome}>
        <S.BackIcon />
      </S.BackButton>

      <S.Title>90,86%</S.Title>
      <S.SubTitle>das refeições dentro da dieta</S.SubTitle>
    </S.Header>
  )
}
