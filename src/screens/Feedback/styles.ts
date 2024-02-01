import styled from "styled-components/native";

export const Screen = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  padding: 0 32px;
`;