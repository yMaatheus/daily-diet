import { StatisticsHeader } from "@components/StatisticsHeader";
import * as S from "./styles";
import { StatisticsCard } from "@components/StatisticsCard";
import { useTheme } from "styled-components/native";

export function Statistics() {
  const theme = useTheme();
  return (
    <S.Screen>
      <StatisticsHeader />

      <S.Content>
        <S.ContentTitle>Estatísticas gerais</S.ContentTitle>

        <StatisticsCard
          title="22"
          description="melhor sequência de pratos dentro da dieta"
          backgroundColor={theme.COLORS.GRAY_200}
          style={{
            width: '100%'
          }}
        />

        <StatisticsCard
          title="109"
          description="refeições registradas"
          backgroundColor={theme.COLORS.GRAY_200}
          style={{
            width: '100%'
          }}
        />

        <S.ContentDietCards>
          <StatisticsCard
            title="99"
            description="refeições dentro da dieta"
            backgroundColor={theme.COLORS.GREEN_LIGHT}
          />

          <StatisticsCard
            title="10"
            description="refeições fora da dieta"
            backgroundColor={theme.COLORS.RED_LIGHT}
          />
        </S.ContentDietCards>
      </S.Content>
    </S.Screen>
  )
}
