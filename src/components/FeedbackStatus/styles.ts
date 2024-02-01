import styled, { css } from "styled-components/native";

type Props = {
  isDiet: boolean;
};

export const Container = styled.View`
  gap: 8px;
`;

export const Title = styled.Text<Props>`
  text-align: center;

  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  ${({ theme, isDiet }) => css`
    color: ${isDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}
`;

export const Description = styled.Text`
  text-align: center;

  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};

  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Image = styled.Image`
  margin: 32px auto;
`;
