/** @format */

import React, {useRef, useEffect} from "react"
import {TouchableWithoutFeedback, Animated} from "react-native"

interface CustomSwitchProps {
  value: boolean
  onValueChange: () => void
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({value, onValueChange}) => {
  const animation = useRef(new Animated.Value(value ? 1 : 0)).current

  // Synchronize animation with the value prop
  useEffect(() => {
    Animated.timing(animation, {
      toValue: value ? 1 : 0,
      duration: 300,
      useNativeDriver: false
    }).start()
  }, [value]) // Re-run animation when the value prop changes

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 22]
  })

  const backgroundColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["#d3d3d3", "#000000"]
  })

  const handleToggle = () => {
    onValueChange() // Trigger the parent-provided handler
  }

  return (
    <TouchableWithoutFeedback onPress={handleToggle}>
      <Animated.View
        style={{
          width: 50,
          height: 26,
          borderRadius: 13,
          backgroundColor,
          justifyContent: "center",
          paddingVertical: 4,
          paddingHorizontal: 2
        }}>
        <Animated.View
          style={{
            width: 20,
            height: 20,
            borderRadius: 10,
            backgroundColor: "#ffffff",
            transform: [{translateX}]
          }}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

export default CustomSwitch
