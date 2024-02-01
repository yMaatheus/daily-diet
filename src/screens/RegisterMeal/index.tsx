import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { Input } from '@/components/Input';
import { createMeal } from '@/storage/create-meal';
import { dateApplyMask, hourApplyMask } from '@/utils/masks';
import { onlyNumbersMask } from '@/utils/only-numbers';
import { useNavigation } from '@react-navigation/native';
import { parse } from 'date-fns';
import { Circle } from 'phosphor-react-native';
import { useId, useState } from 'react';
import { z } from 'zod';
import * as S from './styles';

export function RegisterMeal() {
  const navigation = useNavigation();
  const id = useId();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [description, setDescription] = useState("");
  const [isDiet, setDiet] = useState<boolean | null>(null);

  function applyMask(
    value: string,
    maxlength: number,
    mask: (value: string) => string,
    setValue: (value: string) => void
  ) {
    const result = z.string()
      .max(maxlength)
      .refine((value) => onlyNumbersMask(value), { message: "Only numbers error" })
      .transform((value) => mask(value))
      .safeParse(value);

    if (result.success) {
      setValue(result.data)
    }
  }

  async function handleRegister() {
    if (!name || !description || !date || !hour || isDiet === null) return;

    const meal = {
      id,
      name,
      date: parse(`${date} ${hour}`, 'dd/MM/yyyy HH:mm', new Date()),
      description,
      isDiet,
    };

    await createMeal(date, meal);
    navigation.navigate('feedback', { isDiet })
  }

  async function handleInDiet(value: boolean) {
    return isDiet === value ? setDiet(null) : setDiet(value);
  }

  return (
    <S.Screen>
      <Header title='Nova refeição' />

      <S.Content>
        <S.InputWrapper>
          <S.Label>Nome</S.Label>
          <Input onChangeText={setName} value={name} />
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>Descrição</S.Label>
          <Input
            multiline={true}
            numberOfLines={4}
            onChangeText={setDescription} 
            value={description}
          />
        </S.InputWrapper>

        <S.OptionsContainer>
          <S.SelectWrapper>
            <S.Label>Data</S.Label>
            <Input
              onChangeText={(value) => applyMask(value, 10, dateApplyMask, setDate)}
              value={date}
            />
          </S.SelectWrapper>

          <S.SelectWrapper>
            <S.Label>Hora</S.Label>
            <Input
              onChangeText={(value) => applyMask(value, 5, hourApplyMask, setHour)}
              value={hour}
              style={{}}
            />
          </S.SelectWrapper>
        </S.OptionsContainer>

        <S.InputWrapper>
          <S.Label>Está dentro da dieta?</S.Label>

          <S.OptionsContainer>
            <Button
              title='Sim'
              variant={isDiet ? 'diet' : 'light'}
              icon={<Circle size={8} color="green" weight="fill" />}
              style={{
                flex: 1,
              }}
              onPress={() => handleInDiet(true)}
            />

            <Button
              title='Não'
              variant={isDiet || isDiet === null ? 'light' : 'no-diet'}
              icon={<Circle size={8} color="red" weight="fill" />}
              style={{
                flex: 1
              }}
              onPress={() => handleInDiet(false)}
            />
          </S.OptionsContainer>
        </S.InputWrapper>

        <S.ButtonWrapper>
          <Button title='Cadastrar refeição' variant='dark' onPress={handleRegister} />
        </S.ButtonWrapper>
      </S.Content>
    </S.Screen>
  )
}