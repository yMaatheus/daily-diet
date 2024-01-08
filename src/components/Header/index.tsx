import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";

type Props = {
  title: string;
}

export function Header({ title }: Props) {
  const navigation = useNavigation();

  function handleGoHome() {
    navigation.navigate('home')
  }

  return (
    <S.Header>
      <S.BackButton onPress={handleGoHome}>
        <S.BackIcon />
      </S.BackButton>

      <S.HeaderTitle>
        {title}
      </S.HeaderTitle>
    </S.Header>
  )
}