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
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  padding: 32px 24px;
  gap: 18px;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;
