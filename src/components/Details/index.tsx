import { deleteMeal } from "@/storage/delete-meal";
import { Meal } from "@/types";
import { useNavigation } from "@react-navigation/native";
import { format } from "date-fns";
import { PencilSimpleLine, Trash } from "phosphor-react-native";
import React, { useState } from "react";
import { Modal } from "react-native";
import { Button } from "../Button";
import { CustomAlert } from "../CustomAlert";
import * as S from './styles';

export function Details({ meal }: { meal: Meal }) {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  async function handleEditMeal() {
    navigation.navigate('edit-meal', { meal });
  }

  async function handleDelete() {
    await deleteMeal(format(meal.date, "dd.MM.yy"), meal.id)
    setModalVisible(false);
    navigation.goBack();
  }

  return (
    <S.ContainerWrapper>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        statusBarTranslucent
        onRequestClose={() => setModalVisible(false)}
      >
        <CustomAlert title='Deseja realmente excluir o registro da refeição?'>
          <S.OptionsModalContainer>
            <Button
              title='Cancelar'
              variant='light'
              onPress={() => setModalVisible(false)}
            />
            <Button
              title='Sim, excluir'
              onPress={handleDelete}
            />
          </S.OptionsModalContainer>
        </CustomAlert>
      </Modal>
      <S.Container>
        <S.Title>{meal.name}</S.Title>
        <S.Description>{meal.description}</S.Description>
      </S.Container>

      <S.Container>
        <S.DateTitle>Data e hora</S.DateTitle>
        <S.DateDescription>
          {format(meal.date, "dd/MM/yyyy 'às' HH:mm")}
        </S.DateDescription>
      </S.Container>

      <S.Container>
        <S.Diet>
          <S.Icon variant={meal.isDiet ? 'diet' : 'no-diet'} />
          {meal.isDiet
            ? <S.DietText>dentro da dieta</S.DietText>
            : <S.DietText>fora da dieta</S.DietText>}
        </S.Diet>
      </S.Container>

      <S.ButtonsWrapper>
        <Button
          icon={<PencilSimpleLine color="white" />}
          title='Editar refeição'
          variant='dark'
          onPress={handleEditMeal}
        />

        <Button
          icon={<Trash />}
          title='Excluir refeição'
          variant='light'
          style={{
            backgroundColor: 'transparent',
            borderWidth: 1.5,
            borderColor: 'black'
          }}
          onPress={() => setModalVisible(true)}
        />
      </S.ButtonsWrapper>
    </S.ContainerWrapper>
  )
}