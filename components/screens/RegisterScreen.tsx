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
import {useNavigation} from "@react-navigation/native"

const API_URL = "http://192.168.2.39:3000/api/users/register"

const RegisterScreen = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigation = useNavigation<any>()

  const handleRegister = async () => {
    try {
      const response = await axios.post(`${API_URL}`, {
        name,
        email,
        password
      })
      console.log(response)
      Alert.alert("Success", "Registration successful")
      navigation.navigate("Login")
    } catch (error: any) {
      console.log(error)
      Alert.alert("Error", error.response?.data?.error || "Failed to register")
    }
  }

  return (
    <View className='flex-1 mt-12 items-center bg-gray-100'>
      <Text className='text-4xl font-bold'>Register</Text>
      <TextInput
        className='text-xl text-black bg-white rounded-2xl w-80 mt-10 shadow-lg p-4 '
        placeholderTextColor='#A8A8A8'
        selectionColor='black'
        placeholder='Name'
        value={name}
        onChangeText={setName}
      />
      <TextInput
        className='text-xl text-black bg-white rounded-2xl w-80 mt-6 shadow-lg p-4 '
        placeholderTextColor='#A8A8A8'
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
      />
      <TextInput
        className='text-xl text-black bg-white rounded-2xl w-80 mt-6 shadow-lg p-4 '
        placeholderTextColor='#A8A8A8'
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity
        className='flex rounded-full justify-center items-center px-8 mt-8 py-6 bg-black'
        onPress={handleRegister}>
        <Text className='text-white text-xl font-bold'>Register</Text>
      </TouchableOpacity>
      <Text
        className='mt-4 text-gray-500'
        onPress={() => navigation.navigate("Login")}>
        Already have an account? Login here.
      </Text>
    </View>
  )
}

export default RegisterScreen
