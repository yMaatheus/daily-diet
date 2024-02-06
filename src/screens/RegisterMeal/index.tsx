import { Form } from '@/components/Form';
import { Header } from '@/components/Header';
import { createMeal } from '@/storage/create-meal';
import { Meal } from '@/types';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';

export function RegisterMeal() {
  const navigation = useNavigation();
  
  async function submitRegister(date: string, meal: Meal) {
    await createMeal(date, meal);
    navigation.navigate('feedback', { isDiet: meal.isDiet })
  }

  return (
    <S.Screen>
      <Header title='Nova refeição' />

      <S.Content>
        <Form submitBtnTitle='Cadastrar refeição' submit={submitRegister} />
      </S.Content>
    </S.Screen>
  )
}