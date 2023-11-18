import { ArrowUpRight } from "phosphor-react-native";
import styled from "styled-components/native";

type Props = {
  isDiet: boolean;
};

export const Container = styled.TouchableOpacity<Props>`
  padding: 20px 16px;
  background-color: ${({ theme, isDiet }) =>
    isDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, isDiet }) => ({
  size: 24,
  color: isDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))<Props>`
  position: absolute;
  top: 8px;
  right: 8px;
`;
