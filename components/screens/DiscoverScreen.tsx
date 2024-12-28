/** @format */

import "../../global.css"
import {
  ScrollView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from "react-native"
import {BlurView} from "expo-blur"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import Ionicons from "@expo/vector-icons/Ionicons"
import Feather from "@expo/vector-icons/Feather"
import AntDesign from "@expo/vector-icons/AntDesign"
import {useEffect, useState} from "react"
import axios from "axios"
import truncateAddress from "../reusableComponents/truncateAdress"

export default function DiscoverScreen({navigation}: {navigation: any}) {
  const seasonImages = [
    {name: "autumn", image: require("../../assets/images/autumn.jpg")},
    {name: "winter", image: require("../../assets/images/Winter.jpg")},
    {name: "spring", image: require("../../assets/images/spring.jpg")},
    {name: "summer", image: require("../../assets/images/2 Vacation.jpg")}
  ]

  const API_URL = "http://192.168.2.39:3000/api/locations"
  const [locations, setLocations] = useState<any[]>([])
  const [filteredLocations, setFilteredLocations] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedSeason, setSelectedSeason] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState<string>("")

  useEffect(() => {
    const initialize = async () => {
      try {
        const data = await fetchLocations(selectedSeason)
        setLocations(data || [])
        setFilteredLocations(data || [])
      } catch (error) {
        console.error("Error initializing profile screen:", error)
      } finally {
        setLoading(false)
      }
    }

    initialize()
  }, [selectedSeason])

  // Fetch locations based on season
  const fetchLocations = async (season: string | null) => {
    try {
      const response = await axios.get(API_URL)
      if (season) {
        if (season === "all") {
          return response.data
        }
        return response.data.filter(
          (location: any) =>
            location.category.toLowerCase() === season.toLowerCase()
        )
      }
      return response.data
    } catch (error) {
      console.error("Error fetching locations:", error)
      return []
    }
  }

  // Filter locations based on search query
  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase()
    const results = locations.filter(
      (location) =>
        location.name.toLowerCase().includes(lowercasedQuery) ||
        location.address.toLowerCase().includes(lowercasedQuery) ||
        location.category.toLowerCase().includes(lowercasedQuery)
    )
    setFilteredLocations(results)
  }, [searchQuery, locations])

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    )
  }

  // Component to render each location card
  const LocationCard = ({name, image, address, category, location}: any) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Location", {location})}
        className='relative justify-center items-center bg-white p-3 rounded-3xl max-w-[262px] h-[262px]'>
        <Image
          className='bg-cover rounded-3xl w-72 h-72 mx-20'
          source={{uri: image}}
        />
        <View className='absolute bottom-3 left-0 right-0 mx-3 rounded-3xl overflow-hidden'>
          <BlurView
            intensity={70}
            tint='light'
            className='justify-center items-start py-3 px-4 gap-1'>
            <Text className='font-black text-xl text-center'>{name}</Text>
            <View className='flex-row gap-20 items-center justify-between'>
              <View className='flex-row gap-1 items-center'>
                <Feather name='map-pin' size={14} color='gray' />
                <Text className='font-medium text-lg text-center text-gray-700'>
                  {truncateAddress(address)}
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
      </TouchableOpacity>
    )
  }

  return (
    <ScrollView className='flex-1 mt-10 bg-gray-100 mb-20'>
      <View className='items-center justify-between mx-10 flex-row'>
        <Text className='font-light text-2xl'>
          Hi <Text className='font-semibold text-black'>Andrei,</Text>
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Profile", {})}>
          <Image
            className='bg-cover rounded-full w-12 h-12'
            source={require("../../assets/images/Profile Picture.jpg")}
          />
        </TouchableOpacity>
      </View>
      <Text className='text-4xl text-black font-black -mt-3 p-10'>
        Where do you want to go?
      </Text>

      <View className='flex-row px-6 py-4 mx-8 rounded-lg shadow-2xl shadow-black bg-white justify-between items-center '>
        <View className='flex-row gap-6 items-center'>
          <TouchableOpacity onPress={() => setSearchQuery}>
            <FontAwesome name='search' size={24} color='black' />
          </TouchableOpacity>

          <TextInput
            className='text-xl text-black'
            placeholder='Discover a location'
            placeholderTextColor='#A8A8A8'
            selectionColor='black'
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity onPress={() => setSearchQuery}>
          <Ionicons name='filter' size={24} color='black' />
        </TouchableOpacity>
      </View>

      <Text className='font-bold text-2xl mt-8 mx-4 ml-8'>Explore Cities</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='flex-1 bg-gray-100'
        contentContainerStyle={{paddingHorizontal: 16}}>
        <View className='flex-row space-x-4 gap-10'>
          {filteredLocations.map((location) => (
            <LocationCard
              location={location}
              key={location.id}
              name={location.name}
              image={location.image}
              address={location.address}
              category={location.category}
            />
          ))}
        </View>
      </ScrollView>

      <View className='mt-12 mx-6 flex-row justify-between'>
        <Text className='text-2xl font-bold'>Categories</Text>
        <TouchableOpacity
          onPress={() => setSelectedSeason("all")}
          className='flex-row gap-1 items-center'>
          <Text className='text-xl text-gray-400'>See all</Text>
          <AntDesign name='right' size={18} color='#9ca3af' />
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='flex-1 mt-6 mb-12 bg-gray-100'>
        <View className='flex-row gap-4 mx-6'>
          {seasonImages.map((season, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedSeason(season.name)}
              className='gap-2 bg-white w-40 h-40 rounded-3xl justify-between p-2 items-center'>
              <Image
                className='bg-cover rounded-3xl w-36 h-28'
                source={season.image}
              />
              <Text className='text-black font-bold'>
                {season.name.charAt(0).toUpperCase() + season.name.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </ScrollView>
  )
}
