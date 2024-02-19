import { Form } from '@/components/Form';
import { Header } from '@/components/Header';
import { editMeal } from '@/storage/edit-meal';
import { Meal } from '@/types';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';
import * as S from './styles';

type RouteParams = {
  meal: Meal;
}

export function EditMeal() {
  const route = useRoute();
  const { meal } = route.params as RouteParams;
  const navigation = useNavigation();

  async function submit(date: string, meal: Meal) {
    await editMeal(date, meal);

    navigation.navigate('meal', {
      meal: {
        ...meal,
        date: meal.date.toJSON()
      }
    })
  }

  return (
    <S.Screen>
      <Header title='Editar refeição' />

      <S.Content>
        <Form
          id={meal.id}
          data={
            {
              description: meal.description,
              name: meal.name,
              isDiet: meal.isDiet,
              date: format(meal.date, "dd/MM/yyyy"),
              hour: format(meal.date, "HH:mm")
            }
          }
          submitBtnTitle='Salvar alterações'
          submit={submit}
        />
      </S.Content>
    </S.Screen>
  )
}