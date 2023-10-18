import { Image } from "react-native";
import Logo from "@assets/logo.png";
import profile from "@assets/profile.png"
import * as S from "./styles";

export function HomeHeader() {
  return (
    <S.Container>
      <Image source={Logo} />
      <Image source={profile} />
    </S.Container>
  )
}
