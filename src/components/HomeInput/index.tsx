import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { Plus } from "phosphor-react-native";
import { View } from "react-native";
import { useTheme } from "styled-components/native";
import * as S from "./styles";

export function HomeInput() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleNavigateToRegisterMeal() {
    navigation.navigate('register-meal')
  }

  return (
    <View>
      <S.Title>Refeições</S.Title>
      
      <Button
        title="Nova refeição"
        icon={<Plus color={theme.COLORS.WHITE} />}
        onPress={handleNavigateToRegisterMeal}
      />
    </View>
  )
}
