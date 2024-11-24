/** @format */

import {Ionicons} from "@expo/vector-icons"
import "../../global.css"

import React, {useState} from "react"
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native"
import * as ImagePicker from "expo-image-picker" // Import the image picker

export default function AddItenarary() {
  const [image, setImage] = useState<string | null>(null) // Explicitly set state type
  // State to hold the selected image

  // Function to open the gallery and pick an image
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Allow only images
      allowsEditing: true, // Optionally allow editing (cropping)
      aspect: [1, 1], // Aspect ratio for cropping (optional)
      quality: 1 // Quality of the image
    })

    if (result && result.assets && result.assets.length > 0) {
      // Check if the result contains assets and select the first image
      setImage(result.assets[0].uri) // Set the selected image URI
    }
  }

  return (
    <View className='flex-1 bg-gray-100 relative pb-52'>
      {/* Scrollable Content */}
      <ScrollView
        className='mx-6 mt-10 flex-1'
        showsVerticalScrollIndicator={false}>
        {/* Header Section */}

        {/* Form Section */}
        <View className='flex-1 gap-4'>
          {/* Full Name Input */}
          <View className='mt-4'>
            <Text className='text-lg font-light text-left mb-2'>Full Name</Text>
            <TextInput
              className='text-base text-black bg-white rounded-lg p-4 shadow-lg'
              placeholder='Enter your full name...'
              placeholderTextColor='#A8A8A8'
              selectionColor='black'
            />
          </View>

          {/* Profile Picture Input */}
          <View className='mt-4'>
            <Text className='text-lg font-light text-left mb-2'>
              Profile Picture
            </Text>
            <TouchableOpacity
              onPress={pickImage} // Trigger the image picker when the user presses
              className='bg-white rounded-lg p-4 shadow-lg'>
              <Text className='text-base text-black text-center'>
                {image ? "Change Picture" : "Select a Picture"}
              </Text>
            </TouchableOpacity>

            {/* Display selected image */}
            <View className=' justify-center items-center my-6'>
              {image && (
                <Image
                  source={{uri: image}}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    marginTop: 10
                  }}
                />
              )}
            </View>
          </View>

          {/* Description Input */}
          <View>
            <Text className='text-lg font-light text-left mb-2'>
              Description
            </Text>
            <TextInput
              className='text-xl text-black bg-white rounded-2xl p-6 h-36 shadow-lg'
              placeholder='Write your new description here...'
              placeholderTextColor='#A8A8A8'
              selectionColor='black'
              multiline
            />
          </View>

          {/* Age and Gender Inputs side by side */}
          <View className='flex-row justify-between'>
            {/* Age Input */}
            <View className='w-1/2 pr-2'>
              <Text className='text-lg font-light text-left mb-2'>Age</Text>
              <TextInput
                className='text-base text-black bg-white rounded-lg p-4 shadow-lg'
                placeholder='Enter your age'
                placeholderTextColor='#A8A8A8'
                selectionColor='black'
              />
            </View>

            {/* Gender Input */}
            <View className='w-1/2 pl-2'>
              <Text className='text-lg font-light text-left mb-2'>Gender</Text>
              <TextInput
                className='text-base text-black bg-white rounded-lg p-4 shadow-lg'
                placeholder='Enter your gender'
                placeholderTextColor='#A8A8A8'
                selectionColor='black'
              />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Button Section */}
      <TouchableOpacity
        className='absolute gap-2 left-0 right-0 bg-gray-800 p-6 justify-center shadow-2xl flex-row items-center rounded-3xl mx-4'
        style={{bottom: 85}} // Adjust to sit above the tab bar
      >
        <Text className='font-bold text-white text-3xl'>Change Now</Text>
      </TouchableOpacity>
    </View>
  )
}
