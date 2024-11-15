/** @format */

import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import ExpensesScreen from "../screens/ExpensesScreen"
import VacationDetailScreen from "../screens/VacationDetailScreen"

const Stack = createStackNavigator()

export default function ExpensesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='ExpensesHome'
        component={ExpensesScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='VacationDetail'
        component={VacationDetailScreen}
        options={{title: "Vacation Details"}}
      />
    </Stack.Navigator>
  )
}
