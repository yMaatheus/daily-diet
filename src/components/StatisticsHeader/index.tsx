import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";

type Props = {
  percentage: string;
  isDiet: boolean;
}

export function StatisticsHeader({ percentage, isDiet } : Props) {
  const navigation = useNavigation();

  function handleGoHome() {
    navigation.navigate('home')
  }

  return (
    <S.Header>
      <S.BackButton onPress={handleGoHome}>
        <S.BackIcon isDiet={isDiet} />
      </S.BackButton>

      <S.Title>{percentage}</S.Title>
      <S.SubTitle>das refeições dentro da dieta</S.SubTitle>
    </S.Header>
  )
}
