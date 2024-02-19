import styled, { css } from 'styled-components/native';

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.25);
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  width: 327px;
  height: 192px;
  padding: 40px 24px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG};
    color: ${theme.COLORS.GRAY_600};
  `}
  text-align: center;
  margin-bottom: 32px;
`;