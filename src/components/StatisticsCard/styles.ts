import styled, { css } from "styled-components/native";

type Props = {
  backgroundColor: string;
};

export const Container = styled.View<Props>`
  ${({ backgroundColor }) => css`
    background-color: ${backgroundColor};
  `}

  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 8px;
  padding: 16px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  text-align: center;

  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Description = styled.Text`
  text-align: center;

  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
