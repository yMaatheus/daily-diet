import { EditMeal } from '@/screens/EditMeal'
import { Feedback } from '@/screens/Feedback'
import { MealDetails } from '@/screens/Meal'
import { RegisterMeal } from '@/screens/RegisterMeal'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '@screens/Home'
import { Statistics } from '@screens/Statistics'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='home'
    >
      <Screen
        name='home'
        component={Home}
      />

      <Screen
        name='statistics'
        component={Statistics}
      />

      <Screen
        name='register-meal'
        component={RegisterMeal}
      />

      <Screen
        name='feedback'
        component={Feedback}
      />

      <Screen
        name='meal'
        component={MealDetails}
      />

      <Screen
        name='edit-meal'
        component={EditMeal}
      />
    </Navigator>
  )
}