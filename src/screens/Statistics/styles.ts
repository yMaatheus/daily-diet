import styled from "styled-components/native";

type Props = {
  isDiet: boolean;
};

export const Screen = styled.SafeAreaView<Props>`
  flex: 1;
  background-color: ${({ theme, isDiet }) =>
    isDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Content = styled.View`
  flex: 1;

  padding: 33px 24px;
  flex-direction: column;
  align-items: center;

  gap: 12px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const ContentTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  margin-bottom: 10px;
`;

export const ContentDietCards = styled.View`
  flex-direction: row;

  gap: 12px;
`;
