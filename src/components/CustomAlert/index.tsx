import { ReactNode } from 'react';
import * as S from './styles';

type Props = {
  title: string;
  children: ReactNode;
};

export function CustomAlert({ title, children }: Props) {
  return (
    <S.Overlay>
      <S.Container>
        <S.Title>{title}</S.Title>
        {children}
      </S.Container>
    </S.Overlay>
  );
}