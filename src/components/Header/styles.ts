import { ArrowLeft } from "phosphor-react-native";
import { Props } from "../HomeMealsList/styles";
import styled from "styled-components/native";

export const Header = styled.View`
  position: relative;
  width: 100%;
  height: 120px;

  justify-content: center;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 56px;
  left: 24px;
`;

export const BackIcon = styled(ArrowLeft).attrs<Props>(() => ({
  size: 24,
}))<Props>``;

export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;