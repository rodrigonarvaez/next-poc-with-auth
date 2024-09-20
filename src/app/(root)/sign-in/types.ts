export interface SignInFormState {
  errors?: {
    username?: string[]
    password?: string[]
  }
  message?: string
  data?: {
    username: string
    password: string
  }
}
