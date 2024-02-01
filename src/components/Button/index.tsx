import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

export type ButtonType = 'dark' | 'light' | 'diet' | 'no-diet';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  icon?: JSX.Element;
  variant?: ButtonType;
};

export function Button({ title, icon, variant = 'dark', ...rest }: ButtonProps) {
  return (
    <S.Container variant={variant} {...rest}>
      {icon}
      <S.Label variant={variant} hasIcon={!!icon}>
        {title}
      </S.Label>
    </S.Container>
  );
}