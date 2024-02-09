export type User = {
  _id: string
  ipAddress: string
  createdAt: string
}

export type UserProfile = {
  user: User
  loading: boolean
  error: string
}

export type UserState = {
  profile: UserProfile
}


