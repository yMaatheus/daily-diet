import { Meal } from '@/types';
import { dateApplyMask, hourApplyMask } from '@/utils/masks';
import { onlyNumbersMask } from '@/utils/only-numbers';
import { parse } from 'date-fns';
import { Circle } from 'phosphor-react-native';
import { useState } from 'react';
import { z } from 'zod';
import { Button } from '../Button';
import { Input } from '../Input';
import * as S from './styles';

type DataProps = {
  name?: string;
  date?: string;
  hour?: string;
  description?: string;
  isDiet?: boolean;
}

type Props = {
  id: string;
  submitBtnTitle: string;
  submit: (date: string, meal: Meal) => Promise<void>;
  data?: DataProps;
}

export function Form({ id, submitBtnTitle, submit, data }: Props) {
  const [name, setName] = useState(data?.name || "");
  const [date, setDate] = useState(data?.date || "");
  const [hour, setHour] = useState(data?.hour || "");
  const [description, setDescription] = useState(data?.description || "");
  const [isDiet, setDiet] = useState<boolean | null>(data?.isDiet == null ? null: data?.isDiet);

  function applyMask(
    value: string,
    maxlength: number,
    mask: (value: string) => string,
    setValue: (value: string) => void
  ) {
    const result = z.string()
      .max(maxlength)
      .refine((value) => onlyNumbersMask(value), {
        message: "Only numbers error"
      })
      .transform((value) => mask(value))
      .safeParse(value);

    if (result.success) {
      setValue(result.data)
    }
  }

  async function handleSubmit() {
    if (!name || !description || !date || !hour || isDiet === null) return;

    const meal = {
      id,
      name,
      date: parse(`${date} ${hour}`, 'dd/MM/yyyy HH:mm', new Date()),
      description,
      isDiet,
    };

    await submit(date, meal);
  }

  async function handleInDiet(value: boolean) {
    return isDiet === value ? setDiet(null) : setDiet(value);
  }

  return (
    <>
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
        <Button
          title={submitBtnTitle}
          variant='dark'
          onPress={handleSubmit} />
      </S.ButtonWrapper>
    </>
  )
}