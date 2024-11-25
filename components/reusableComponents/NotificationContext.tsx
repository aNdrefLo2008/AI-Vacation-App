/** @format */

import React, {createContext, useState, useContext} from "react"

// Define the context
const NotificationContext = createContext<{
  notificationsEnabled: boolean
  toggleNotifications: () => void
}>({
  notificationsEnabled: true,
  toggleNotifications: () => {}
})

// Provider component
export const NotificationProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)

  const toggleNotifications = () => {
    setNotificationsEnabled((prev) => !prev)
  }

  return (
    <NotificationContext.Provider
      value={{notificationsEnabled, toggleNotifications}}>
      {children}
    </NotificationContext.Provider>
  )
}

// Hook to use the context
export const useNotification = () => useContext(NotificationContext)
