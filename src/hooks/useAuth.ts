import { useState, useEffect } from 'react'

type UserType = {
  id: string,
  name: string,
  email: string,
  password: string,
  createdAt: string
}

export type RegisterType = {
  success: boolean, 
  user?: UserType,
  error?: string
}

const createUser = (name: string, email: string, password: string): UserType => ({
  id: Date.now().toString(),
  name,
  email,
  password,
  createdAt: new Date().toISOString()
})

export const useAuth = () => {
  const [user, setUser] = useState<UserType | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem('auth_user')
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.error('Erro ao carregar usuário do localStorage:', error)
        localStorage.removeItem('auth_user')
      }
    }
    setIsLoading(false)
  }, [])

  const register = (name: string, email: string, password: string): RegisterType => {
    try {
      const existingUsers = JSON.parse(localStorage.getItem('auth_users') || '[]')
      const userExists = existingUsers.find((u: UserType) => u.email === email)
      
      if (userExists) {
        throw new Error('Usuário já existe com este email')
      }

      const newUser: UserType = createUser(name, email, password)
      
      existingUsers.push(newUser)
      localStorage.setItem('auth_users', JSON.stringify(existingUsers))
      
      setUser(newUser)
      localStorage.setItem('auth_user', JSON.stringify(newUser))
      
      return { success: true, user: newUser }
    } catch (error) {
      if(error instanceof Error){
        return { success: false, error: error.message }
      } else {
        return { success: false, error: 'Houve um erro desconhecido.'}
      }
    }
  }

  const login = (email: string, password: string) => {
    try {
      const users = JSON.parse(localStorage.getItem('auth_users') || '[]')
      const user = users.find((u: UserType) => u.email === email && u.password === password)
      
      if (!user) {
        throw new Error('Email ou senha incorretos')
      }

      setUser(user)
      localStorage.setItem('auth_user', JSON.stringify(user))
      
      return { success: true, user }
    } catch (error) {
      if(error instanceof Error){
        return { success: false, error: error.message }
      } else {
        return { success: false, error: 'Houve um erro desconhecido.'}
      }
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('auth_user')
  }

  const isAuthenticated = !!user

  return {
    user,
    isLoading,
    isAuthenticated,
    register,
    login,
    logout
  }
} 