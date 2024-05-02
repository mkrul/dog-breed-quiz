import { Settings } from './settings'

export interface User {
  _id: string
  username: string
  createdAt: string
  loading: boolean
  error: string
}
