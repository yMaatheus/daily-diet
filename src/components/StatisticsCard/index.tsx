import { ViewProps } from "react-native";
import * as S from "./styles";

type CardProps = ViewProps & {
  title: string;
  description: string;
  backgroundColor: string;
};

export function StatisticsCard({ title, description, backgroundColor, ...rest }: CardProps) {
  return (
    <S.Container backgroundColor={backgroundColor} {...rest}>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Container>
  )
}
