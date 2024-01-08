import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TextInput)`
  min-height: 56px;

  padding: 16px;

  border-radius: 6px;
  border-width: 1px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;

    border-color: ${theme.COLORS.GRAY_300};
  `};
`;
