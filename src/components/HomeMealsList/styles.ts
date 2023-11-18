import { Circle } from "phosphor-react-native";
import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

export type Props = {
  isActive?: boolean;
};

export type CircleProps = {
  theme: DefaultTheme;
  isDiet: boolean;
}

export const HeaderMealList = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;

  margin-top: 26px;
`;

export const ItemContainer = styled.View`
  padding: 14px 16px 14px 12px;
  margin-top: 8px;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  
  flex-direction: row;
  justify-content: space-between;

  gap: 12px;
`;

export const ItemInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Separator = styled.View`
  height: 14px;
  width: 2px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};

  margin: 0 12px;
`;

export const Time = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const Icon = styled(Circle).attrs(({ theme, isDiet }: CircleProps) => ({
  size: 14,
  color: isDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID,
  weight: "fill",
}))<CircleProps>`
  align-self: center;
`;
