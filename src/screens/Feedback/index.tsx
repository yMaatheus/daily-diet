import { Button } from "@/components/Button";
import { FeedbackStatus } from "@/components/FeedbackStatus";
import FeedbackDiet from "@assets/feedback-diet.png";
import FeedbackNoDiet from "@assets/feedback-no-diet.png";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Text } from "react-native";
import * as S from "./styles";

type RouteParams = {
  isDiet: boolean;
}

export function Feedback() {
  const navigation = useNavigation();
  const route = useRoute();
  const { isDiet } = route.params as RouteParams;

  function handleGoHome() {
    navigation.navigate('home')
  }

  return (
    <S.Screen>
      {isDiet ? (
        <FeedbackStatus
          title="Continue assim!"
          description={
            <>
              <Text>Você continua</Text>
              <Text style={{ fontWeight: 'bold' }}> dentro da dieta. </Text>
              <Text>Muito bem!</Text>
            </>
          }
          imageSource={FeedbackDiet}
          isDiet={isDiet}
        />
      ) : (
        <FeedbackStatus
          title="Que pena!"
          description={
            <>
              <Text>Você</Text>
              <Text style={{ fontWeight: 'bold' }}> saiu da dieta </Text>
              <Text>dessa vez, mas continue se esforçando e não desista!</Text>
            </>
          }
          imageSource={FeedbackNoDiet}
          isDiet={isDiet}
        />
      )}

      <Button title="Ir para a página inicial" onPress={handleGoHome} style={{ width: '60%' }} />
    </S.Screen>
  );
}
