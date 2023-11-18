import { Plus } from "phosphor-react-native";
import { Button } from "@components/Button";
import { useTheme } from "styled-components/native";
import * as S from "./styles";
import { View } from "react-native";

export function HomeInput() {
  const theme = useTheme();
  return (
    <View>
      <S.Title>Refeições</S.Title>
      
      <Button
        title="Nova refeição"
        icon={<Plus color={theme.COLORS.WHITE} />}
      />
    </View>
  )
}
