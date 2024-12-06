/** @format */

import React, {useState} from "react"
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableOpacity
} from "react-native"
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {useNavigation} from "expo-router"
import {useAuth} from "../reusableComponents/authContext"

const LoginScreen = () => {
  const {isAuthenticated, setIsAuthenticated} = useAuth()
  const navigation = useNavigation<any>()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://192.168.2.39:3000/api/users/login",
        {
          email,
          password
        }
      )

      const {token} = response.data

      // Store token and navigate to Home
      await AsyncStorage.setItem("token", token)
      setIsAuthenticated(true)
    } catch (error: any) {
      console.log(error)
      Alert.alert(
        "Login Failed",
        error.response?.data?.error || "Password or Email false"
      )
    }
  }

  return (
    <View className='flex-1 items-center mt-20 bg-gray-100'>
      <Text className='text-4xl font-bold'>Login</Text>
      <TextInput
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        className='text-xl text-black bg-white rounded-2xl w-80 mt-10 shadow-lg p-4 '
        placeholderTextColor='#A8A8A8'
        selectionColor='black'
      />
      <TextInput
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className='text-xl text-black bg-white rounded-2xl w-80 mt-10 shadow-lg p-4 '
        placeholderTextColor='#A8A8A8'
        selectionColor='black'
      />
      <View className='flex flex-row gap-4 mt-8'>
        <TouchableOpacity
          className='flex rounded-full justify-center items-center px-6 py-4 bg-black'
          onPress={handleLogin}>
          <Text className='text-white text-xl font-bold'>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className='flex rounded-full justify-center items-center px-6 py-4 bg-white'
          onPress={() => navigation.navigate("Register")}>
          <Text className='text-black text-xl font-bold'>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen
