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

export interface Post {
  id: string
  caption: string
  likes: number
  tags: [string]
  type: string
  thumbnail: string
  mediaId: string
}