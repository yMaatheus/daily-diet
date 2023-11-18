import styled from "styled-components/native";

export const Screen = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  padding: 66px 24px 0 24px;
`;

export const HomeContainer = styled.View`
  gap: 32px;
`;
