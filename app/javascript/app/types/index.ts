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
  pages: [Page]
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

export interface Page {
  id: string
  uid: string
  name: string
  instagramId: string
}

export interface Schedule {
  id: string
  caption: string
  publishAt: Date
}
