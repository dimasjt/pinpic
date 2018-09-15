export interface Account {
  id: string
  uid: string
  provider: string
}

export interface User {
  id: string
  email?: string
  firstName: string
  lastName: string
  accounts: Account[]
}

export interface MainContextProps {
  validateToken: any
  loginUser: any
  registerUser: any
  user: User
  loggedIn: boolean
}

export interface Coordinate {
  lat: number
  lng: number
}

export interface Image {
  id: string
  fileUrl: string
}

export interface City {
  id: string
  name: string
  image: Image
  location: Coordinate
}

export interface Place {
  id: string
  name: string
  description: string
  slug: string
  location: Coordinate
  images: Image[]
  city: City
}

export interface Review {
  id: string
  message: string
  rating: number
  user?: User
}

export interface Tag {
  id: string
  name: string
  image: Image
}
