import { ArrowLeft } from "phosphor-react-native";
import styled from "styled-components/native";

type Props = {
  isDiet: boolean;
};

export const Header = styled.View`
  position: relative;
  width: 100%;
  height: 168px;

  justify-content: center;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 56px;
  left: 24px;
`;

export const BackIcon = styled(ArrowLeft).attrs<Props>(({ theme, isDiet }) => ({
  size: 24,
  color: isDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))<Props>``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
