/** @format */

import React, {useState} from "react"
import {View, Text, Modal, TouchableOpacity} from "react-native"
import {Ionicons} from "@expo/vector-icons"
import {useNotification} from "./NotificationContext" // Import the context hook

export const NotificationToggle = () => {
  const {notificationsEnabled, toggleNotifications} = useNotification()
  const [isModalVisible, setModalVisible] = useState(false)

  return (
    <View>
      {/* Notification Icon */}
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className='bg-white p-3 shadow-2xl rounded-full items-center justify-center'>
        <Ionicons name='notifications-outline' size={20} color='black' />
      </TouchableOpacity>

      {/* Notification Modal */}
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType='fade'
        onRequestClose={() => setModalVisible(false)}>
        <View className='flex-1 bg-gray-900 justify-center items-center'>
          <View className='bg-white p-6 rounded-lg shadow-2xl w-4/5'>
            <Text className='text-lg font-medium mb-4'>Notifications</Text>
            <Text className='text-gray-600 mb-6'>
              Notifications are currently{" "}
              <Text className='font-bold'>
                {notificationsEnabled ? "Enabled" : "Disabled"}
              </Text>
              .
            </Text>
            <View className='flex-row justify-end'>
              <TouchableOpacity
                onPress={() => {
                  toggleNotifications()
                  setModalVisible(false)
                }}
                className='px-4 py-2 bg-black rounded-lg mr-2'>
                <Text className='text-white'>
                  {notificationsEnabled ? "Disable" : "Enable"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                className='px-4 py-2 bg-gray-200 rounded-lg'>
                <Text className='text-black'>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}
