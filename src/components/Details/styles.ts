import { View } from "react-native";
import styled from "styled-components/native";

type Props = {
  variant: "diet" | "no-diet";
};

export const ContainerWrapper = styled.View`
  margin-top: 18px;
`;

export const Container = styled.View`
  margin-bottom: 18px;
  gap: 6px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const DateTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const DateDescription = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const Diet = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  gap: 6px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  width: 144px;
  height: 34px;
  border-radius: 1000px;
`;

export const Icon = styled(View)<Props>`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  margin-top: 4px;

  background-color: ${({ theme, variant }) =>
    variant === "diet"
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
`;

export const DietText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const ButtonsWrapper = styled.View`
  margin: 260px 0;
  gap: 8px;
`

export const OptionsModalContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 12px;
`