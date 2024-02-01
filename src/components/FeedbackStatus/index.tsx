import { ImageSourcePropType } from "react-native";
import * as S from "./styles";

type Props = {
  title: string;
  description: JSX.Element;
  imageSource: ImageSourcePropType;
  isDiet: boolean;
}

export function FeedbackStatus({ title, description, imageSource, isDiet }: Props) {
  return (
    <S.Container>
      <S.Title isDiet={isDiet}>{title}</S.Title>
      <S.Description>{description}</S.Description>

      <S.Image source={imageSource} />
    </S.Container>
  )
}