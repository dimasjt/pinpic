export interface Account {
  id: string
  uid: string
  provider: string
}

export interface User {
  id: string
  email: string
  connected: boolean
  accounts: [Account]
}

export interface MainContextProps {
  validateToken: any
  loginUser: any
  registerUser: any
  user: User
  loggedIn: boolean
}

export interface Coordinate {
  latitude: number
  longitude: number
}

export interface Place {
  id: string
  name: string
  description: string
  location: Coordinate
}
