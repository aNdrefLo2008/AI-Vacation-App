/** @format */

import React, {createContext, useContext, useState, useEffect} from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

// Define the context value type
interface AuthContextType {
  isAuthenticated: boolean
  setIsAuthenticated: (authenticated: boolean) => void
  checkAuth: () => Promise<void>
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Provide the context
export const AuthProvider: React.FC<{children: React.ReactNode}> = ({
  children
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    checkAuth() // Check authentication status on mount
  }, [])

  const checkAuth = async () => {
    const token = await AsyncStorage.getItem("token")
    setIsAuthenticated(!!token)
  }

  return (
    <AuthContext.Provider
      value={{isAuthenticated, setIsAuthenticated, checkAuth}}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook for consuming the context
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
