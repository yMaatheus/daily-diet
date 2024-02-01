import { ImageSourcePropType } from "react-native";
import * as S from "./styles";

type Props = {
  title: string;
  description: JSX.Element;
  imageSource: ImageSourcePropType
}

export function FeedbackStatus({ title, description, imageSource }: Props) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>

      <S.Image source={imageSource} />
    </S.Container>
  )
}