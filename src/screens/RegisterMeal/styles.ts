import styled from "styled-components/native";

export const Screen = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  padding: 32px 24px;
  gap: 18px;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const InputWrapper = styled.View`
  gap: 6px;
`;

export const OptionsContainer = styled.View`
  flex-direction: row;
  gap: 18px;
`;

export const SelectWrapper = styled.View`
  flex: 1;
  gap: 6px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const ButtonWrapper = styled.View`
  margin: 80px 0;
`;
