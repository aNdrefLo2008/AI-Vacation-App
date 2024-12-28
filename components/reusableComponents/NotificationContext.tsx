/** @format */

import React, {createContext, useContext, useState, ReactNode} from "react"

// Define the shape of the context
interface NotificationContextType {
  notificationsEnabled: boolean
  setNotificationsEnabled: (enabled: boolean) => void
  toggleNotifications: () => void
}

// Create the context
const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
)

// Provide the context
export const NotificationProvider = ({children}: {children: ReactNode}) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false)

  const toggleNotifications = () => setNotificationsEnabled((prev) => !prev)

  return (
    <NotificationContext.Provider
      value={{
        notificationsEnabled,
        setNotificationsEnabled,
        toggleNotifications
      }}>
      {children}
    </NotificationContext.Provider>
  )
}

// Hook to use the notification context
export const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    )
  }
  return context
}
