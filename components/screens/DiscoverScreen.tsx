/** @format */

import "../../global.css"

import {ScrollView, Text, View, Image, TextInput} from "react-native"
import {BlurView} from "expo-blur"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import Ionicons from "@expo/vector-icons/Ionicons"
import Feather from "@expo/vector-icons/Feather"
import AntDesign from "@expo/vector-icons/AntDesign"

export default function Index() {
  return (
    <ScrollView className='flex-1 mt-16 bg-gray-100 mb-20'>
      <View className='items-center justify-between mx-10 flex-row'>
        <Text className='font-light text-2xl'>
          Hi
          <Text className='font-semibold text-black'> Andrei,</Text>
        </Text>
        <Image
          className='bg-cover rounded-full w-12 h-12'
          source={require("../../assets/images/Profile Picture.jpg")}
        />
      </View>
      <Text className='text-4xl text-black font-black -mt-3 p-10'>
        Where do you want to go?
      </Text>
      <View className='flex-row p-6 mx-8 rounded-lg shadow-2xl shadow-black bg-white justify-between items-center '>
        <View className='flex-row gap-6 items-center'>
          <FontAwesome name='search' size={24} color='black' />
          <TextInput
            className='text-xl text-black'
            placeholder='Discover a location'
            placeholderTextColor='#A8A8A8'
            selectionColor='black'
          />
        </View>
        <Ionicons name='filter' size={24} color='black' />
      </View>
      <Text className='font-semibold text-2xl mt-8 mx-4 ml-8'>
        Explore Cities
      </Text>
      <ScrollView
        horizontal // Enable horizontal scrolling
        showsHorizontalScrollIndicator={false} // Hide the scroll indicator for a cleaner look
        className='flex-1 mt-4 mb-6 bg-gray-100'
        contentContainerStyle={{paddingHorizontal: 16}} // Optional padding around items
      >
        <View className='flex-row gap-12 mx-6 '>
          <Text className='text-xl font-medium text-gray-300'>All</Text>
          <Text className='text-xl font-medium text-black'>Popular</Text>
          <Text className='text-xl font-medium text-gray-300'>Recommended</Text>
          <Text className='text-xl font-medium text-gray-300'>Most Viewed</Text>
          <Text className='text-xl font-medium text-gray-300'>5 Stars</Text>
        </View>
      </ScrollView>
      <ScrollView
        horizontal // Enable horizontal scrolling
        showsHorizontalScrollIndicator={false} // Hide the scroll indicator for a cleaner look
        className='flex-1 bg-gray-100'
        contentContainerStyle={{paddingHorizontal: 16}} // Optional padding around items
      >
        <View className='flex-row space-x-4 gap-10'>
          <View className=' relative justify-center items-center bg-white p-3 rounded-3xl max-w-[262px] h-[262px]'>
            <Image
              className='bg-cover rounded-3xl w-72 h-72 mx-20'
              source={require("../../assets/images/3 Vacation.jpg")}
            />
            <View className='absolute bottom-3 left-0 right-0 mx-3 rounded-3xl overflow-hidden'>
              <BlurView
                intensity={70}
                tint='light'
                className='justify-center items-start py-3 px-4 gap-1'>
                <Text className='font-black text-xl text-center'>
                  Amalfi Coast
                </Text>

                <View className='flex-row gap-20 items-center justify-between'>
                  <View className='flex-row gap-1 items-center'>
                    <Feather name='map-pin' size={14} color='gray' />
                    <Text className='font-medium text-lg text-center text-gray-700'>
                      Italy
                    </Text>
                  </View>
                  <View className='flex-row gap-1 items-center'>
                    <AntDesign name='staro' size={14} color='gray' />
                    <Text className='font-medium text-lg text-center text-gray-700'>
                      4.9
                    </Text>
                  </View>
                </View>
              </BlurView>
            </View>
          </View>

          <View className='relative justify-center items-center bg-white p-3 rounded-3xl max-w-[262px] h-[262px]'>
            <Image
              className='bg-cover rounded-3xl w-72 h-72 mx-20'
              source={require("../../assets/images/1 Vacation.jpg")}
            />
            <View className='absolute bottom-3 left-0 right-0 mx-3 rounded-3xl overflow-hidden'>
              <BlurView
                intensity={70}
                tint='light'
                className='justify-center items-start py-3 px-4 gap-1'>
                <Text className='font-black text-xl text-center'>
                  Mar Caribe
                </Text>

                <View className='flex-row gap-20 items-center justify-between'>
                  <View className='flex-row gap-1 items-center'>
                    <Feather name='map-pin' size={14} color='gray' />
                    <Text className='font-medium text-lg text-center text-gray-700'>
                      Thailand
                    </Text>
                  </View>
                  <View className='flex-row gap-1 items-center'>
                    <AntDesign name='staro' size={14} color='gray' />
                    <Text className='font-medium text-lg text-center text-gray-700'>
                      4.7
                    </Text>
                  </View>
                </View>
              </BlurView>
            </View>
          </View>
        </View>
      </ScrollView>
      <View className='mt-12 mx-6 flex-row justify-between'>
        <Text className='font-semibold text-2xl '>Categories</Text>
        <View className='flex-row gap-1 items-center'>
          <Text className='text-xl text-gray-400'>See all</Text>
          <AntDesign name='right' size={18} color='#9ca3af' />
        </View>
      </View>
      {/*<Text className='' style={[globalStyles.text, {fontSize: 24}]}>
        Out There, Go Explore
      </Text>
      <Text style={[globalStyles.text, {fontSize: 18}]}>
        Where do you want to go?
      </Text>*/}
      <ScrollView
        horizontal // Enable horizontal scrolling
        showsHorizontalScrollIndicator={false}
        className='flex-1 mt-6 mb-12 bg-gray-100'>
        <View className='flex-row gap-4 mx-6'>
          <View className='gap-2 bg-white w-40 h-40 rounded-3xl justify-between p-2 items-center'>
            <Image
              className='bg-cover rounded-3xl w-36 h-28'
              source={require("../../assets/images/1 Vacation.jpg")}
            />
            <Text className='text-black font-semibold text-xl'>Beach</Text>
          </View>
          <View className='gap-2 bg-white w-40 h-40 rounded-3xl justify-between p-2 items-center'>
            <Image
              className='bg-cover rounded-3xl w-36 h-28'
              source={require("../../assets/images/2 Vacation.jpg")}
            />
            <Text className='text-black font-semibold text-xl'>Santorini</Text>
          </View>
          <View className='gap-2 bg-white w-40 h-40 rounded-3xl justify-between p-2 items-center'>
            <Image
              className='bg-cover rounded-3xl w-36 h-28'
              source={require("../../assets/images/3 Vacation.jpg")}
            />
            <Text className='text-black font-semibold text-xl'>Maldives</Text>
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  )
}
