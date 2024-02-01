import styled, { css } from "styled-components/native";
import { ButtonType } from ".";

type Props = {
  hasIcon?: boolean;
  variant: ButtonType;
};

export const Container = styled.TouchableOpacity<Props>`
  ${({ theme, variant }) => css`
    background-color: ${{
      dark: theme.COLORS.GRAY_600,
      light: theme.COLORS.GRAY_300,
      diet: theme.COLORS.GREEN_LIGHT,
      "no-diet": theme.COLORS.RED_LIGHT,
    }[variant]};

    border: 1.5px solid transparent;

    ${(variant === "diet" || variant === "no-diet") &&
    css`
      border: 1.5px solid
        ${variant === "diet" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    `}
  `}

  padding: 16px 24px;
  border-radius: 6px;
  max-height: 60px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Label = styled.Text<Props>`
  ${({ theme, variant, hasIcon }) => css`
    color: ${variant === "dark" ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;

    margin-left: ${hasIcon ? "12px" : 0};
  `}
`;
