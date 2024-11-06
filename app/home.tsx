/** @format */

import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import HomeStack from "./_layout"

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  )
}
