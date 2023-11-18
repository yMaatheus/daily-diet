import React from "react";
import { HomeHeader } from "@components/HomeHeader";
import { HomeStatistics } from "@components/HomeStatistics";
import { HomeInput } from "@components/HomeInput";
import { HomeMealsList } from "@components/HomeMealsList";
import * as S from "./styles";

export function Home() {
  return (
    <S.Screen>

      <S.HomeContainer>
        <HomeHeader />

        <HomeStatistics />
        
        <HomeInput />
      </S.HomeContainer>

      <HomeMealsList />
    </S.Screen>
  )
}
